import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import useDoctor from '../../../hooks/useDoctor';


const ConfirmAppoinment = () => {
    const { user } = useAuth();
    // const { doctor } = useDoctor();
    return (
        <Container>
            <Card className="text-center mt-5 w-50 mx-auto">
                <Card.Header>Appoinment is Book By</Card.Header>
                <Card.Body>
                    <Card.Title className="mt-2 mb-3">{user?.displayName}</Card.Title>
                    <Card.Text>
                        <p>Available Slot</p>
                        <hr />
                        <tr
                            className="d-flex align-items-center justify-content-evenly">
                            <td>Mon-Tues</td>

                            <td>08.00-17.00</td>
                        </tr>

                        <tr
                            className="d-flex align-items-center justify-content-evenly">
                            <td>Mon-Tues</td>

                            <td>09.00-12.00</td>
                        </tr>
                        <tr
                            className="d-flex align-items-center justify-content-evenly">
                            <td>Sun-Mon</td>

                            <td>08.00-17.00</td>
                        </tr>
                    </Card.Text>
                    <Link to="/"><Button variant="primary">Back Home</Button></Link>
                </Card.Body>

            </Card>
        </Container>
    );
};

export default ConfirmAppoinment;