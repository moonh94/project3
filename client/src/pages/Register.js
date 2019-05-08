import React, { Component } from "react";
import API from "../utils/API";
import { Col, Form, FormGroup, Label } from 'reactstrap';
import { Container, Row} from "reactstrap";
import { Link } from "react-router-dom";

import { Input, TextArea, FormBtn } from "../components/Form";
import Footer from "../components/Footer"
import "../Styles/register.css";

class Register extends Component {
    state = {
        freelancers: [],
        name: "",
        position: "",
        location: "",
        rate: 0,
        validUsername: false,
        validPassword: false,
        confirmPassword: false,
        bio: "",
        email:"",
        password: ""
    };

    componentDidUpdate() {
        this.validatePassword();
        this.confirmPassword();
        this.validateUsername();
    }

    validateUsername() {
        if (this.props.username > 1 && !this.state.validUsername) {
            this.setState({
                validUsername: true
            });
        }
        if (this.props.username < 1 && this.state.validUsername) {
            this.setState({
                validUsername: false
            });
        }
    }

    validatePassword() {
        let strongPassword = new RegExp(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/);
        let valid = strongPassword.test(this.props.password);
        if (!this.state.validPassword && valid) {
            this.setState({
                validPassword: true
            });
        }
        if (this.state.validPassword && !valid) {
            this.setState({
                validPassword: false,
            });
        }
    }

    confirmPassword() {
        if (this.props.password === this.props.confirmPassword && !this.state.confirmPassword && this.props.password) {
            this.setState({
                confirmPassword: true
            });
        }
        if (this.props.password !== this.props.confirmPassword && this.state.confirmPassword) {
            this.setState({
                confirmPassword: false
            });
        }
    }

    componentDidMount() {
        this.loadFreelancers();
    }

    loadFreelancers = () => {
        API.getFreelancers()
            .then(res =>
                this.setState({ freeLancers: res.data, name: "", position: "", bio: "", location: "", rate: "", email:"", password:"" })
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
        if (this.state.name && this.state.position && this.state.location && this.state.bio && this.state.rate
            && this.state.email && this.state.password) {
            API.createUser({
                    name: this.state.name,
                    position: this.state.position,
                    location: this.state.location,
                    bio: this.state.bio,
                    rate: this.state.rate,
                    email: this.state.email,
                    password: this.state.password
                })
                .then(res => this.loadFreelancers())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <>
                <div>
                    
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
                    <h2 style={{ textAlign: "center", paddingTop: 40, paddingBottom: 20 }}>Create Account</h2>
                        <Row>
                            <Col sm="2">
                            </Col>

                            <Col sm="8">
                                <Form className="registerForm" style={{ paddingTop: 20}}>
                                    <FormGroup row>
                                        <Label for="exampleName" sm={2}>Name</Label>
                                        <Col sm={10}>
                                            <Input
                                                value={this.state.name}
                                                onChange={this.handleInputChange}
                                                name="name"
                                                placeholder="Name"
                                                type="text"
                                            />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label for="exampleEmail" sm={2}>Email</Label>
                                        <Col sm={10}>
                                            <Input
                                                value={this.state.email}
                                                onChange={this.handleInputChange}
                                                name="email"
                                                placeholder="Email"
                                                type="text"
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
                                                placeholder="Password"
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
                                                placeholder="Position"
                                                type="text"
                                            />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label for="exampleBio" sm={2}>Bio</Label>
                                        <Col sm={10}>
                                            {/* <Input type="textarea" name="text" id="exampleText" /> */}
                                            <TextArea
                                                value={this.state.bio}
                                                onChange={this.handleInputChange}
                                                name="bio"
                                                placeholder="Tell Us About Yourself"
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
                                                placeholder="Location"
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
                                                placeholder="Hourly Rate"
                                            />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup check row>
                                        <Col sm={{ size: 10, offset: 2 }}>
                                            <FormBtn
                                                disabled={!(this.state.name && this.state.position && this.state.location)}
                                                onClick={this.handleFormSubmit}
                                            >
                                                Submit Information
                                 </FormBtn>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </Col>

                            <Col sm="2">
                            </Col>
                        </Row>
                </Container>
                </div>
            </>

        );
    }
}

export default Register;

