import React from "react";
import RequestWorkForm from "../RequestWorkForm";
// import "./style.css";




function FreelancerCard(props) {
    return (
        // didn't like what was in the div below before: "style="width: 50rem;""
        <div className="card" >
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
                                <strong>Location:</strong> {props.location}
                            </li>
                            <li>
                                <strong>Bio:</strong> {props.bio}
                            </li>
                            <li>
                                <strong>Rate:</strong> {props.rate}
                            </li>
                        </ul>
                    </div>
                    <a href="#" className="btn btn-primary">Request Service</a>
                    {"   "}
                    <a href="#" className="btn btn-primary">Go Back</a>
                    <RequestWorkForm />
                </div>
            </div>
        
            );
            }
              

export default FreelancerCard;