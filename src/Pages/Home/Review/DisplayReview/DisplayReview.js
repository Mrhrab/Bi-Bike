import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Comments from './Comments';

const DisplayReview = () => {
    const [comments, setComments] = useState([]);
     

    useEffect(() => {
        fetch('https://shielded-brushlands-84106.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setComments(data))
    }, [])
    return (
        <Container>
            <h1 className="text-warning m-5">All Comments</h1>
                {
                comments.map(comment =><Comments
                key={comment._id}
                comment={comment}
                ></Comments> )
            }
           </Container>
    );
};

export default DisplayReview;