import React, { Component } from 'react';
import { Container, Row } from "reactstrap";
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import axios from 'axios';

const API_PATH = 'http:localhost:80/project3/api/contact/index.php';

class RequestWorkForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      message: '',
      mailSent: false,
      error: null
    }
  }

  handleFormSubmit = e => {
    e.preventDefault();
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: this.state
    })
      .then(result => {
        this.setState({
          mailSent: result.data.sent
        })
        console.log(this.state);
      })
      .catch(error => this.setState({ error: error.message }));
  };

  render() {
    return (
      <Container
        style={{
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

        <div className="RequestWorkForm" style={{ verticalAlign: "center" }}>
          <Row>
            <Col sm="2">
            </Col>

            <Col sm="8">
              <h3 style={{ textAlign: "center", paddingTop: 20 }}>Contact Me</h3>
              <Form style={{
                paddingTop: 20,
                paddingBottom: 20,
                width: "90%",

              }}>
                <FormGroup row>
                  <Label for="firstName" sm={2}>First Name</Label>
                  <Col sm={10}>
                    <Input
                      type="text"
                      id="fname"
                      name="firstname"
                      placeholder="First Name"
                      value={this.state.fname}
                      onChange={e => this.setState({ fname: e.target.value })} />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="lastName" sm={2}>Last Name</Label>
                  <Col sm={10}>
                    <Input
                      type="text"
                      id="lname"
                      name="lastname"
                      placeholder="Last Name"
                      value={this.state.lname}
                      onChange={e => this.setState({ lname: e.target.value })} />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="email" sm={2}>Email</Label>
                  <Col sm={10}>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={e => this.setState({ email: e.target.value })} />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="exampleText" sm={2}>Message</Label>
                  <Col sm={10}>
                    <Input
                      type="textarea"
                      id="message"
                      name="message"
                      placeholder="Write something..."
                      onChange={e => this.setState({ message: e.target.value })}
                      value={this.state.message} />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="exampleFile" sm={2}>File</Label>
                  <Col sm={10}>
                    <Input
                      type="file"
                      name="file"
                      id="exampleFile" />
                    <FormText color="muted">
                      Please attach any files that may pertain to the job.
                  </FormText>
                  </Col>
                </FormGroup>

                <FormGroup check row>
                  <Col sm={{ size: 10, offset: 2 }}>
                    <Button 
                      type="submit"
                      onClick={e => this.handleFormSubmit(e)}
                      value="Submit"
                      style={{ float: "right", marginBottom: 20 }}>
                      Submit</Button>
                    <div>
                      {this.state.mailSent &&
                        <div className="success">Thank you for contacting me.</div>
                      }
                      {this.state.error &&
                        <div className="error">Sorry we had some problems.</div>
                      }
                    </div>
                  </Col>
                </FormGroup>
              </Form>
            </Col>
            <Col sm="2">
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}





export default RequestWorkForm;