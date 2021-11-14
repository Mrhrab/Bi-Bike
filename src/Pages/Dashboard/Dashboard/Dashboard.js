import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';

const Dashboard = () => {
    return (
        <div>

            <Navigation></Navigation>



            <Container>
                <div className="m-5">
                    <Link to="/orders"><button class="btn btn-warning mx-3">My all Orders</button></Link>

                    <Link to="/addAdmin"><button class="btn btn-danger mx-3">Add an Admin</button></Link>

                    <Link to="/orders"><button class="btn btn-secondary mx-3">Manage Products</button></Link>

                    <Link to="/addProduct"><button class="btn btn-dark mx-3 mt-3">Add A Product</button></Link>
                </div>
            </Container>
        </div>
    );
};

export default Dashboard;