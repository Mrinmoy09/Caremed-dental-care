import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services , setServices] = useState([]);
    

    useEffect(()=>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div id="services">
            <h2 className="text-center mt-2 text-primary">OUR SERIVICES</h2>
            <Container>
            
                <Row className="p-3 m-2">
                    {
                    services.map(service => <Service
                    key={service.id}
                    service ={service}
                    ></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;