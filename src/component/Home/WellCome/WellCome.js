import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { FaCalendarAlt, FaUserCircle, FaPhoneAlt } from 'react-icons/fa';
import { BsArrowRightCircle } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";


const WellCome = () => {
    return (
        <Container>
            <Row className="d-flex align-items-center justify-content-center mt-5">
                <div className="col-md-3">
                    <img className="img-fluid" src="https://www.radiustheme.com/demo/html/medilink/medilink/img/about/about1.png" alt="" />
                </div>
                <div className="col-md-5 p-3">
                    <h2 className="my-3">Welcome To MediLink. Central Hospital</h2>
                    <h4>"To be a renowned organization at the leading edge of Medicine, providing quality healthcare to meet our nation's aspirations.</h4>
                    <p className="mt-3">The hospital is a showcase of synergy of medical technology and advances in ICT through paperless medical records.</p>
                    <img className="img-fluid mt-2" src="https://www.radiustheme.com/demo/html/medilink/medilink/img/about/sign1.png" alt="" srcSet="" />
                </div>
                <div className="col-md-4 text-white">

                    <div className="d-flex align-items-center justify-content-center my-2 p-3 rounded-3 bg-primary">
                        <h5><FaCalendarAlt size={25} /></h5>
                        <h5 className="mx-2">Request Appoinment</h5>
                        <h5><BsArrowRightCircle size={25} /></h5>
                    </div>

                    <div className="d-flex align-items-center justify-content-center my-2 p-3 rounded-3 bg-primary">
                        <h5><FaUserCircle size={25} /></h5>
                        <h5 className="mx-2">Find Doctor</h5>
                        <h5><BsArrowRightCircle size={25} /></h5>
                    </div>
                    <div className="d-flex align-items-center justify-content-center my-2 p-3 rounded-3 bg-primary">
                        <h5><FaPhoneAlt size={25} /></h5>
                        <h5 className="mx-2">Emagency Contact</h5>
                        <h5><BsArrowRightCircle size={25} /></h5>
                    </div>
                    <div className="d-flex align-items-center justify-content-center my-2 p-3 rounded-3 bg-primary">
                        <h5><MdLocationOn size={25} /></h5>
                        <h5 className="mx-2">Find Location</h5>
                        <h5><BsArrowRightCircle size={25} /></h5>
                    </div>


                </div>
            </Row>
        </Container>
    );
};

export default WellCome;