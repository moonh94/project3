import React from "react";
import {Animated} from "react-animated-css";


function Jumbotron() {
    return (
        
        <div
            style={{ height: 300, clear: "both", paddingTop: 120, opacity: .8}}
            className="jumbotron "
        >
        <Animated animationIn="zoomInLeft" animationOut="fadeOut" isVisible={true}>
        <h2 style={{textAlign: "center", fontSize: "70px"}}>Where Freelancers Network </h2>
        </Animated>
        </div>
        
    );
}

export default Jumbotron;