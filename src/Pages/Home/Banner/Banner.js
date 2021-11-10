import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
       
           
                <Carousel>
  <Carousel.Item>
    <img
      className=" w-100"
      src="https://i.ibb.co/hVynX0x/banner-1.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Affordable Super Bike</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=" w-100"
      src="https://i.ibb.co/9w0WnHk/banner-2.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Long Lasting</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=" w-100"
      src="https://i.ibb.co/nw2SrhV/banner-3.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Best Performance</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
           
            
        
    );
};

export default Banner;