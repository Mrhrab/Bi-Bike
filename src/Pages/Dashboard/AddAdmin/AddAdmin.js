import React, { useState } from 'react';
import { Container, FloatingLabel, Form } from 'react-bootstrap';
import Dashboard from '../Dashboard/Dashboard';

const AddAdmin = () => {
    const [ email, setEmail] = useState('');
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = {email};
        fetch('http://localhost:5000/users/admin',{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        
        e.preventDefault();
    }
    return (
       <div>
           <Dashboard></Dashboard>

        <Container>
            <h2>Add an admin</h2>
            <form onSubmit={handleAdminSubmit}> 
                 <FloatingLabel
                        
                        controlId="floatingInput"
                        label="Email address"
                        className="my-3"
                    >
                        <Form.Control
                        name="email"
                         onBlur={handleOnBlur}
                         type="email"
                         placeholder="name@example.com" />

                    </FloatingLabel>
                    <button type="submit" className="btn btn-warning">MAke ADMIN</button>
            </form>
        </Container>
       </div>
    );
};

export default AddAdmin;