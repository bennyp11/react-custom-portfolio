import logo from "./logo.svg";
import { Outlet, Link } from "react-router-dom";
import NavBar from "./components/Navbar.js";
import LandingPage from "./components/LandingPage.js";
import Footer from "./components/Footer.js";
import Particle from "./components/Particle.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Core.css";

export default function Core() {
  return (
    <div className="core-container">
    <div className="nav-container">
    <NavBar>
        <Link className="nav-1" to="/aboutme">About Me</Link> | {" "}
        <Link className="nav-2" to="/projects">Projects</Link> | {" "}
        <Link className="nav-3" to="/skills">Skills</Link>
    </NavBar>
    </div>
    <div className="landing-page-container">
    <h1>Lets do something cool here</h1>
    <Particle />
    </div>
    <Outlet />
    <div className="footer-container">
      <Footer />
    </div>
    </div>
  );
}

