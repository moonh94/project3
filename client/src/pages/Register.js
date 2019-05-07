import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn"
import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { ResultList, ResultListItem } from "../components/Result";
import { Col, Form, FormGroup, Label} from 'reactstrap';
import { Input, TextArea, FormBtn } from "../components/Form";
import "../Styles/register.css";

class Register extends Component {
    state = {
        freelancers: [],
        name: "",
        position: "",
        bio: "",
        location: "",
        rate: 0,
        validUsername: false,
        validPassword: false,
        confirmPassword: false
    };

    componentDidUpdate() {
        this.validatePassword();
        this.confirmPassword();
        this.validateUsername();
    }

    validateUsername() {
        if (this.props.username.length > 1 && !this.state.validUsername) {
            this.setState({
                validUsername: true
            });
        }
        if (this.props.username.length < 1 && this.state.validUsername) {
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
            <div>
                <h2 style={{ textAlign: "center", paddingTop: 60, paddingBottom: 0 }}>Create Account</h2>
                <div >
                <Form className="registerForm" style={{ paddingTop: 20, overflow:"scroll" }}>
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
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                name="name"
                                placeholder="Email"
                                type="text"
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="examplePassword" sm={2}>Password</Label>
                        <Col sm={10}>
                            <Input
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                name="name"
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
                        <Label for="examplePosition" sm={2}>Location</Label>
                        <Col sm={10}>
                            <Input
                                value={this.state.position}
                                onChange={this.handleInputChange}
                                name="location"
                                placeholder="Denver"
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
                </div>

                {/* <form className="registerForm">
                    <h2>Name: {this.state.name}</h2>
                    <Input
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        name="name"
                        placeholder="Name"
                        type="text"
                    />
                    <h2>Email: {this.state.name}</h2>
                    <Input
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        name="name"
                        placeholder="Email"
                        type="text"
                    />
                    <h2>Password: {this.state.name}</h2>
                    <Input
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        name="name"
                        placeholder="Password"
                        type="text"
                    />
                    <h2>Position: {this.state.position}</h2>
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
                </form> */}
            </div>

        );
    }
}

export default Register;

