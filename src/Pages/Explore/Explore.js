import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../Shared/Navigation/Navigation';
import Items from './Items/Items';

const Explore = () => {
     const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./bi-bike.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
       <div>
           <Navigation></Navigation>
           <Container>
                {
                products.map(product =><Items
                key={product.name}
                product={product}
                ></Items> )
            }
           </Container>

       </div>
    );
};

export default Explore;