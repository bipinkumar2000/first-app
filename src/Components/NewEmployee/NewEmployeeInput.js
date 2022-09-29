import Button from '../../UI/Button';
import Card from '../../UI/Card';
import { useState } from 'react';

import './NewEmployeeInput.css'


const NewEmployeeInput = (props) =>{

    const [input,setInput] = useState({
        name:'',
        salary:''
    });

    const formSubmitHandler = (event) =>{
        event.preventDefault();
        const employeeData = {...input};
        setInput({
            ...input,
            name:'',
            salary:'',
        });
        props.onFormSubmitHandler(employeeData);
    }

    const nameChangeHandler = (event ) =>{
        setInput({
            ...input,
             name:event.target.value,   
        });
    }

    const salaryChangeHandler = (event ) =>{
        setInput({
            ...input,
            salary:event.target.value,
        });
    }


    return(
        <Card >
            <form onSubmit={formSubmitHandler} className='form-control'>
                <label>
                    Name
                </label>
                <input type='text' onChange={nameChangeHandler} value={input.name} />
                <label>
                    Salary
                </label>
                <input type='number' onChange={salaryChangeHandler} value={input.salary} />
                <div className='actions'>
                <Button type='submit'>Add a new Employee</Button>
                </div>
                
            </form>
        </Card>
    );
}

export default NewEmployeeInput;