import React, { Component } from "react";
import API from "../utils/API";
// import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import SearchButton from "../components/SearchButton";
import ListItem from "../components/ListItem";
import List from "../components/List";
import { Container, Row, Col } from "reactstrap";

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
            .then(res => this.setState({ freelancerList: res.data }))
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
                <h2 style={{ paddingTop: 30, textAlign: "center" }}>Search</h2>
                <Container style={{
                    marginLeft: 40,
                    marginRight: 20,
                    paddingTop: 20,
                    paddingRight: 0,
                    paddingBottom: 30,
                    display: "center"
                }}>
                    <Row>
                        <Col sm="6" >
                            <SearchBar
                                name="position"
                                value={this.state.position}
                                onChange={this.handleInputChange}
                                placeholder="Position"
                                style={{ width: 230, height: 40, paddingLeft: 10, marginLeft: 10 }}
                            />
                        </Col>
                        <Col sm="5">
                            <SearchBar
                                name="location"
                                value={this.state.location}
                                onChange={this.handleInputChange}
                                placeholder="Location"
                                style={{ width: 250, height: 40, paddingLeft: 10, marginLeft: 0 }}
                            />
                        </Col>
                        <Col sm="1">
                            <SearchButton
                                style={{ display: "inline-block", marginTop: 5, paddingLeft: 0, marginLeft: 0 }}
                                disabled={!(this.state.freelancerList.position && this.state.freelancerList.location)}
                                onClick={this.handleFormSubmit}
                            />
                        </Col>
                    </Row>
                </Container>

                <div >
                {this.state.freelancerList.length ? (
                    <List>
                        {this.state.freelancerList.map(freelancer => (
                            <ListItem 
                                key={freelancer._id}>
                                <Link to={"/freelancers/" + freelancer._id}>
                                    <strong>
                                        {freelancer.position} in {freelancer.location}
                                    </strong>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                ) : (
                        <h3 style={{ paddingTop: 100, textAlign: "center" }}> No search results. </h3>
                    )}
                </div>
            </>
        )
    }
}

export default ActualSearchResults; 