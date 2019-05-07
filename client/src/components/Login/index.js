// import React from 'react';
// import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

//  export default class Example extends React.Component {
//    render() {
//      return (
//        <Form style={{paddingTop: 50, paddingLeft: 250, paddingRight: 250}}>
//          <FormGroup>
//            <Label for="exampleEmail">Email</Label>
//            <Input type="email" name="email" id="exampleEmail" placeholder="email@gmail.com" />
//          </FormGroup>
//          <FormGroup>
//            <Label for="examplePassword">Password</Label>
//            <Input type="password" name="password" id="examplePassword" placeholder="password" />
//          </FormGroup>
//          <Button>Login</Button>
//        </Form>
//      );
//    }
//  }

// class Example extends React.Component {
//   constructor(props, context) {
//     super(props, context);

//     this.handleShow = this.handleShow.bind(this);
//     this.handleClose = this.handleClose.bind(this);

//     this.state = {
//       show: false,
//     };
//   }

//   handleClose() {
//     this.setState({ show: false });
//   }

//   handleShow() {
//     this.setState({ show: true });
//   }

//   render() {
//     return (
//       <>
//         <Button variant="primary" onClick={this.handleShow}>
//          Login
//         </Button>

//         <Modal show={this.state.show} onHide={this.handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>Modal heading</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//           <Form>
//          <FormGroup>
//            <Label for="exampleEmail">Email</Label>
//            <Input type="email" name="email" id="exampleEmail" placeholder="email@gmail.com" />
//          </FormGroup>
//          <FormGroup>
//            <Label for="examplePassword">Password</Label>
//            <Input type="password" name="password" id="examplePassword" placeholder="password" />
//          </FormGroup>
//          <Button>Login</Button>
//      </Form>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={this.handleClose}>
//               Close
//             </Button>
//             <Button variant="primary" onClick={this.handleClose}>
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//     );
//   }
// }

// export default Example;
export {default} from "./Login";