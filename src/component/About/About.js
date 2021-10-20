import React from 'react';
import { Container, Row } from 'react-bootstrap';
import aboutImage from '../../images/about.png'

const About = () => {
    return (
        <Container>
            <h1 className="text-center mt-5">About Medilink</h1>
            <hr className="w-25 mx-auto" />
            <Row className="d-flex align-items-center justify-content-center my-5">

                <div className="col-md-6 p-4">
                    <h1 className="my-3">We Here To Care About Health</h1>
                    <h3 className="mb-4">Our Best Laboratory Medical Center</h3>
                    <p>
                        We are a group of people who believe we can make a difference in the world. We believe that creating health is more than preventing or treating disease. We are here to work in partnership with others to generate solutions that centre on living well, creating possibilities for genuine care, driven by knowing what matters most to you, so that we can tailor treatment to fit for you, your life and your community.
                    </p>
                    <h6> &#10140; Qualified Staff of Doctors</h6>
                    <h6> &#10140; Feel like you are at Home Services</h6>
                    <h6> &#10140; 24x7 Emergency Services </h6>
                    <h6> &#10140; Easy and Affordable Billing</h6>
                    <img className="img-fluid mt-2" src="https://www.radiustheme.com/demo/html/medilink/medilink/img/about/sign1.png" alt="" srcSet="" />
                </div>

                <div className="col-md-6 p-3">
                    <img className="img-fluid" src={aboutImage} alt="" />
                </div>
            </Row>
        </Container>
    );
};

export default About;