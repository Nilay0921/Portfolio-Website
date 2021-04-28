import React from 'react';
import { FaGithub } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import "../App.css";

function contact() {
    return(
        <div className="contact">
            <div className="contact-title">
                <h1>Contact</h1>
            </div>
            <div className="contact-icons">
                <a href="https://github.com/Nilay0921"><FaGithub size="70px" className="github"/></a>
                <a href="https://www.linkedin.com/in/nilay-kapadia-a754631a4/"><ImLinkedin2 size="70px" className="linkedin"/></a>
                <a href="mailto:nilay.kapadia@mail.utoronto.ca"><AiOutlineMail size="70px" className="mail"/></a>
            </div>
        </div>
    );
}

export default contact