import React from 'react';
import github from "../assets/github.png"
import "./Footer.css"

const Footer = () => {
    return (
        <div className={"footer-container"}>
            <p>© 2024 Lios. All rights reserved</p>
            <a href="https://github.com/universyu/ArtIntelligent"><img src={github} alt=""/></a>
        </div>
    );
};

export default Footer;