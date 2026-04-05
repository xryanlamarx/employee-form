import React, { useState } from 'react'
import EmployeeForm from './components/EmployeeForm'

function App() {
  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem('employees')
    return savedEmployees ? JSON.parse(savedEmployees) : []
  })

  const handleAddEmployee = (employeeData) => {
    const updatedEmployees = [...employees, employeeData]
    setEmployees(updatedEmployees)
    localStorage.setItem('employees', JSON.stringify(updatedEmployees))
  }

  return (
    <div>
      <EmployeeForm onAddEmployee={handleAddEmployee} />

      <h2>Employee List</h2>
      {employees.length === 0 ? (
        <p>No employees added yet.</p>
      ) : (
        <ul>
          {employees.map((employee, index) => (
            <li key={index}>
              {JSON.stringify(employee)}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App