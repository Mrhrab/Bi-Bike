import React, { useState } from 'react';
import { Alert, Container, FloatingLabel, Form } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth'

const AddReview = () => {
    const {user} = useAuth();
 const initialInfo = { name: user.displayName , ratings: '', description: '' }

 const [pushSuccess, setPushSuccess] = useState(false);
 const [review, setReview] = useState(initialInfo);

 const handleOnBlur = e => {
  const field = e.target.name;
  const value = e.target.value;
  const newProduct = {...review};
  newProduct[field] = value;
  setReview(newProduct);
 }

 const handleOrderSubmit = e => {
        const order = {
            ...review
        }
         fetch('https://shielded-brushlands-84106.herokuapp.com/reviews', {
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
             <div>
            <Container>
                               <h1 className="text-secondary mt-5">Leave a review  :-)</h1>
                               
                        <br/>

               <>
               <form onSubmit={handleOrderSubmit}>
                    <FloatingLabel
                        
                        controlId="floatingInput"
                        label=" Name"
                        className="mb-3"
                    >
                        <Form.Control
                         defaultValue={user.displayName}
                         name="name"
                         onBlur={handleOnBlur}
                         type="text"
                         placeholder="name@example.com"
                          />

                    </FloatingLabel>

                    <FloatingLabel
                       
                        controlId="floatingInput"
                        label="ratings"
                        className="mb-3"
                    >
                        <Form.Control
                         name="ratings"
                         min="0"
                         max="6"
                         onBlur={handleOnBlur}
                         type="number"
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

                   


                    <button type="submit" className="btn btn-secondary m-5">Submit </button>
                </form>
                
            </>
             {pushSuccess && <Alert >
                     Review added Successfully!!
                    </Alert>}
            </Container>
        </div>
            
        </div>
    );
};

export default AddReview;