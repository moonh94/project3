
import React from "react";
import { Link, NavLink } from "react-router-dom";
import Modal from "../Modal/index";
import "../../Styles/NavBar.css";
import source from "../../images/LogoMakr_2TZqvR.png"


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
            <img src={source} alt="RunningMan" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-link">
                        <NavLink 
                            className="nav-link" 
                            activeClassName ="active"
                            isActive={() => window.location.pathname === "/" || window.location.pathname === "/home"}
                            to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink 
                            className="nav-link" 
                            activeClassName ="active"
                            isActive={() => window.location.pathname === "/search"}
                            to="/search">
                            Search
                        </NavLink>
                    </li>
                    <li className="nav-link">
                          <Modal />
                    </li>
                    <li className="nav-link" >
                        <NavLink 
                            className="nav-link" 
                            activeClassName ="active"
                            isActive={() => window.location.pathname === "/register"}
                            to="/register">
                            Register
                        </NavLink>
                    </li>
                    <li className="nav-link" >
                        <NavLink 
                            className="nav-link" 
                            activeClassName ="active"
                            isActive={() => window.location.pathname === "/userprofile/:id"}
                            to="/register">
                            Profile
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;