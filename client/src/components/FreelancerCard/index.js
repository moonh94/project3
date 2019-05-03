import React from "react";
import "./style.css";


x
function FreelancerCard(props) {
    return (
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
                                <strong>Website:</strong> {props.location}
                            </li>
                        </ul>
                    </div>
                    <a href="#" className="btn btn-primary">Request Service</a>
                    <a href="#" className="btn btn-primary">Go Back</a>
                </div>
            </div>
        
            );
            }
              

export default FreelancerCard;