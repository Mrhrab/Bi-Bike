import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const QnA = () => {
    return (
       <Container className="mt-5">
           <h1 className="m-5">Most frequently Asked Questions</h1>
           <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>1. How to get customer service?</Accordion.Header>
    <Accordion.Body>
      It's like code review but for support teams. Learn how your customer service team is performing against your internal quality standards. Provide consistent feedback and help your agents grow professionally.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>2. How to get  warranty?</Accordion.Header>
    <Accordion.Body>
      We have received some inquiries and we would like to clarify with our Stanford Bike Community that Stanford University and Stanford Transportation do not have a business relationship with Joe Bike, a new subscription service being promoted on the campus. We have not and do not have current plans to approve or otherwise endorse Joe Bike for their operation on campus.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>3. How do we provide warrany?</Accordion.Header>
    <Accordion.Body>
      We have received some inquiries and we would like to clarify with our Stanford Bike Community that Stanford University and Stanford Transportation do not have a business relationship with Joe Bike, a new subscription service being promoted on the campus. We have not and do not have current plans to approve or otherwise endorse Joe Bike for their operation on campus.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>4. Wjat is our after sales service?  service?</Accordion.Header>
    <Accordion.Body>
      We have received some inquiries and we would like to clarify with our Stanford Bike Community that Stanford University and Stanford Transportation do not have a business relationship with Joe Bike, a new subscription service being promoted on the campus. We have not and do not have current plans to approve or otherwise endorse Joe Bike for their operation on campus.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
       </Container>
    );
};

export default QnA;