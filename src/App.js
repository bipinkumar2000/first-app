import {useState} from 'react';

import Card from './UI/Card';
import Title from './UI/Title';
import EmployeeItems from './Components/EmployeeItems';
import NewEmployee from './Components/NewEmployee/NewEmployee';

import './App.css';




function App() {

  const [employees,setEmployees] = useState([
    {
      id:'E1101',
      name:'Kiran',
      salary:500000
    },
    {
      id:'E1102',
      name:'Jen',
      salary:100000
    },
    {
      id:'E1103',
      name:'Alfin',
      salary:400000
    },
    {
      id:'E1104',
      name:'Bipin',
      salary:250000
    }

  ]);

  const addEmployeeHandler = (employee) =>{
    setEmployees(prevEmployees=>{
      const updatedEmployees = [...prevEmployees];
      updatedEmployees.unshift(employee);
      return updatedEmployees;
    })
  }

  const EmployeeDeleteHandler = (employeeId) => {
    setEmployees(
      prevEmployees=>{
        const updatedEmployees = prevEmployees.filter(item=>
          item.id!==employeeId
        );
        return updatedEmployees;
      }
    )
  }



  return (
    <div className="App">
      <Title color='violet'>
        WelCome To Employee Data
      </Title>
      <NewEmployee onSaveEmployeeData={addEmployeeHandler}/>
     <Card>
      <EmployeeItems items={employees} onClickDelete={EmployeeDeleteHandler}></EmployeeItems>
     </Card>

      
    </div>
  );
}

export default App;
