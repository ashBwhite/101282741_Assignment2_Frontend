import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddEmployee from './addEmployee';
import EmployeeList from './employeeList';
import EmployeeDetail from './employeeDetail';
import EmployeeUpdate from './employeeUpdate';

function App() {
  return (
    <div>
        <h3 id="title">Employee Management App</h3>
        <BrowserRouter>
        
        <Switch>
          <Route path="/"><EmployeeList/></Route>
          <Route path="/add-employee/_add"><AddEmployee/></Route>
          <Route path="/view-employee/:Id"><EmployeeDetail/></Route>
          <Route path="/add-employee/:Id"><EmployeeUpdate/></Route>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;