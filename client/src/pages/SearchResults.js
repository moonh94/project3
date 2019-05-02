import React, { Component } from "react";
// import API from "../utils/API";
// import styled from "styled-components";

class Search extends Component {
    state = {
        jobList: [],
        
    }



    componentDidMount() {
       
    }


    handleInputChange = (event) => {
        // this.setState({ selectedBreed: event.target.value });
    }

    handleFormSubmit = (event) => {
        event.preventDefault ();
        // API.getImagesByBreed(this.state.selectedBreed)
        //     .then(res => this.setState({breedImages: res.data.message.slice(0, 25) }))
        //     .catch(err => console.log(err));
    }
    render () {
        return (
            <> 
            <h2>Search</h2>
            <form>
            <label htmlFor="Job Title">Job Search:</label>
                   
                    <input
                        list=""
                        id=""
                        name=""
                        className="form-control"
                        placeholder="Choose a job" 
                        onChange={this.handleInputChange}
                        value={this.state.selectedBreed}
                        />
                    
                    <datalist
                        id="breeds">
                        {this.state.breedList.map(breed => <option value={breed} key={breed} />)}
                    </datalist>
                    <span onClick={ () => this.setState({selectedBreed: ""})}><i className="fas fa-times-circle"></i></span>
                   
                    <button 
                        type="submit" 
                        className="btn btn-success btn-block mt-2"
                        onClick={this.handleFormSubmit}>Search</button>

            </form>
            </>
        )
       
    }
}

export default Search; 