import React from 'react';
import { Col ,Card } from 'react-bootstrap';
import './Member.css';

const Member = ({member}) => {
    const {name , job , image} = member;
    return (
        <>
           <Col sm={3} className="p-2 mx-auto">
           <Card style={{width: '20rem'}} className="h-100 card-container">
  <Card.Img variant="top" src={image} className="member-img mx-auto" />
  <Card.Body>
    <Card.Title className="text-center">{name}</Card.Title>
    <Card.Text className="text-center">
      {job}
    </Card.Text>
  </Card.Body>
  </Card>
           </Col> 
        </>
    );
};

export default Member;