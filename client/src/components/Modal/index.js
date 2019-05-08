

import React from 'react';
import Login from "../Login/Login";
import { NavLink } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <NavLink
          to="#"
          className="nav-link"
          activeClassName="active"
          style={{ backgroundColor: "none", color: "gray" }}
          onClick={this.toggle}>Login</NavLink>
        <Modal isOpen={this.state.modal} toggle={this.toggle}
          className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Login</ModalHeader>
          <ModalBody>
            <Login />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Sign In</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;