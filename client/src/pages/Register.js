import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { ResultList, ResultListItem } from "../components/Result";
import { Input, TextArea, FormBtn } from "../components/Form";

class Register extends Component {
    state = {
        freelancers: [],
        name: "",
        position: "",
        bio: "",
        location: "",
        rate: 0
    };

    componentDidMount() {
        this.loadFreelancers();
    }

    loadFreelancers = () => {
        API.getFreelancers()
            .then(res =>
                this.setState({ freeLancers: res.data, name: "", position: "", bio: "", location: "", rate: "" })
            )
            .catch(err => console.log(err));
    };


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.name && this.state.position && this.state.location) {
            API.createUser({
                name: this.state.name,
                position: this.state.position,
                bio: this.state.bio,
                location: this.state.location,
                rate: this.state.rate
            })
                .then(res => this.loadFreelancers())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <>
                <Jumbotron>
                    <h1>Become a Freelancer!</h1>
                </Jumbotron>
                <form>
                    <h2>Name: {this.state.name}</h2>
                    <Input
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        name="name"
                        placeholder="Name"
                        type="text"
                    />
                    <h2>Position {this.state.position}</h2>
                    <Input
                        value={this.state.position}
                        onChange={this.handleInputChange}
                        name="position"
                        placeholder="Position"
                        type="text"
                    />
                    <h2>Bio: {this.state.bio}</h2>
                    <TextArea
                        value={this.state.bio}
                        onChange={this.handleInputChange}
                        name="bio"
                        placeholder="Tell Us About Yourself"
                        type="text"
                    />
                    <h2>Location: {this.state.location}</h2>
                    <Input
                        value={this.state.position}
                        onChange={this.handleInputChange}
                        name="location"
                        placeholder="Location"
                        type="text"
                    />
                    <h2>Rate: {this.state.rate}</h2>
                    <Input
                        value={this.state.rate}
                        onChange={this.handleInputChange}
                        name="rate"
                        placeholder="Hourly Rate"
                    />
                    <FormBtn
                        disabled={!(this.state.name && this.state.position && this.state.location)}
                        onClick={this.handleFormSubmit}
                    >
                        Submit Information
              </FormBtn>
                </form>
            </>

        );
    }
}

export default Register;