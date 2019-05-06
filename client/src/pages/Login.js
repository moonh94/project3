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
    
    
    render() {
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
                        disabled={!(this.state.name && this.state.position)}
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




