import React from 'react';
import "./Navbar.css"
import {Link} from "react-router-dom";
import Button from "./Button";

const Navbar = () => {

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    
    return (
        <div className={"nav-container"}>
            <div className={"top"} onClick={handleScrollToTop}>Top</div>
            <ul>
                <li><Link to={"/"}><Button text="Home"></Button></Link></li>
                <li><Link to={"/create"}><Button text="Create"></Button></Link></li>
                <li><Link to={"/about"}><Button text="About"></Button></Link></li>
                <li><Link to={"/login"}><Button text="Login"></Button></Link></li>
            </ul>
        </div>
    );
};

export default Navbar;