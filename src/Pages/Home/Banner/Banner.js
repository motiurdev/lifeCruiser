import React from 'react';
import { Carousel } from 'react-bootstrap';
import Banner1 from '../../../images/banner1.jpg'
import Banner2 from '../../../images/banner2.jpg'
import Banner3 from '../../../images/banner3.jpg'

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Travel In London</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Travel In USA</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Travel In Norway</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;