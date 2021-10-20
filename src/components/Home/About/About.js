import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className="mt-5 bg-warning">
            <Container className="container-fluid">
                <Row>
                    <Col sm={6}>
                        <img src="https://i.ibb.co/yRZRk9y/5495572.jpg" alt="" className="img-fluid"/>
                    </Col>
                    <Col sm={4} className="mx-auto my-auto">
                        <h2 className="text-center">Your Comfort Is Our Priority</h2>
                        <p className="text-black-50 text-center">Our focus is on your overall well being and helping you achieve optimal health and esthetics. 
                         We provide state-of-the-art dental care in a comfortable setting, at times convenient to your schedule.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;