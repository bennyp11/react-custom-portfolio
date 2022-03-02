import Tilt from "react-parallax-tilt";
import NavbarLogo from "./navbar-logo.svg";
import "./Navbar.css";
import React from "react";

export default function Logo() {
    return (
    <Tilt>
        <div className="logo-container">
        <img src={NavbarLogo} alt="logo"/>
        </div>
    </Tilt>
    );
}