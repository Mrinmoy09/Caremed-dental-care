import React from 'react';
import './Banner.css'
import { Carousel, Container } from 'react-bootstrap';
import b1 from '../../../images/Banner/banner_1.png'
import b2 from '../../../images/Banner/banner_2.png'
import b3 from '../../../images/Banner/banner_3.png'

const Banner = () => {
    return (
        <Container className="mt-3">
         <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 img-fluid banner"
      src={b1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>We will take care of your precious teeth</h3>
      <p >Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-fluid banner"
      src={b2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className="text-dark">Trust Us</h3>
      <p className="text-black-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-fluid banner"
      src={b3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="text-dark">Have the Best Treatment</h3>
      <p className="text-black-50">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>   
        </Container>
    );
};

export default Banner;