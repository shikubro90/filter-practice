import React from 'react';
import { Form } from 'react-bootstrap';

const FilterBar = () => {
    return (
        <div className='mt-5'>
            <div className='col'>
                <h4>Filters</h4>
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                </Form>
        </div>
    );
};

export default FilterBar;