import React from 'react';
import { Button, Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png'


const Header = () => {
    const {user , logOut} = useAuth();
    return (
       <div>
                    <Navbar bg="primary" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end ">
                        <Nav.Link as={HashLink} to="/home#home" className="text-white">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services" className="text-white">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#experts" className="text-white">Experts</Nav.Link>
                        <Nav.Link as={Link} to="/booking" className="text-white">Booking</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout </Button> :
                            <Nav.Link as={Link} to="/login" className="text-white">Login</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: {user.displayName}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
       </div>
    );
};

export default Header;