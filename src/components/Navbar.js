import Nav from "react-bootstrap/Nav";
import Stack from "react-bootstrap/Stack";
import Logo from "./Logo.js";
//import NavDropdown from "react-bootstrap/NavDropdown";
//import Form from "react-bootstrap/Form";
//import FormControl from "react-bootstrap/FormControl";
//import Button from "react-bootstrap/Button";
import "./Navbar.css";

export default function NavBar() {
    return (
    <Stack bsPrefix='hstack' className="stack-container" direction="horizontal" gap={5}>
    <Logo />
    <div bsPrefix='gap-5'></div>
    <Nav activeKey="/home">
        <Nav.Item>
        <Nav.Link bsPrefix='link' href="/aboutme">ABOUT ME </Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link bsPrefix='link' href="/projects">PROJECTS </Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link bsPrefix='link' href="/skills">SKILLS </Nav.Link>
        </Nav.Item>
    </Nav>
    </Stack>
    );
}

/*
<Container className="link-container" fluid>
        <div className="nav-links">
        <Nav activeKey="/home">
        <Nav.Item className="justify-content-end">
                <Nav.Link className="link-1" href="/aboutme">About Me</Nav.Link>
                <Nav.Link className="link-2" href="/projects">Projects</Nav.Link>   
                <Nav.Link className="link-3" href="/skills">Skills</Nav.Link>        
        </Nav.Item>
        </Nav>
        </div>
</Container> 
*/