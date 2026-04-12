import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function EmployeeForm({ addEmployee }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    EmployeeId: "",
    name: "",
    email: "",
    phone: "",
    department: "",
    position: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addEmployee(formData);

    setFormData({
      EmployeeId: "",
      name: "",
      email: "",
      phone: "",
      department: "",
      position: "",
    });

    navigate("/employees");
  };

  return (
    <div className="employee-form">
      <h1>Employee Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="EmployeeId"
          placeholder="Employee ID"
          value={formData.EmployeeId}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={formData.position}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default EmployeeForm;