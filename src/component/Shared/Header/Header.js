import React, { useRef, useState } from 'react';
import { Button, Container, Nav, Navbar, Overlay, Popover } from 'react-bootstrap';
import logo from '../../../images/logo (2).png'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Header.css'
import useAuth from '../../../hooks/useAuth';





const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user)
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
                <Container className="text-dark">
                    <Link to="/home"><Navbar.Brand><img className="img-fluid" src={logo} alt="" srcSet="" /></Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto fw-bold">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/allservices">Services</Nav.Link>
                            <Nav.Link as={Link} to="/doctor">Doctor</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                            {user?.email ?
                                <div>
                                    {user.displayName ?
                                        <p className="font-weight-bold pointer ms-2 mt-2 text-light text-center">{user.displayName}</p>
                                        :
                                        <p className="font-weight-bold pointer ms-2 mt-2 text-light text-center">{user.email}</p>}
                                    <p className="font-weight-bold pointer ms-2 mt-2 text-light text-center" onClick={logOut}>Log Out <FaArrowRight /></p>
                                </div>
                                // <div className="pointer ms-2" ref={ref}>
                                //     <span onClick={handleClick}>
                                //         {/* <img
                                //         className="photo-img rounded-circle"
                                //         src={user.displayName}
                                //         alt="" srcSet="" /> */}
                                //         <p className="text-light mt-2">{user.displayName}</p>
                                //     </span>
                                //     <Overlay
                                //         show={show}
                                //         target={target}
                                //         placement="bottom"
                                //         container={ref}
                                //         containerPadding={20}
                                //     >
                                //         <Popover id="popover-contained">
                                //             {/* <Popover.Header as="h3">{user?.displayName}</Popover.Header> */}
                                //             <p className="font-weight-bold text-center p-2 mt-2" onClick={logOut}>Log Out <FaArrowRight /></p>
                                //         </Popover>
                                //     </Overlay>
                                // </div>
                                :
                                <Link to="/login"><Button variant="primary">Log In <FaArrowRight /></Button></Link>}


                        </Nav>

                    </Navbar.Collapse>

                </Container>

            </Navbar>
            {/* <Collapse in={open}>
                <div id="collapse" className="position-relative">
                    <p className="position-absolute top-0 start-100">Log Out</p>

                </div>
            </Collapse> */}
        </div>
    );
};

export default Header;
