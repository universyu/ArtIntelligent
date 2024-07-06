import React from 'react';
import "./Home.css"
import {Link} from "react-router-dom";
import elsa from "../assets/elsa.jpg"
import mi from "../assets/mi.png"
import xing from "../assets/xing.png"
import furina from "../assets/furina.jpg"

const Hero = () => {
    return (
        <div className='hero'>
            <div className={"hero-container"}>
                <div className={"hero-text"}>
                    <h1>Welcome to Lios' website</h1>
                    <p>Let's enjoy beautiful pictures together!</p>
                </div>
            </div>

            <div className={"grid-container"}>
                <Link to={"/images/xing"}><img src={xing} alt=""/></Link>
                <Link to={"/images/elsa"}><img src={elsa} alt=""/></Link>
                <Link to={"/images/furina"}><img src={furina} alt=""/></Link>
                <Link to={"/images/mi"}><img src={mi} alt=""/></Link>
            </div>
        
        </div>
        


    );
};

export default Hero;