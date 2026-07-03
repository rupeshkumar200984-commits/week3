import { useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeTable from "./components/EmployeeTable";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  let filteredData =
    departmentFilter === "All"
      ? employees
      : employees.filter(
          (emp) => emp.department === departmentFilter
        );

  filteredData.sort((a, b) =>
    sortOrder === "asc"
      ? a.salary - b.salary
      : b.salary - a.salary
  );

  return (
    <div className="App">
      <h1>Employee Management System</h1>

      <EmployeeForm addEmployee={addEmployee} />

      <br />

      <select
        onChange={(e) => setDepartmentFilter(e.target.value)}
      >
        <option value="All">All Departments</option>
        <option value="HR">HR</option>
        <option value="IT">IT</option>
        <option value="Finance">Finance</option>
      </select>

      <button onClick={() => setSortOrder("asc")}>
        Salary Asc
      </button>

      <button onClick={() => setSortOrder("desc")}>
        Salary Desc
      </button>

      <EmployeeTable
        employees={filteredData}
        deleteEmployee={deleteEmployee}
      />
    </div>
  );
}

export default App;