import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const {user, logOut} = useAuth();
    return (
        <div>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Bi-Bike</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
                   
                    </Nav>
                    <Nav>
                    <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                    {user?.email ?
                     <button onClick={logOut} className="btn btn-dark">Log Out</button>
                    :
                    <Nav.Link as={Link} to="/login">
                        Login
                    </Nav.Link>

                }

        
                    
                    </Nav>
                </Navbar.Collapse>
            </Container>
         </Navbar>
        </div>
    );
};

export default Navigation;