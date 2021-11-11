import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Items = (props) => {
    const {name, img, description, price} = props.product;
    return (
        <div>
             <Card className="mt-5 ">
                    
                   <div className="d-flex">
                        <div>
                <Card.Img variant="top" className="w-100 h-100" src={img} />
                </div>
                    <div>
                        <Card.Body>
                    <Card.Title><h1>{name}</h1></Card.Title>
                    <h5><big>Price:</big>{price}</h5>
    
                    <Card.Text>
                        Description: {description}
                    </Card.Text>
                    </Card.Body>
                    <Link to="/orderNow"><button className="btn btn-secondary"> Proceed to Order</button></Link>
                     
                      
                    </div>
                   </div>
                </Card>
        </div>
    );
};

export default Items;