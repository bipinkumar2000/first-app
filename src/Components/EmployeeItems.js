import EmployeeList from './EmployeeList';
import './EmployeeItems.css';

const EmployeeItems = (props)=>{

    const ItemDeleteHandler = (employeeId) => {
        props.onClickDelete(employeeId);
    }

    return (
        <ul className='employye-items'>
           {props.items.map(item=><EmployeeList onClickItemDelete={ItemDeleteHandler}
           key={item.id}
           id={item.id}
           name={item.name}   
           salary={item.salary}/>) }
        </ul>
        
    );
}

export default EmployeeItems;