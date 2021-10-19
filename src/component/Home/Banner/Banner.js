import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Button, Carousel } from 'react-bootstrap';
import slider1 from '../../../images/slide1-4.jpg'
import slider2 from '../../../images/slide1-5.jpg'
import slider3 from '../../../images/slide1-6.jpg'
import './Banner.css'

const Banner = () => {
    return (

        <>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                    />

                    <Carousel.Caption className="caption">
                        <h3>We Take Care Of Your Healthy Health</h3>
                        <p>Stay aware of your emotions and moodsEat a healthy, balanced diet with lots of vegetables and fruit.</p>
                        <Button variant="primary">Read More <FaArrowRight /></Button>
                    </Carousel.Caption>


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="caption">
                        <h3>We Take Care Of Your Healthy Health</h3>
                        <p>Stay aware of your emotions and moodsEat a healthy, balanced diet with lots of vegetables and fruit.</p>
                        <Button variant="primary">Read More <FaArrowRight /></Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="caption">
                        <h3>We Take Care Of Your Healthy Health</h3>
                        <p>Stay aware of your emotions and moodsEat a healthy, balanced diet with lots of vegetables and fruit.</p>
                        <Button variant="primary">Read More <FaArrowRight /></Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>

    );
};

export default Banner;