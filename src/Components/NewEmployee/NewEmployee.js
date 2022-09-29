import NewEmployeeInput from '../NewEmployee/NewEmployeeInput';


const NewEmployee = (props) => {


    const saveEmployeeDetails = (employeeData) =>{
        console.log(employeeData);
        const newEmployeeData = {...employeeData,
            id:(Math.random().toString()),
        }
        props.onSaveEmployeeData(newEmployeeData);
    }
    return (
        <NewEmployeeInput  onFormSubmitHandler={saveEmployeeDetails}/>
    );
}

export default NewEmployee;