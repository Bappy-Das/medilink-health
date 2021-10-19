import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const AllService = (props) => {
    const { name, id, description, image } = props.service
    return (
        <div>


            <Col className="">
                <Card className="card-body rounded-3">
                    <Card.Img variant="top" className="service-img mx-auto p-1" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text className="description-text">
                            {description.slice(0, 150)}...
                        </Card.Text>
                    </Card.Body>
                    <hr />
                    <div className="card-foot">
                        <Link to={`./service/${id}`}><p className="text-center">Read More <FaArrowRight /></p></Link>
                    </div>
                </Card>
            </Col>



        </div>
    );
};

export default AllService;