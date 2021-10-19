import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../../images/logo (2).png'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


// const Header = () => {
//     return (
//         <>
//             <Navbar collapseOnSelect expand="lg" sticky="top" bg="light" variant="light">
//                 <Container>
//                     <Link to="/home"><Navbar.Brand><img className="img-fluid" src={logo} alt="" srcset="" /></Navbar.Brand></Link>
//                     <Nav className="ms-auto fw-bold">
//                         <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
//                         <Nav.Link as={Link} to="/allservices#allservices">Services</Nav.Link>
//                         <Nav.Link as={Link} to="/doctor#doctor">Doctor</Nav.Link>
//                         <Nav.Link as={Link} to="/news">News</Nav.Link>
//                         <Nav.Link as={Link} to="/about">About</Nav.Link>
//                         <Button variant="primary">Log In <FaArrowRight /></Button>
//                     </Nav>
//                 </Container>
//             </Navbar>
//         </>
//     );
// };

// export default Header;


// import React from 'react';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/home#home">Home</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
