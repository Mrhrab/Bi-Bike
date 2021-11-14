import React, { useState } from 'react';
import { Alert, Container, FloatingLabel, Form } from 'react-bootstrap';
import Dashboard from '../Dashboard/Dashboard'
import useAuth from '../../../hooks/useAuth';

// import useAuth from '../../

const AddProduct = () => {
    const {user} = useAuth();
 const initialInfo = { name: '', email: '', phone: '', address: '', quantity: '', country: '' }

 const [pushSuccess, setPushSuccess] = useState(false);
 const [productInfo, setProductInfo] = useState(initialInfo);

 const handleOnBlur = e => {
  const field = e.target.name;
  const value = e.target.value;
  const newProduct = {...productInfo};
  newProduct[field] = value;
  setProductInfo(newProduct);
 }

 const handleOrderSubmit = e => {
        const order = {
            ...productInfo
        }
         fetch('http://localhost:5000/products', {
             method: 'POST',
             headers: { 
                 'content-type' : 'application/json'
             },
             body: JSON.stringify(order)
         })
         .then(res => res.json())
         .then(data => {
             if (data.insertedId) {
                   setPushSuccess(true)
                }
         })
        e.preventDefault();
            
        }
    return (
        <div>
            <Dashboard></Dashboard>
            <Container>
                               <h1 className="text-secondary mt-5">Add   Bike </h1>
                               
                        <br/>

               <>
               <form onSubmit={handleOrderSubmit}>
                    <FloatingLabel
                        
                        controlId="floatingInput"
                        label="Product Name"
                        className="mb-3"
                    >
                        <Form.Control
                         name="name"
                         onBlur={handleOnBlur}
                         type="text"
                         placeholder="name@example.com"
                          />

                    </FloatingLabel>

                    <FloatingLabel
                       
                        controlId="floatingInput"
                        label="Product img"
                        className="mb-3"
                    >
                        <Form.Control
                         name="img"
                         onBlur={handleOnBlur}
                         type="text"
                         placeholder="name@example.com"
                          />

                    </FloatingLabel>

                    <FloatingLabel
                        
                        controlId="floatingInput"
                        label="description"
                        className="mb-3"
                    >
                        <Form.Control
                         name="description"
                         onBlur={handleOnBlur}
                         type="text"
                         placeholder="name@example.com" />

                    </FloatingLabel>

                    <FloatingLabel
                        
                        controlId="floatingInput"
                        label="price"
                        className="mb-3"
                    >
                        <Form.Control
                         name="price"
                         onBlur={handleOnBlur}
                         type="text"
                         placeholder="name@example.com" />

                    </FloatingLabel>


                    <button type="submit" className="btn btn-warning m-5">Submit & Go TO Pay</button>
                </form>
                
            </>
             {pushSuccess && <Alert >
                      Product add to the server
                    </Alert>}
            </Container>
        </div>
    );
};

export default AddProduct;