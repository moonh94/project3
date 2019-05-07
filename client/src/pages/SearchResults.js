import React, { Component } from "react";
import API from "../utils/API";
// import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import SearchButton from "../components/SearchButton";
import ListItem from "../components/ListItem";
import List from "../components/List";

class SearchResults extends Component {
    state = {
        freelancerList: [],
        name: "",
        position: "",
        location: "",
        bio: "",
        rate: 0
    }



    componentDidMount() {
        this.loadResults();
    }

    loadResults = () => {
        API.getFreelancers()
            .then(res => this.setState({ freelancerList: res.data, name: "", position: "", location: "", bio: "", rate: 0 }))
            .catch(err => console.log(err))
    }


    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleInputChange2 = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        // this.state.SearchBar.props.position, this.state.match.SearchBar.props.location
        API.getFreelancerByPositionAndLocation()
            .then(res => this.setState({ freelancerList: res.data, position: "", location: "", bio: "", rate: 0 }))
            .catch(err => console.log(err))
        console.log("clicked")
       

    }
    render() {
        return (
            <>
                <h2>Search</h2>
            
                <SearchBar 
                    name="position"
                    value={this.state.position} 
                    onChange={this.handleInputChange}
                />
                <SearchBar 
                    name="location"
                    value={this.state.location} 
                    onChange={this.handleInputChange}
                />
                    <SearchButton
                        disabled={!(this.state.position && this.state.location)}
                        onClick={this.handleFormSubmit}
                    />
                {this.state.freelancerList.length ? (
                    <List>
                        {this.state.freelancerList.map(freelancer => (
                            <ListItem 
                                key={freelancer._id}>
                                <strong>
                                    {freelancer.position} in {freelancer.location}
                                </strong>
                            </ListItem>
                        ))}
                    </List>
                ) : (
                    <h3> No search results </h3>
                )}
            </>
        )

    }
}

export default SearchResults; 