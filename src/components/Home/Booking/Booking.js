import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Booking = () => {
    return (
        <div>
            <Card className="mx-auto p-3 h-100" style={{ width: '25rem' }}>
  <Card.Img variant="top" src="https://i.ibb.co/nbVtnX0/54048.jpg" className="img-fluid"/>
  <Card.Body>
    <Card.Title>Congrats</Card.Title>
    <Card.Text>
     Your Booking Has been confirmed
    </Card.Text>
    <Button as={Link} to="/home" variant="primary">Go Home</Button>
  </Card.Body>
</Card>
        </div>
    );
};

export default Booking;