import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeDetail from "./components/EmployeeDetail";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem("employees");
    return savedEmployees ? JSON.parse(savedEmployees) : [];
  });

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (newEmployee) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
  };

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<EmployeeForm addEmployee={addEmployee} />} />
          <Route path="/employees" element={<EmployeeList employees={employees} />} />
          <Route path="/employees/:id" element={<EmployeeDetail employees={employees} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;