import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-primary mt-5">
            <Container className="sticky-bottom">
            <Row>
                <Col sm={4}>
                <h3>About CareMed</h3>
                  <p>We have The best Doctors around the world.You can book and meet them to solve your problem</p>
                </Col>
                <Col sm={4}>
                  <h3>Our Services</h3>
                  <p>We have the best machines and accersories for all kind og dental treatment and test</p>
                </Col>
                <Col sm={4}>
                  <h3>Contact us</h3>
                  <p>Phone: 171-115-0092-119</p>
                  <p>email: caremed@doc.com</p>
                </Col>
                <small className="text-center p-2 m-3 copyright">Created by &copy;mrinmoyarnob</small>
             </Row>
             
            </Container>
        </div>
    );
};

export default Footer;