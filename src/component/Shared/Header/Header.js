import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo (2).png'
import { FaArrowRight } from 'react-icons/fa';


const Header = () => {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt="" srcset="" /></Navbar.Brand>
                    <Nav className="ms-auto fw-bold">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Services</Nav.Link>
                        <Nav.Link href="#pricing">Doctor</Nav.Link>
                        <Nav.Link href="#pricing">News</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Button variant="primary">Appoinment <FaArrowRight /></Button>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;