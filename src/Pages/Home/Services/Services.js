import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = () => {
    
    return (
        <Container>
            <h2 className="mt-5 ">Most Popular Products</h2>

        
        <div>
             <Card className="mt-5 ">
                    
                   <div className="d-flex">
                        <div>
                <Card.Img variant="top" className="w-100 h-100" src="https://i.ibb.co/fDh9HZv/bike-1.webp" />
                </div>
                    <div>
                        <Card.Body>
                    <Card.Title><h1>Top Fuel</h1></Card.Title>
                    <h5><big>Price:</big>1099$</h5>
    
                    <Card.Text>
                        Description: Top Fuel’s a full suspension XC ripper that’s fast on flow and loves getting down on techy trails.
                    </Card.Text>
                    </Card.Body>
                    <Link to="/orderNow/:serviceId"><button className="btn btn-secondary"> Proceed to Order</button></Link>
                     
                      
                    </div>
                   </div>
                </Card>
        </div>
        <div>
             <Card className="mt-5 ">
                    
                   <div className="d-flex">
                        <div>
                <Card.Img variant="top" className="w-100 h-100" src="https://i.ibb.co/VxGXd14/bike-2.jpg" />
                </div>
                    <div>
                        <Card.Body>
                    <Card.Title><h1>Supercaliber</h1></Card.Title>
                    <h5><big>Price:</big>1199$</h5>
    
                    <Card.Text>
                        Description: From cutting-edge carbon race bikes to versatile models made for loads of fun on light trails.
                    </Card.Text>
                    </Card.Body>
                    <Link to="/orderNow/:serviceId"><button className="btn btn-secondary"> Proceed to Order</button></Link>
                     
                      
                    </div>
                   </div>
                </Card>
        </div>
        <div>
             <Card className="mt-5 ">
                    
                   <div className="d-flex">
                        <div>
                <Card.Img variant="top" className="w-100 h-100" src="https://i.ibb.co/nD7jVZ1/bike-3.jpg" />
                </div>
                    <div>
                        <Card.Body>
                    <Card.Title><h1>Slash</h1></Card.Title>
                    <h5><big>Price:</big>1299$</h5>
    
                    <Card.Text>
                        Game-changing IsoStrut suspension tech makes this World Cup carbon race bike fast, light, and smooth.
                    </Card.Text>
                    </Card.Body>
                    <Link to="/orderNow/:serviceId"><button className="btn btn-secondary"> Proceed to Order</button></Link>
                     
                      
                    </div>
                   </div>
                </Card>
        </div>
        <div>
             <Card className="mt-5 ">
                    
                   <div className="d-flex">
                        <div>
                <Card.Img variant="top" className="w-100 h-100" src="https://i.ibb.co/jw8vPXP/bike-4.jpg" />
                </div>
                    <div>
                        <Card.Body>
                    <Card.Title><h1>Remedy</h1></Card.Title>
                    <h5><big>Price:</big>1399$</h5>
    
                    <Card.Text>
                       Snappy 27.5˝ wheels make this the rig for popping off jumps, railing corners, and throwing the bike around.
                    </Card.Text>
                    </Card.Body>
                    <Link to="/orderNow/:serviceId"><button className="btn btn-secondary"> Proceed to Order</button></Link>
                     
                      
                    </div>
                   </div>
                </Card>
        </div>
        <div>
             <Card className="mt-5 ">
                    
                   <div className="d-flex">
                        <div>
                <Card.Img variant="top" className="w-100 h-100" src="https://i.ibb.co/x1KLR8m/bike-5.webp" />
                </div>
                    <div>
                        <Card.Body>
                    <Card.Title><h1>Powerfly</h1></Card.Title>
                    <h5><big>Price:</big>1499$</h5>
    
                    <Card.Text>
                        A long-travel all-mountain bike built for racing rugged enduro lines and having a rippin’ good time in the rough.
                    </Card.Text>
                    </Card.Body>
                    <Link to="/orderNow/:serviceId"><button className="btn btn-secondary"> Proceed to Order</button></Link>
                     
                      
                    </div>
                   </div>
                </Card>
        </div>
        <div>
             <Card className="mt-5 ">
                    
                   <div className="d-flex">
                        <div>
                <Card.Img variant="top" className="w-100 h-100" src="https://i.ibb.co/88f3Xgp/bike-7.webp" />
                </div>
                    <div>
                        <Card.Body>
                    <Card.Title><h1>Rail</h1></Card.Title>
                    <h5><big>Price:</big>1699$</h5>
    
                    <Card.Text>
                       Powerfly is a versatile and powerful e-MTB that helps you explore more of your off-road world.
                    </Card.Text>
                    </Card.Body>
                    <Link to="/orderNow/:serviceId"><button className="btn btn-secondary"> Proceed to Order</button></Link>
                     
                      
                    </div>
                   </div>
                </Card>
        </div>
          <Link className="btn btn-danger my-5"to="/explore"> <button className="btn btn-warning">Explore more</button></Link>
        </Container>
    );
};

export default Services;