import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import './Specialist.css'
import { FaCalendarAlt } from 'react-icons/fa';


const Specialist = () => {
    const [doctor, setDoctor] = useState([]);
    useEffect(() => {
        fetch('/doctorData.json')
            .then(res => res.json())
            .then(data => setDoctor(data))
    }, [])
    return (
        <div className="m-4 p-3">
            <div className="text-center">
                <h2>Specialist Doctors</h2>
                <p>Experienced Doctor</p>
                <hr className="w-25 mx-auto" />
            </div>
            <Row xs={1} md={4} className="g-4">
                {
                    doctor.map(dr => <div>
                        <Col>
                            <Card className="my-5">
                                <Card.Img className="rounded-circle dr-img img-fluid" variant="top" src={dr.drImage} />
                                <Card.Body>
                                    <Card.Title>{dr.name}</Card.Title>
                                    <p>{dr.expart}</p>
                                    <hr />
                                    {
                                        dr.schedule.map(data => <tr
                                            className="d-flex align-items-center justify-content-between">
                                            <td><FaCalendarAlt /> {data.day}</td>
                                            <td>{data.time}</td>
                                        </tr>)
                                    }


                                </Card.Body>
                                <Button variant="primary">Make An Appoinment</Button>
                            </Card>
                        </Col>
                    </div>)
                }


            </Row>
        </div>
    );
};

export default Specialist;