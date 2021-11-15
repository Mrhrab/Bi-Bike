import React from 'react';
import { Container, Form } from 'react-bootstrap';
import Dashboard from '../Dashboard/Dashboard';

const Payment = () => {
    return (
        <div>
            <Dashboard></Dashboard>
            <Container>
            <h1 class=" my-5">Payment Coming soon</h1>

            <div className="my-5">
  <Form.Control size="lg" type="text" placeholder="Large text" />
  <br />
  <Form.Control type="text" placeholder="Normal text" />
  <br />
  <Form.Control size="sm" type="text" placeholder="Small text" />
</div>
  <button class="btn btn-primary my-5">Pay Now</button>

        </Container>
        </div>
    );
};

export default Payment;