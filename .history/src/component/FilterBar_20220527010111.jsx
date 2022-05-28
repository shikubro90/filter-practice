import React from 'react';
import { Form } from 'react-bootstrap';

const FilterBar = () => {
    return (
        <div className='mt-5'>
            <div className='col'>
                <h4>Filter</h4>
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Search Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="Email" placeholder="Search Email" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Gender</Form.Label>
                    <Form.Select defaultValue="Gender">
                        <option>Male</option>
                        <option>Female</option>
                    </Form.Select>
                </Form.Group>

                <Form.

                </Form>
        </div>
    );
};

export default FilterBar;