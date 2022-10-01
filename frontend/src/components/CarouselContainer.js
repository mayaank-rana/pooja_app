import React from 'react';
import { Carousel } from 'react-bootstrap';



const CarouselContainer = () => {
    return (
        <Carousel fade={true} pause={false}>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={"https://i.postimg.cc/25qhJTYv/Whats-App-Image-2022-05-09-at-7-34-35-PM.jpg"}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={"https://i.postimg.cc/25qhJTYv/Whats-App-Image-2022-05-09-at-7-34-35-PM.jpg"}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={"https://i.postimg.cc/25qhJTYv/Whats-App-Image-2022-05-09-at-7-34-35-PM.jpg"}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselContainer;