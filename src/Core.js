import React, { useState } from "react";
import logo from "./logo.svg";
import { Outlet, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import NavBar from "./components/Navbar.js";
import LandingPage from "./components/LandingPage.js";
import Footer from "./components/Footer.js";
import Particle from "./components/Particle.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Core.css";

export default function Core() {
  const initialState = () => 'home';
  const [route, setRoute] = useState(initialState);

  function handleRouteChange(newRoute) {
    setRoute(newRoute);
    console.log('route: ', route);
  }

  return (
    <div className="core-container">
    <div className="rainbow-bar"></div>
    <div className="nav-container">
    <NavBar>
        <Link className="nav-1" to="/aboutme" route={route} onClick={handleRouteChange}>About Me</Link> | {" "}
        <Link className="nav-2" to="/projects" onClick={handleRouteChange}>Projects</Link> | {" "}
        <Link className="nav-3" to="/skills" onClick={() => setRoute('skills')}>Skills</Link>
    </NavBar>
    </div>
    <div className="landing-page-container">
    {
      route ==! 'home' 
      ? <div></div>
      : <div className="landing-page"><LandingPage /></div>
    }
    <Particle />
    </div>
    <Outlet />
    <div className="footer-container">
      <Footer />
    </div>
    </div>
  );
}

//might be best to use index.js as the ultimate parent in my routing logic
//child components in Core.js can change the routing state held in index.js
//https://webomnizz.com/change-parent-component-state-from-child-using-hooks-in-react/
//move routing logic from Core.js to index.js
//useState & props to edit the routing state in index.js's child components
//try to use Vitali Andrusishyn's conventions from stack overflow
//https://stackoverflow.com/questions/42800815/how-to-use-onclick-event-on-react-link-component

