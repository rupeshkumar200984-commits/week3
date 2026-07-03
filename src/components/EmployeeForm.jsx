import { useState } from "react";

function EmployeeForm({ addEmployee }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
    department: "HR",
    salary: "",
    married: false,
    photo: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageURL = URL.createObjectURL(file);

      setFormData({
        ...formData,
        photo: imageURL
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addEmployee({
      ...formData,
      id: Date.now()
    });

    setFormData({
      name: "",
      age: "",
      address: "",
      department: "HR",
      salary: "",
      married: false,
      photo: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
      />

      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
      />

      <select
        name="department"
        value={formData.department}
        onChange={handleChange}
      >
        <option value="HR">HR</option>
        <option value="IT">IT</option>
        <option value="Finance">Finance</option>
      </select>

      <input
        type="number"
        name="salary"
        placeholder="Salary"
        value={formData.salary}
        onChange={handleChange}
      />

      <label>
        Married
        <input
          type="checkbox"
          name="married"
          checked={formData.married}
          onChange={handleChange}
        />
      </label>

      <input
        type="file"
        accept="image/*"
        onChange={handleImage}
      />

      {formData.photo && (
        <img
          src={formData.photo}
          alt="preview"
          width="100"
        />
      )}

      <br />

      <button type="submit">
        Add Employee
      </button>
    </form>
  );
}

export default EmployeeForm;