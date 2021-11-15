import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Dashboard = () => {
    const {admin} = useAuth();
    return (
        <div>

            <Navigation></Navigation>



            <Container>
                <div className="m-5">
                    <Link to="/orders"><button class="btn btn-warning mx-3">My all Orders</button></Link>

                        {admin && <div>
                    <Link to="/addAdmin"><button class="btn btn-danger mx-3">Add an Admin</button></Link>

                    <Link to="/orders"><button class="btn btn-secondary mx-3">Manage Products</button></Link>

                    <Link to="/addProduct"><button class="btn btn-dark mx-3 ">Add A Product</button></Link>

                    <Link to="/payment"><button class="btn btn-dark mx-3 ">Make Payment</button></Link>
                     </div> }

                    
                </div>
            </Container>
        </div>
    );
};

export default Dashboard;