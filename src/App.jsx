import React from 'react'
import EmployeeForm from './components/EmployeeForm'

function App() {
  const handleAddEmployee = (employeeData) => {
    console.log('Employee added in App:', employeeData)
  }

  return (
    <div>
      <EmployeeForm onAddEmployee={handleAddEmployee} />
    </div>
  )
}

export default App