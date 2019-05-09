import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';
import { Container, Row, Col } from "reactstrap";
// import RequestWorkForm from "../RequestWorkForm";


function FreelancerCard(props) {
    return (
        <>
            <Container style ={{paddingTop: 20, marginTop: 20}}>
                <Row>
                    <Col sm="3" style={{paddingLeft: 0, paddingRight: 0, marginLeft:0, marginRight: 0}}>
                    </Col>
                    <Col sm="6" style={{paddingLeft: 0, paddingRight: 0, width: 800}}>
                        <Card>
                            <CardHeader tag="h3">{props.position}</CardHeader>
                            <CardBody className="card-body justify-content-center" >
                                {/* <CardTitle className="card-title">{props.position}</CardTitle> */}
                                <CardText>
                                    <div className="card" >
                                        <img className="card-img-top" alt={props.name} src={props.image} />

                                        <div className="content">

                                            <strong>Name:</strong> {props.name}
                                            <br></br>

                                            <strong>Bio:</strong> {props.bio}
                                            <br></br>
                                            <strong>Position:</strong> {props.position}
                                            <br></br>
                                            <strong>Location:</strong> {props.location}
                                            <br></br>
                                            <strong>Rate:</strong> {props.rate}

                                        </div>
                                    </div>
                                </CardText>
                                <div className="cardButton" style={{ float: "right" }}>
                                
                                    <span className="input-group-btn">
                                    <Link to="/request">Request Service </Link></span>
                               
                                    <span className="input-group-btn">
                                    <Link to="/search">Go Back</Link></span>
                                    
                                    {/* <Button onClick=>
                                        <Link to="/request"/> Request Service
                                        </Button> */}
                                        
                                    {/* <Button>Go Back</Button> */}
                                  
                                </div>
                            </CardBody>
                            <CardFooter style={{ height: 50 }}></CardFooter>
                        </Card>
                    </Col>
                    <Col sm="3" style={{paddingLeft: 0, paddingRight: 0, marginLeft:0, marginRight: 0}}>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
{/* <a href="#" className="btn btn-primary">Request Service</a>
                    <a href="#" className="btn btn-primary">Go Back</a> */}




{/* return (
         <div className="card" style="width: 50rem;">
             <img className="card-img-top" alt={props.name} src={props.image}/>
                 <div className="card-body">
                     <h5 className="card-title">Card title</h5>
                     <div className="content">
                         <ul>
                             <li>
                                 <strong>Name:</strong> {props.name}
                             </li>
                             <li>
                                 <strong>Position:</strong> {props.position}
                             </li>
                             <li>
                                 <strong>Bio:</strong> {props.bio}
                             </li>
                             <li>
                                 <strong>Location:</strong> {props.location}
                             </li>
                             <li>
                                 <strong>Rate:</strong> {props.rate}
                             </li>
                         </ul>
                     </div>
                     <a href="#" className="btn btn-primary">Request Service</a>
                     <a href="#" className="btn btn-primary">Go Back</a>
                 </div>
             </div>
                         </ul>
                     </div>
                     <a href="#" className="btn btn-primary">Request Service</a>
                     {"   "}
                     <a href="#" className="btn btn-primary">Go Back</a>
                     <RequestWorkForm />
                 </div>
             </div>
          */}

export default FreelancerCard;