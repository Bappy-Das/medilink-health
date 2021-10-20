import React from 'react';
import { Row } from 'react-bootstrap';
import useService from '../../../hooks/useService';
import './Services.css'
import AllService from '../AllService/AllService';


const Services = () => {
    const { services } = useService();
    // console.log(services)
    return (
        <div id="allservices" className="my-5">
            <div className="p-5 mt-5">
                <h1 className="text-center">Our Services</h1>
                <hr className="w-25 mx-auto" />
            </div>
            <Row xs={1} md={4} className="g-4 m-3">
                {
                    services.map(dept => <AllService service={dept}></AllService>)
                }
            </Row>
        </div>
    );
};

export default Services;