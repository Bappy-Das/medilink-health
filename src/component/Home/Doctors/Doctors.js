import React from 'react';
import { Row } from 'react-bootstrap';
import useDoctor from '../../../hooks/useDoctor';
import Specialist from '../Specialist/Specialist';


const Doctors = () => {
    const { doctor } = useDoctor();
    return (
        <div className="my-4 p-5">
            <div className="my-5 text-center">
                <h2>Specialist Doctors</h2>
                <p>Experienced Doctor</p>
                <hr className="w-25 mx-auto" />
            </div>
            <Row xs={1} md={4} className="g-4 my-4">
                {
                    doctor.map(dr => <Specialist data={dr}></Specialist>)
                }
            </Row>
        </div>
    );
};

export default Doctors;