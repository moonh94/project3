import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { ResultList, ResultListItem } from "../components/Result";
import { Input, TextArea, FormBtn } from "../components/Form";


class UserUpdate extends Component {
    state = {
        freelancers: [],
        name: "",
        position: "",
        location: "",
        bio: "",
        rate: 0,
        email:"",
        password: ""
    };

    componentDidMount() {
        this.loadFreelancers();
    
    }

    loadFreelancers = () => {
        API.getFreelancers()
            .then(res =>{

            console.log(res)
                this.setState({ freelancers: res.data, name: "", position: "", bio: "", location: "", rate: "", email:"", password:"" })
        })
            .catch(err => console.log(err));
    };



    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    

    handleFormSubmit = (event, id) => {
        event.preventDefault();
            API.updateUser(id, {
                    name: this.state.name,
                    position: this.state.position,
                    location: this.state.location,
                    bio: this.state.bio,
                    rate: this.state.rate,
                    email: this.state.email,
                    password: this.state.password
                })
                .then(res => this.props.history.push("/confirm"))
                .catch(err => console.log(err));
            // }
    };

  

    render() {
        return (
            <>
                <Jumbotron>
                    <h1>Update your profile information</h1>
                </Jumbotron>
                <form>
                    <h2>Name:</h2>
                    <Input
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        name="name"
                        placeholder={this.state.name}
                        type="text"
                    />
                    <h2>Position:</h2>
                    <Input
                        value={this.state.position}
                        onChange={this.handleInputChange}
                        name="position"
                        placeholder={this.state.position}
                        type="text"
                    />
                    <h2>Bio:</h2>
                    <TextArea
                        value={this.state.bio}
                        onChange={this.handleInputChange}
                        name="bio"
                        placeholder={this.state.bio}
                        type="text"
                    />
                    <h2>Location:</h2>
                    <Input
                        value={this.state.location}
                        onChange={this.handleInputChange}
                        name="location"
                        placeholder={this.state.location}
                        type="text"
                    />
                    <h2>Rate:</h2>
                    <Input
                        value={this.state.rate}
                        onChange={this.handleInputChange}
                        name="rate"
                        placeholder={this.state.rate}
                    />
                    <h2>Email:</h2>
                    <Input
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        name="email"
                        placeholder={this.state.email}
                    />
                     
                    <h2>Password:</h2>
                    <Input
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                        placeholder={this.state.password}
                        type="password"
                    />
                   
                    <FormBtn
                        disabled={!(this.state.name && this.state.position && this.state.location)}
                        onClick={(event) => this.handleFormSubmit(event, this.props.match.params.id)}   
                    >
                        Update Information
                    </FormBtn>
              
                </form>
            </>

        );
    }
}

export default UserUpdate;