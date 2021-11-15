import React from 'react';
import { Container } from 'react-bootstrap';

const Comments = (props) => {
     const { name, ratings, description } = props.comment;
    return (
        <Container>
            <h6>Name:{name}</h6>
            <p>Ratings:- {ratings}⭐</p>
            <p className="mb-5"><small>{description}</small></p>

        </Container>
    );
};

export default Comments;