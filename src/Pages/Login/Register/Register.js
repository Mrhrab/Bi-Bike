import React, { useState } from 'react';
import { Alert, Container, FloatingLabel, Form, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';



const Register = () => {
    const [loginData, setLoginData] = useState({});

    const {user, registerUser, isLoading,authError } = useAuth();

    const handleOnChange = e => {
       const field = e.target.name;
       const value = e.target.value;
       const newLoginData = {...loginData};
       newLoginData[ field ] = value;
       setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert('Password did not match');
            return;
        }
        registerUser(loginData.email, loginData.password)

        e.preventDefault();
    }
    return (
         <div>
            <Navigation/>
           <Container>
            
             <h1 className="m-5">Please Register</h1>
            <>
                {!isLoading && <form onSubmit={handleLoginSubmit}>
                    <FloatingLabel
                        
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control
                         name="email"
                         onChange={handleOnChange}
                         type="email"
                         placeholder="name@example.com" />

                    </FloatingLabel>

                    <FloatingLabel 
                    controlId="floatingPassword" label="Password">

                        <Form.Control 
                        onChange={handleOnChange}
                        name="password"
                        type="password" 
                        placeholder="Password"
                        className="mb-3" />

                    </FloatingLabel>

                    <FloatingLabel 
                    controlId="floatingPassword" label="Retype Password">

                        <Form.Control 
                        onChange={handleOnChange}
                        name="password2"
                        type="password" 
                        placeholder="Password"
                         />

                    </FloatingLabel>

                    <button className="btn btn-primary m-5">Register</button>
                </form>}
                {isLoading && <Spinner animation="grow" />}
                {user?.email && 
                  <Alert  >
                      User successfully registered
                    </Alert>}
                {authError && <Alert variant="danger" >
                    <Alert.Heading>Oh snap! {authError}</Alert.Heading>
                 </Alert>}
            </>
            
            
        </Container>
        <h6>Not a user?</h6> 
           <Link to="/login" style={{textDecoration: 'none'}}>Already Registered User?</Link>
        </div>
    );
};

export default Register;