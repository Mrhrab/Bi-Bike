import React, { useEffect, useState } from 'react';
import { Alert, Container, FloatingLabel, Form } from 'react-bootstrap';
import Navigation from '../Shared/Navigation/Navigation';
import useAuth from '../../hooks/useAuth';
import { useParams } from 'react-router';

const OrderNow = () => {
    const { serviceId } = useParams();

 const {user} = useAuth();

 const initialInfo = { name: user.displayName, email: user.email, phone: '', address: '', quantity: '', country: '' }

 const [orderSuccess, setOrderSuccess] = useState(false);
 const [orderInfo, setOrderInfo] = useState(initialInfo);
 const [service, setService] = useState({});

 const handleOnBlur = e => {
  const field = e.target.name;
  const value = e.target.value;
  const newInfo = {...orderInfo};
  newInfo[field] = value;
  setOrderInfo(newInfo);
 }

 const handleOrderSubmit = e => {

    
        const order = {
            ...orderInfo
        }
         fetch('http://localhost:5000/orders', {
             method: 'POST',
             headers: { 
                 'content-type' : 'application/json'
             },
             body: JSON.stringify(order)
         })
         .then(res => res.json())
         .then(data => {
             if (data.insertedId) {
                   setOrderSuccess(true)
                }
         })
        e.preventDefault();
            
        }
        useEffect(() =>{
            fetch( `http://localhost:5000/products/${serviceId}` )
            .then(res => res.json())
            .then(data => setService(data))
        }, [])
        

    return (
        <div>
            
            
            <Navigation></Navigation>
            
            <Container>
                               <h1 className="text-secondary mt-5">Get The Bike Of Your Dream Now!!!</h1>
                               <p className="text-dark">Get 7day international free delivery service</p>
                        <br/>

               <>
               <form onSubmit={handleOrderSubmit}>
                    <FloatingLabel
                        
                        controlId="floatingInput"
                        label="Full Name"
                        className="mb-3"
                    >
                        <Form.Control
                         name="name"
                         onBlur={handleOnBlur}
                         type="text"
                         placeholder="name@example.com"
                         defaultValue={user.displayName} />

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
                         placeholder="name@example.com"
                         defaultValue={user.email} />

                    </FloatingLabel>

                    <FloatingLabel
                        
                        controlId="floatingInput"
                        label="address"
                        className="mb-3"
                    >
                        <Form.Control
                         name="address"
                         onBlur={handleOnBlur}
                         type="text"
                         placeholder="name@example.com" />

                    </FloatingLabel>

                    <FloatingLabel
                        
                        controlId="floatingInput"
                        label="quantity"
                        className="mb-3"
                    >
                        <Form.Control
                         name="quantity"
                         onBlur={handleOnBlur}
                         type="number"
                         placeholder="name@example.com" />

                    </FloatingLabel>

                    <FloatingLabel
                        
                        controlId="floatingInput"
                        label="country"
                        className="mb-3"
                    >
                        <Form.Control
                         name="country"
                         onBlur={handleOnBlur}
                         type="text"
                         placeholder="name@example.com" />

                    </FloatingLabel>
                    <FloatingLabel
                        
                        controlId="floatingInput"
                        label="phone"
                        className="mb-3"
                    >
                        <Form.Control
                         name="phone"
                         onBlur={handleOnBlur}
                         type="number"
                         placeholder="name@example.com" />

                    </FloatingLabel>

                    <button type="submit" className="btn btn-warning m-5">Order Now</button>
                </form>
                
            </>
             {orderSuccess && <Alert >
                       Order Placed Successfully
                    </Alert>}
            </Container>
            
        </div>
    );
};

export default OrderNow;