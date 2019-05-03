import React, { Component } from "react";
// import API from "../utils/API";
// import styled from "styled-components";
import SearchBar from "../components/SearchBar";

class Search extends Component {
    state = {
        jobList: [],
        
    }



    componentDidMount() {
       
    }


    handleInputChange = (event) => {
     
    }

    handleFormSubmit = (event) => {
        event.preventDefault ();
     
    }
    render () {
        return (
            <> 
            <h2>Search</h2>
            <SearchBar />
            </>
        )
       
    }
}

export default Search; 