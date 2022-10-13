import Button from '../../UI/Button';
import Card from '../../UI/Card';
import ErrorModal from '../../Components/ErrorModal';

import { useState } from 'react';

import './NewEmployeeInput.css'


const NewEmployeeInput = (props) =>{

    const [errorStatus,setErrorStatus] = useState(false);
    const [errorMessage,setErrorMessage] = useState('');
    const [input,setInput] = useState({
        name:'',
        salary:''
    });

    const formSubmitHandler = (event) =>{
        event.preventDefault();
        if(input.name.length<=0 && input.salary.length<=0){
            setErrorMessage('Name and Salary is required!');         
            setErrorStatus(true);
        }
        else if(input.name.length<=0){
            setErrorMessage('Name is required!');
            setErrorStatus(true);
        }
        else if(input.salary.length<=0){
            setErrorMessage('salary is required!');
            setErrorStatus(true);
        }
        else{          
           const employeeData = {...input};
           setInput({
               ...input,
               name:'',
               salary:'',
           });
           props.onFormSubmitHandler(employeeData);
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
    
    const errorModalCloseHandler = () =>{
        setErrorStatus(false);
    }

    return(
       <div className='form-container'>
        {/* <ErrorModal className='error' message='Name and Salary is Required'></ErrorModal> */}
            {errorStatus ? <ErrorModal className='error' onClose={errorModalCloseHandler} message={errorMessage}></ErrorModal>:null}
            <Card>
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
       </div>
    );
}

export default NewEmployeeInput;