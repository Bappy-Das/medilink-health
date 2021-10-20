import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useDoctor from '../../../../hooks/useDoctor';
import { FaCalendarAlt } from 'react-icons/fa';


const SingleDoctor = () => {

    const { doctorID } = useParams();
    const { doctor } = useDoctor();
    const singleData = doctor.find(data => data.drid == doctorID);

    // console.log(singleData);
    return (
        <Container className=" p-5">

            <Row className="justify-content-center align-items-center p-3">


                <div className="col-md-6">
                    <h2 className="">{singleData?.name}</h2>
                    {/* <p className="mb-5">{singleData?.expart}</p> */}
                    <h3 className="mb-5"><strong>Expert In : </strong>{singleData?.expart}</h3>
                    <p>Available at :</p>
                    <hr />

                    {
                        singleData?.schedule?.map(data => <tr
                            className="d-flex align-items-center justify-content-between">
                            <td><FaCalendarAlt /> {data.day}</td>
                            <td>{data.time}</td>
                        </tr>)
                    }
                    <div className="text-center mt-5">
                        <Link to="/book"><Button className="mt-4 text-center" variant="primary">Book Appoinment</Button></Link>
                    </div>
                </div>
                <div className="col-md-6 text-center">
                    <img className="img-fluid" src={singleData?.drImage} alt="" srcSet="" />
                    <h4 className="mt-5">{singleData?.name}</h4>
                </div>

            </Row >
        </Container>
    );
};

export default SingleDoctor;