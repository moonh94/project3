import React from "react";
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';
import "./style.css";


const FreelancerCard = (props) => {
  return (
    <div>
      <Card>
        <CardHeader tag="h3"></CardHeader>
        <CardBody className="card-body">
          <CardTitle className="card-title">{props.position}</CardTitle>
          <CardText> <ul>
                            <li>
                                <strong>Name:</strong> {props.name}
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
                        </ul></CardText>
          <Button>Request Service</Button>
          <Button>Go Back</Button>
        </CardBody>
        <CardFooter style={{height: 50}}>Footer</CardFooter>
      </Card>

      
    </div>
  );
};
<a href="#" className="btn btn-primary">Request Service</a>
                    <a href="#" className="btn btn-primary">Go Back</a>



// function FreelancerCard(props) {
//     return (
//         <div className="card" style="width: 50rem;">
//             <img className="card-img-top" alt={props.name} src={props.image}/>
//                 <div className="card-body">
//                     <h5 className="card-title">Card title</h5>
//                     <div className="content">
//                         <ul>
//                             <li>
//                                 <strong>Name:</strong> {props.name}
//                             </li>
//                             <li>
//                                 <strong>Position:</strong> {props.position}
//                             </li>
//                             <li>
//                                 <strong>Bio:</strong> {props.bio}
//                             </li>
//                             <li>
//                                 <strong>Location:</strong> {props.location}
//                             </li>
//                             <li>
//                                 <strong>Rate:</strong> {props.rate}
//                             </li>
//                         </ul>
//                     </div>
//                     <a href="#" className="btn btn-primary">Request Service</a>
//                     <a href="#" className="btn btn-primary">Go Back</a>
//                 </div>
//             </div>
        
//             );
//             }
              

export default FreelancerCard;