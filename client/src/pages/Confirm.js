import React from "react";
import {Link} from "react-router-dom";
const Confirm = () => {
    return (
        <>
       <p>Congratulations! You are now a registered Freelancer!</p>

       <li className="nav-link">
                <Link to={"/"}>Return Home</Link>
            </li>
     </>

       
    )
}

export default Confirm;