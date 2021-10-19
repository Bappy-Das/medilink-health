import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './AllService.css'
import { FaUserMd } from 'react-icons/fa';

const AllService = (props) => {
    const { name, id, doctor, cardImage } = props.service
    return (
        <div>
            <Col className="">
                <Card className=" rounded-3 text-center">
                    <Card.Img variant="top" className="img-fluid mx-auto p-1" src={cardImage} />
                    <Card.Body className="mt-4">
                        <h3>{name}</h3>
                        <div className="d-flex align-items-center justify-content-center mt-4">
                            <p><FaUserMd size={35} /></p>
                            <h5 className="mx-2">{doctor}</h5>
                            <h5>Specialist Doctors</h5>
                        </div>
                    </Card.Body>
                    <hr />
                    <div className="card-foot">
                        <Link to={`./service/${id}`}><p className="text-center">Read More <FaArrowRight /></p></Link>
                    </div>
                </Card>
            </Col>

        </div >
    );
};

export default AllService;