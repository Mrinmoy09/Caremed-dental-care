import './Service.css'
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Service = ({service}) => {
    const {title , description , image} = service;
    return (
        <>
          
          <Col sm={4} className="p-3">
          
          <Card className="h-100 card-container">
                 <Card.Img variant="top" src={image} />
                 <Card.Body>
                   <Card.Title>{title}</Card.Title>
                   <Card.Text>
                     {description}
                   </Card.Text>

                 </Card.Body>
                 <Link className="mx-auto" to={`/services/${service?.id}`}><Button variant="primary">View Deatils</Button></Link>
            </Card>
          
          
        </Col> 
        
        </>
    );
};

export default Service;