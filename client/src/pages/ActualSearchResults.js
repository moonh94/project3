import React, { Component } from "react";
import API from "../utils/API";
// import styled from "styled-components";
import SearchBar from "../components/SearchBar";

class Search extends Component {
    state = {
        freelancer: [{}]
    }



    componentDidMount() {
        this.loadResults();
    }

    loadResults = () => {
        API.getFreelancerByPositionAndLocation(this.props.match.params.position.location)
            .then(res => this.setState({ freelancer: res.data}))
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


    }
    render() {
        return (
            <>
                <h2>Search</h2>
                <SearchBar />
            </>
        )

    }
}

export default Search; 