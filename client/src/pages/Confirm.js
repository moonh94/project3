import React from "react";
import {Link, NavLink} from "react-router-dom";
const Confirm = () => {
    return (
        <>
       <p>Congratulations! You are now a registered Freelancer!</p>

       <li className="nav-link">
                <NavLink 
                className="nav-link" 
                activeClassName="active"
                isActive={ () => window.location.pathname === "/" || window.location.pathname ==="/Home"} 
                to="/"
                >
                About  
                </NavLink>
            </li>
     </>

       
    )
}

export default Confirm;