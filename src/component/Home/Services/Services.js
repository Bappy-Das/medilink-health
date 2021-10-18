import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import useService from '../../../hooks/useService';
import './Services.css'
import { FaArrowRight } from 'react-icons/fa';


const Services = () => {
    const { service } = useService();
    return (
        <div>
            <div className="p-5 mt-3">
                <h1 className="text-center">Our Services</h1>
                <hr className="w-25 mx-auto" />
            </div>
            <Row xs={1} md={4} className="g-4 m-3">
                {
                    service.map(dept => <div>

                        <Col className="">
                            <Card className="card-body rounded-3">
                                <Card.Img variant="top" className="service-img mx-auto p-1" src={dept.image} />
                                <Card.Body>
                                    <Card.Title>{dept.name}</Card.Title>
                                    <Card.Text >
                                        {dept.description.slice(0, 150)}...
                                    </Card.Text>
                                </Card.Body>
                                <hr />
                                <div className="card-foot">
                                    <p className="text-center">Book Now <FaArrowRight /></p>
                                </div>
                            </Card>
                        </Col>


                    </div>)
                }
            </Row>
        </div>
    );
};

export default Services;