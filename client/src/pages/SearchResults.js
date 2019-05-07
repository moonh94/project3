import React, { Component } from "react";
import API from "../utils/API";
// import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import SearchButton from "../components/SearchButton";
import ListItem from "../components/ListItem";
import List from "../components/List";

class Search extends Component {
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

    // loadResults = () => {
    //     API.getFreelancerByPositionAndLocation()
    //         .then(res => this.setState({ freelancerList: res.data, position: "", location: "", bio: "", rate: 0 }))
    //         .catch(err => console.log(err))
    // }

    loadResults = () => {
        API.getFreelancers()
            .then(res => this.setState({ freelancerList: res.data, position: "", location: "", bio: "", rate: 0 }))
            .catch(err => console.log(err))
    }


    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        API.getFreelancerByPositionAndLocation()
            .then(res => this.setState({ freelancerList: res.data, position: "", location: "", bio: "", rate: 0 }))
            .catch(err => console.log(err))
        console.log("clicked")

    }
    render() {
        return (
            <>
                <h2 style={{ textAlign: "center", paddingTop: 50 }}>Search</h2>
                <span className="rowSearch" style={{ paddingTop: 0 }}>
                    <SearchBar />
                    <SearchButton
                        style={{display: "inline-flex", flexDirection: "row"}}
                        disabled={!(this.state.position && this.state.location)}
                        onClick={this.handleFormSubmit}
                    />
                </span>
                {this.state.freelancerList.length ? (
                    <List>
                        {this.state.freelancerList.map(freelancer => (
                            <ListItem key={freelancer._id}>
                                <strong>
                                    {freelancer.position} in {freelancer.location}
                                </strong>
                            </ListItem>
                        ))}
                    </List>
                ) : (
                        <h3 style={{ paddingTop: 100, textAlign: "center" }}> No search results. </h3>
                    )}
            </>
        )

    }
}

export default Search; 