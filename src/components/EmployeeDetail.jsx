import React from "react";
import { useParams, Link } from "react-router-dom";

function EmployeeDetail({ employees }) {
  const { id } = useParams();

  const employee = employees.find(
    (emp) => String(emp.EmployeeId) === String(id)
  );

  if (!employee) {
    return (
      <div>
        <h2>Employee Not Found</h2>
        <Link to="/employees">Back to Employee List</Link>
      </div>
    );
  }

  return (
    <div className="employee-detail">
      <h1>Employee Details</h1>
      <p><strong>ID:</strong> {employee.EmployeeId}</p>
      <p><strong>Name:</strong> {employee.name}</p>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Phone:</strong> {employee.phone}</p>
      <p><strong>Department:</strong> {employee.department}</p>
      <p><strong>Position:</strong> {employee.position}</p>

      <Link to="/employees">Back to Employee List</Link>
    </div>
  );
}

export default EmployeeDetail;