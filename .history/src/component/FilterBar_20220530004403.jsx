import React, { useState } from 'react';
import { Form } from 'react-bootstrap';


const FilterBar = ({gender, filterHandle}) => {
    
    const [name, setName] = useState("");
    
    const nameChangeHandle = (event)=>{
        const {value} = event.target;
        setName(value)
        filterHandle(value)
    }

        console.log(name);

    return (
        <div className='mt-5'>
            <div className='col'>
                <h4>FILTER</h4>
                <hr></hr>
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Name</Form.Label>
                    <input type="text" id="name" className='form-control' placeholder="Search Name" onChange={nameChangeHandle}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Email</Form.Label>
                    <input className='form-control' id='email' type="Email" placeholder="Search Email" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Gender</Form.Label>
                    <Form.Select defaultValue="Gender">
                        {
                           gender.map((gender, index)=><option key={index} value={gender}>{gender}</option>)
                        }
                    </Form.Select>
                </Form.Group>
                <hr></hr>
                
                <Form.Group>
                    <Form.Label>Start Date</Form.Label>
                    <input type="date" id="startDate" className="form-control"/>
                </Form.Group>
                
                <Form.Group className="mt-3" controlId="formGroupPassword">
                    <Form.Label>End Date</Form.Label>
                    <input type="date" className='form-control' id='endDate'/>
                </Form.Group>

                </Form>
        </div>
    );
};

export default FilterBar;