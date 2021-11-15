import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import Dashboard from '../Dashboard/Dashboard';
import OrderTable from './OrderTable';

const Orders = () => {
    const {user} = useAuth();

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const url = `https://shielded-brushlands-84106.herokuapp.com/orders?email=${user.email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])
    return (
        <div>
            
            <Dashboard></Dashboard>
            <Container>
                    {
                        orders.map(order=> <OrderTable 
                            key={order._id}
                            order={order}
                        > </OrderTable>)
                    }
            {/* <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>{orders.length}</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Orders</th>
                    <th>Quantity</th>
                    <th>Process</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td><button>cancel</button></td>
                    </tr>
                    
                </tbody>
           </Table> */}
        </Container>
        </div>
    );
};

export default Orders;