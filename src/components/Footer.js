import React from "react";
import "./Footer.css";
import Nav from "react-bootstrap/Nav";
import Octocat from "./Octocat.png";

export default function Footer() {
    return (
    <div className="footer-container">
        <h3>Made with ❤️ by Benjamin Pollock</h3>
        <div className="github-img">
        <img className="github-img" src={Octocat} alt='github' href='https://github.com/bennyp11'/>
        </div>
        <div className="github-text"><h5><a href="https://github.com/bennyp11">github.com/bennyp11</a></h5></div>
    </div>
    );
}