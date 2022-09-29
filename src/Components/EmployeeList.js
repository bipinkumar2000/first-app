import './EmployeeList.css';


const EmployeeList = (props) =>{

    const onClickListHandler = (event) => {
        event.preventDefault();
        props.onClickItemDelete(props.id);
    }

    return (
    <li className='employee-list' onClick={onClickListHandler}>
        <p className='employee-name'>{props.name}</p>
        <div className='employee-salary'>${props.salary}</div>
    </li>
);
}

export default EmployeeList;