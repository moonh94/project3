import React, { Component } from "react";
import { Form, FormGroup, Label } from 'reactstrap';
import { Container, Col, Row } from "reactstrap";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Input, TextArea, FormBtn } from "../components/Form";


class UserUpdate extends Component {
    state = {
        freelancers: [],
        name: "",
        position: "",
        location: "",
        bio: "",
        rate: 0,
        email: "",
        password: ""
    };

    componentDidMount() {
        this.loadFreelancers();

    }

    loadFreelancers = () => {
        API.getFreelancers()
            .then(res => {

                console.log(res)
                this.setState({ freelancers: res.data, name: "", position: "", bio: "", location: "", rate: "", email: "", password: "" })
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
            .then(res => this.props.history.push("/profileupdated"))
            .catch(err => console.log(err));
        // }
    };



    render() {
        return (
            <>
                <Container style={{
                    width: 900,
                    height: "auto",
                    paddingTop: 20,
                    marginTop: 50,
                    border: 10,
                    borderStyle: "solid",
                    borderWidth: 1,
                    background: "white",
                    opacity: .9
                }}
                >
                    <Row>
                        <Col sm="2">
                        </Col>
                        <Col sm="8">
                            <h2 style={{textAlign: "center", paddingTop: 20}}>Update Profile</h2>
                            <Form className="updateProfile" style={{ paddingTop: 40 }}>
                                <FormGroup row>
                                    <Label for="exampleName" sm={2}>Name</Label>
                                    <Col sm={10}>
                                        <Input
                                            value={this.state.name}
                                            onChange={this.handleInputChange}
                                            name="name"
                                            placeholder={this.state.name}
                                            type="text"
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="examplePosition" sm={2}>Position</Label>
                                    <Col sm={10}>
                                        <Input
                                            value={this.state.position}
                                            onChange={this.handleInputChange}
                                            name="position"
                                            placeholder={this.state.position}
                                            type="text"
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="exampleBio" sm={2}>Bio</Label>
                                    <Col sm={10}>
                                        <TextArea
                                            value={this.state.bio}
                                            onChange={this.handleInputChange}
                                            name="bio"
                                            placeholder={this.state.bio}
                                            type="text"
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="exampleLocation" sm={2}>Location</Label>
                                    <Col sm={10}>
                                        <Input
                                            value={this.state.location}
                                            onChange={this.handleInputChange}
                                            name="location"
                                            placeholder={this.state.location}
                                            type="text"
                                        />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="exampleRate" sm={2}>Rate</Label>
                                    <Col sm={10}>
                                        <Input
                                            value={this.state.rate}
                                            onChange={this.handleInputChange}
                                            name="rate"
                                            placeholder={this.state.rate}
                                        />      </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="exampleEmail" sm={2}>Email</Label>
                                    <Col sm={10}>
                                        <Input
                                            value={this.state.email}
                                            onChange={this.handleInputChange}
                                            name="email"
                                            placeholder={this.state.email}
                                        />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="examplePassword" sm={2}>Password</Label>
                                    <Col sm={10}>
                                        <Input
                                            value={this.state.password}
                                            onChange={this.handleInputChange}
                                            name="password"
                                            placeholder={this.state.password}
                                            type="password"
                                        />
                                    </Col>
                                </FormGroup>

                                <FormBtn
                                    disabled={!(this.state.name && this.state.position && this.state.location)}
                                    onClick={(event) => this.handleFormSubmit(event, this.props.match.params.id)}
                                >
                                    Update Information
                    </FormBtn>

                            </Form>
                        </Col>
                        <Col sm="2">
                        </Col>
                    </Row>
                </Container>
            </>

        );
    }
}

export default UserUpdate;