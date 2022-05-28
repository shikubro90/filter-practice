import React from 'react';
import { Form } from 'react-bootstrap';


const FilterBar = (props) => {

    const {gender} = props;

    return (
        <div className='mt-5'>
            <div className='col'>
                <h4>FILTER</h4>
                <hr></hr>
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
                        
                        
                        {
                            gender? gender.map(())
                        }
                    </Form.Select>
                </Form.Group>
                <hr></hr>
                
                <Form.Group>
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control type="date"></Form.Control>
                </Form.Group>
                
                <Form.Group className="mt-3" controlId="formGroupPassword">
                    <Form.Label>End Date</Form.Label>
                    <Form.Control type="date"></Form.Control>
                </Form.Group>

                </Form>
        </div>
    );
};

export default FilterBar;