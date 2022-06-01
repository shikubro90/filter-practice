import React, { useState } from 'react';
import { Form } from 'react-bootstrap';


const FilterBar = ({gender, filterName, filterEmail,filterGender,filterFrom,filterEnd}) => {
    
    const [filteredData, setfilteredData] = useState({
        name : "",
        email : "", 
        gender: "",
        from : "",
        to : ""
    });

    const filterHandle=(field)=>(event)=>{

        const {value} = event.target;
        
        setfilteredData({
            ...filteredData, 
            [field] : value
           });

        switch (field) {
            case "name" :
            filterName(value)
            break;

            case "email" :
            filterEmail(value)
            break;

            case "gender": 
            filterGender(value)
            break;
            
            case "from": 
            filterFrom(value)
            break;

            case "end": 
            filterEnd(value)
            break;

            default:
                break;
            }
        }
    

    return (
        <div className='mt-5'>
            <div className='col'>
                <h4>FILTER</h4>
                <hr></hr>
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Name</Form.Label>
                    <input type="text" id="name" className='form-control' placeholder="Search Name" onChange={filterHandle("name")}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Email</Form.Label>
                    <input className='form-control' id='email' type="Email" placeholder="Search Email" onChange={filterHandle("email")} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Gender</Form.Label>
                    <Select defaultValue="Gender" onClick={filterHandle('gender')} >
                        {
                           gender.map((gender, index)=><option key={index} value={gender}>{gender}</option>)
                        }
                    </Select>
                </Form.Group>
                <hr></hr>
                
                <Form.Group>
                    <Form.Label>Start Date</Form.Label>
                    <input type="date" id="startDate" className="form-control" onChange={filterHandle("form")}/>
                </Form.Group>
                
                <Form.Group className="mt-3" controlId="formGroupPassword">
                    <Form.Label>End Date</Form.Label>
                    <input type="date" className='form-control' id='endDate' onChange={filterHandle("form")}/>
                </Form.Group>

                </Form>
        </div>
    );
};

export default FilterBar;