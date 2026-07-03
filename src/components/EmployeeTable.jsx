import EmployeeRow from "./EmployeeRow";

function EmployeeTable({ employees, deleteEmployee }) {
  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Photo</th>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>Department</th>
          <th>Salary</th>
          <th>Married</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((emp) => (
          <EmployeeRow
            key={emp.id}
            employee={emp}
            deleteEmployee={deleteEmployee}
          />
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;