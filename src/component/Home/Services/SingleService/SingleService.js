
import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
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
            <h2>{singleData?.name}</h2>
            <Row className="justify-content-center alig">
                {/* <Card.Title>Special title treatment</Card.Title> */}
                <div className="col-md-6">
                    <img className="img-fluid" src={singleData?.image} alt="" srcset="" />
                </div>
                <div className="col-md-6">
                    <p className="description-text">{singleData?.description}</p>
                    <Button variant="primary">Go somewhere</Button>
                </div>

            </Row >
        </Container>
    );
};

export default SingleService;