import React from "react";
import Login from "../Login";


const display = {
    display: 'block'
  };
  const hide = {
    display: 'none'
  };
  
  class Modal extends React.Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = {
        toggle: false
      }
    }
  
    toggle(event) {
      this.setState((prevState) => ({
        toggle: !prevState.toggle
      }));
    }
    render() {
      var modal = [];
      modal.push(
        <div className="modal" style={this.state.toggle ? display : hide}>
        <div className="modal-content">
          <Login />
        </div>
        <div className="modal-footer">
          <a className="btn-flat" onClick={this.toggle}>Agree</a>
        </div>
      </div>
      );
      return (
        <div>
          <a className="btn" onClick={this.toggle}>{this.state.toggle ? 'Close modal' : 'Open modal'}</a>
          {modal}
         
        </div>
      );
    }
  }
 
export default Modal;