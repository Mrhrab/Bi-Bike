import React, { useState } from 'react';
import { Alert, Container, FloatingLabel, Form, Spinner } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';



const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const {user, registerUser, isLoading,authError } = useAuth();

    const handleOnBlur = e => {
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
        registerUser(loginData.email, loginData.password,loginData.name, history);

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
                        label="Full Name"
                        className="mb-3"
                    >
                        <Form.Control
                         name="name"
                         onBlur={handleOnBlur}
                         type="text"
                         placeholder="name@example.com" />

                    </FloatingLabel>

                    <FloatingLabel
                        
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control
                         name="email"
                         onBlur={handleOnBlur}
                         type="email"
                         placeholder="name@example.com" />

                    </FloatingLabel>

                    <FloatingLabel 
                    controlId="floatingPassword" label="Password">

                        <Form.Control 
                        onBlur={handleOnBlur}
                        name="password"
                        type="password" 
                        placeholder="Password"
                        className="mb-3" />

                    </FloatingLabel>

                    <FloatingLabel 
                    controlId="floatingPassword" label="Retype Password">

                        <Form.Control 
                        onBlur={handleOnBlur}
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
        
           <Link to="/login" style={{textDecoration: 'none'}}>Already Registered User?Login Now</Link>
        </div>
    );
};

export default Register;