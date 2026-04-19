import { useState } from "react";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "John Smith", position: "Manager", department: "HR" },
    { id: 2, name: "Sarah Jones", position: "Developer", department: "IT" },
  ]);

  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const [search, setSearch] = useState("");

  const addEmployee = () => {
    if (!name || !position || !department) return;

    const newEmployee = {
      id: Date.now(),
      name,
      position,
      department,
    };

    setEmployees([...employees, newEmployee]);
    setName("");
    setPosition("");
    setDepartment("");
  };

  return (
    <div className="container">
      <h1>Employee Management System</h1>

      <h2>Add Employee</h2>

      <input
        type="text"
        placeholder="Employee Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />

      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />

      <button onClick={addEmployee}>Add Employee</button>

      <h2>Search</h2>

      <input
        type="text"
        placeholder="Search by Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
          </tr>
        </thead>

        <tbody>
          {employees
            .filter((emp) =>
              emp.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((emp) => (
              <tr key={emp.id}>
                <td>{emp.name}</td>
                <td>{emp.position}</td>
                <td>{emp.department}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;