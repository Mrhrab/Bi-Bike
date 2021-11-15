import React, { useState } from 'react';
import { Alert, Container, FloatingLabel, Form } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Dashboard from '../Dashboard/Dashboard';

const AddAdmin = () => {
    const [ email, setEmail] = useState('');
    const [ success, setSuccess] = useState(false);
    const {token} = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = {email};
        fetch('https://shielded-brushlands-84106.herokuapp.com/users/admin',{
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){  
              console.log(data);
              
              setSuccess(true);
            }
            
        })
        
        e.preventDefault();
    }
    return (
       <div>
           <Dashboard ></Dashboard>

        <Container >
            <h2 className="my-5">Add an admin</h2>
            <form onSubmit={handleAdminSubmit}> 
                 <FloatingLabel
                        
                        controlId="floatingInput"
                        label="Email address"
                        className="my-5"
                    >
                        <Form.Control
                        name="email"
                         onBlur={handleOnBlur}
                         type="email"
                         placeholder="name@example.com" />

                    </FloatingLabel>
                    <button  type="submit" className="btn btn-danger my-5">MAke ADMIN</button>
                    <p className="my-5 text-danger">Note:Only an admin can make another admin </p>
            </form>
            
        </Container>
        {success && <Alert >
                      Admin creation Successful!!
                    </Alert>}
       </div>
    );
};

export default AddAdmin;