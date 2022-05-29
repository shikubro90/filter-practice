import React from 'react';
import { Button, Card } from 'react-bootstrap';

const SingleProduct = ({item}) => {
    


    return (
        <div className='col-sm-4 mt-2'>
            <Car style={{ width: '16rem' }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                    <Card.Title>{item.first_name} {item.last_name}</Card.Title>
                    <Card.Text>
                    
                        `${item.email}`
                        <br> 
                        `${item.ip_address}` 
                        <br>
                        `${item.date}`
                    
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
        </div>
    );
};

export default SingleProduct;