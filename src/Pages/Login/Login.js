import React, { useState } from 'react';
import { Alert, Container, FloatingLabel, Form, Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, loginUser, isLoading, authError} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
       const field = e.target.name;
       const value = e.target.value;
       const newLoginData = {...loginData};
       newLoginData[ field ] = value;
       setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <div>
            <Navigation/>
           <Container>
            
             <h1 className="m-5">Please Login</h1>
            <>
                <form onSubmit={handleLoginSubmit}>
                    <FloatingLabel
                        
                        controlId="floatingInput"
                        label="Email address"
                        className="my-3"
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
                    

                    <button className="btn btn-primary m-5">Login</button>
                </form>
                {isLoading && <Spinner animation="grow" />}
                {user?.email && 
                  <Alert  >
                      User successfully Logged In
                    </Alert>}
                {authError && <Alert variant="danger" >
                    <Alert.Heading>Oh snap! {authError}</Alert.Heading>
                 </Alert>}
            </>
            
            
        </Container>
        <h6>Not a user?</h6> 
           <Link to="/register" style={{textDecoration: 'none'}}>Register Now</Link>
        </div>
        
    );
};

export default Login;