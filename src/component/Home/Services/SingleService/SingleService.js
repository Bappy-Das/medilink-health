
import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useService from '../../../../hooks/useService';
const SingleService = () => {

    const { serviceID } = useParams();
    const { services } = useService();

    console.log(services)
    const singleData = services.find(data => data.id == serviceID);
    // const singleData = services.filter(i => serviceID.includes(i.id));
    console.log(singleData);
    return (
        <Container className=" p-5">

            <Row className="justify-content-center align-items-center p-2">

                <div className="col-md-6">
                    <img className="img-fluid" src={singleData?.imageFull} alt="" srcSet="" />
                </div>
                <div className="col-md-6">
                    <h2 className="mb-5">{singleData?.name}</h2>
                    <p className="description-text">{singleData?.description}</p>
                    <Link to="/book"><Button variant="primary">Book Appoinment</Button></Link>
                </div>

            </Row >
        </Container>
    );
};

export default SingleService;