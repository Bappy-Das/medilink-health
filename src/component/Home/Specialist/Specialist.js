import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Specialist.css'
import { FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import useDoctor from '../../../hooks/useDoctor';


const Specialist = (props) => {
    const { drid, name, schedule, expart, drImage } = props.data;
    console.log(props.data)
    return (
        <div>
            <Col className="my-5">
                <Card className="m-1">
                    <div className="p-4">
                        <Card.Img className="rounded-circle dr-img img-fluid" variant="top" src={drImage} />
                    </div>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <p>{expart}</p>
                        <hr />
                        {
                            schedule.map(data => <tr
                                className="d-flex align-items-center justify-content-between">
                                <td><FaCalendarAlt /> {data.day}</td>
                                <td>{data.time}</td>
                            </tr>)
                        }


                    </Card.Body>
                    <div className="text-center my-3">
                        <Link to={`./doctorinfo/${drid}`}><Button variant="primary">More Details About Doctor</Button></Link>
                    </div>
                </Card>
            </Col>
        </div>
    );
};

export default Specialist;


