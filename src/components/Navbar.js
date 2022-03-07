import Nav from "react-bootstrap/Nav";
import Stack from "react-bootstrap/Stack";
import Logo from "./Logo.js";
import { Link } from "react-router-dom";
//import NavDropdown from "react-bootstrap/NavDropdown";
//import Form from "react-bootstrap/Form";
//import FormControl from "react-bootstrap/FormControl";
//import Button from "react-bootstrap/Button";
import "./Navbar.css";

export default function NavBar(props) {
    function handleRouteChange(e) {
        props.onChange(e.target.value);
    }

    return (
    <Stack bsPrefix='hstack' className="stack-container" direction="horizontal" gap={5}>
    <Logo />
    <div className='gap'></div>
    <Nav bsPrefix='nav-container' activeKey="/home">
        <Nav.Item>
        <div className='link-gap'>
        <Nav.Link value={'aboutme'} as={Link} bsPrefix='link' to="/aboutme">ABOUT ME </Nav.Link>
        </div>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link value={'projects'} as={Link} bsPrefix='link' to="/projects">PROJECTS </Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link value={'skills'} as={Link} bsPrefix='link' to="/skills">SKILLS </Nav.Link>
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