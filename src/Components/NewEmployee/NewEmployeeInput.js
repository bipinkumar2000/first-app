import Button from '../../UI/Button';
import Card from '../../UI/Card';
import ErrorModal from '../../Components/ErrorModal';

import { useState } from 'react';

import './NewEmployeeInput.css'


const NewEmployeeInput = (props) =>{

    const [errorStatus,setErrorStatus] = useState(false);

    const [input,setInput] = useState({
        name:'',
        salary:''
    });

    const formSubmitHandler = (event) =>{
        event.preventDefault();
        if(input.name.length>0 && input.salary.length>0){         
            const employeeData = {...input};
            setInput({
                ...input,
                name:'',
                salary:'',
            });
            props.onFormSubmitHandler(employeeData);
        }
        else{
           setErrorStatus(true);
        }
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
       <div className='form-container'>
        <ErrorModal className='error' message='Name and Salary is Required'></ErrorModal>
            {errorStatus ? <ErrorModal className='error' message='Name and Salary is Required'></ErrorModal>:null}
            <Card>
                <form onSubmit={formSubmitHandler} className='form-control'>
                    <label>
                        Name
                    </label>
                    <input type='text' onChange={nameChangeHandler} value={input.name} onInvalid={e=>e.target.setCustomValidity('Name is Mandatory')} required/>
                    <label>
                        Salary
                    </label>
                    <input type='number' onChange={salaryChangeHandler} value={input.salary} />
                    <div className='actions'>
                    <Button type='submit'>Add a new Employee</Button>
                    </div>            
                </form>             
            </Card>
       </div>
    );
}

export default NewEmployeeInput;