import React from 'react';
import "./Navbar.css"
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={"nav-container"}>
            <div className={"top"}>Top</div>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/create"}>Create</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/login"}>Login</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;