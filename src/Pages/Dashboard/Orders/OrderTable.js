import React from 'react';
import { Table } from 'react-bootstrap';

const OrderTable = (props) => {
    const { name, email, phone, address, quantity, _id } = props.order;

    const handleDelete = id =>{
        const url = `https://shielded-brushlands-84106.herokuapp.com/orders/${_id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div>
             <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    
                    <th>Name</th>
                    <th>Email</th>
                    <th>phone</th>
                    <th>Quantity</th>
                    <th>Process</th>
                    <th>Cancel</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{name}</td>
                    
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>{quantity}</td>
                    <td>{address}</td>
                    <td><button onClick={() => handleDelete(_id)}>Cancel</button></td>
                    </tr>
                    {/* <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td><button>cancel</button></td>
                    </tr> */}
                    
                </tbody>
           </Table>
        </div>
    );
};

export default OrderTable;