import React, { Component } from "react";
import API from "../utils/API";
// import styled from "styled-components";
import SearchBar from "../components/SearchBar";

class Search extends Component {
    state = {
        freelancerList: [],
        position: "",
        location: "",
        bio: "",
        rate: 0
    }



    componentDidMount() {
        this.loadResults();
    }

    loadResults = () => {
        API.getFreelancerByPositionAndLocation()
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