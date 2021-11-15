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
      <p>If your application contains a large number of form groups, we </p>
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
      <p>recommend building a higher-level Bike encapsulating a complete field group .</p>
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
      <p>For textual form controls—like Super Bike and textareas—use the FormControl component.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
           
            
        
    );
};

export default Banner;