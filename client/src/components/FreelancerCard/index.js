import React from "react";
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';
import RequestWorkForm from "../RequestWorkForm";


function FreelancerCard(props) {
  return (
    <>
      <Card>
        <CardHeader tag="h3"></CardHeader>
        <CardBody className="card-body">
          <CardTitle className="card-title">{props.position}</CardTitle>
          <CardText> 
        <div className="card" >
            <img className="card-img-top" alt={props.name} src={props.image}/>
    
                <div className="content">
                    <ul>
                        <li>
                            <strong>Name:</strong> {props.name}
                        </li>
                        <li>
                            <strong>Bio:</strong> {props.bio}
                        </li>
                        <li>
                            <strong>Position:</strong> {props.position}
                        </li>
                        <li>
                            <strong>Location:</strong> {props.location}
                        </li>
                
                        <li>
                            <strong>Rate:</strong> {props.rate}
                        </li>
                    </ul>
                </div>
        </div>
                    </CardText>
          <Button>Request Service</Button>
          <Button>Go Back</Button>
          <RequestWorkForm />
        </CardBody>
        <CardFooter style={{height: 50}}>Footer</CardFooter>
      </Card>
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