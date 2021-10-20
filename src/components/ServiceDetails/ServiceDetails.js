import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [serviceDetails , setServiceDetails] = useState([]);
    
    useEffect(()=>{
        fetch('/serviceDetails.json')
        .then(res => res.json())
        .then(data => setServiceDetails(data));
    },[]);

    
    console.log(serviceDetails);   
    const foundService = serviceDetails.find(service => service.id == serviceId)
     console.log(foundService);   

    return (
        <div className="mt-4
        ">
             <Card className="mx-auto p-3 h-100" style={{ width: '25rem' }}>
  <Card.Img variant="top" src={foundService?.image} className="img-fluid"/>
  <Card.Body>
    <Card.Title>{foundService?.title}</Card.Title>
    <Card.Text>
     {foundService?.description}
    </Card.Text>
    <Button as={Link} to='/booking'>Book Your Service</Button>
  </Card.Body>
</Card>
            
        </div>
    );
};

export default ServiceDetails;