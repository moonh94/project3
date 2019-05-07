import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";

class Login extends Component {
    state =
        {
            name: "",
        password: ""
        };
   
   
        componentDidMount() {

    }
    handleInputChange=(event)=>{
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    handleFormSubmit= (event)=>{
        event.preventDefault();
        
        this.setState({name:"", password:""});

    }
    
    
    render() { //probably import alex's passport login page
        return (
            <>
                <Jumbotron>
                    <h1>Member Login</h1>
                </Jumbotron>
                <form>
                    <p>Username: {this.state.name}</p>
                    <p>Password: {this.state.password}</p>
                    <Input
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        name="name"
                        placeholder="Name"
                        type="text"
                    />
                    <Input
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                        placeholder="Password"
                        type="password"
                    />

                    <FormBtn
                        disabled={!(this.state.name && this.state.password)}
                        onClick={this.handleFormSubmit}
                    >
                        Login
              </FormBtn>
                </form>
            </>

        );
    }
}

export default Login;
import React, { Component } from "react";
import API from "../utils/API";
// import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import SearchButton from "../components/SearchButton";
import ListItem from "../components/ListItem";
import List from "../components/List";

class ActualSearchResults extends Component {
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
        API.getFreelancerByPositionAndLocation(this.props.match.params.position, this.props.match.params.location)
            .then(res => this.setState({ freelancerList: res.data}))
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
        API.getFreelancerByPositionAndLocation(this.state.position, this.state.location)
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
                    disabled={!(this.state.freelancerList.position && this.state.freelancerList.location)}
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

export default ActualSearchResults; 