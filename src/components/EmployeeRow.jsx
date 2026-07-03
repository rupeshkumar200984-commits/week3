function EmployeeRow({ employee, deleteEmployee }) {
  return (
    <tr>
      <td>
        {employee.photo && (
          <img
            src={employee.photo}
            alt="employee"
            width="50"
          />
        )}
      </td>

      <td>{employee.name}</td>
      <td>{employee.age}</td>
      <td>{employee.address}</td>
      <td>{employee.department}</td>
      <td>{employee.salary}</td>
      <td>
        {employee.married ? "Yes" : "No"}
      </td>

      <td>
        <button
          onClick={() =>
            deleteEmployee(employee.id)
          }
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default EmployeeRow;