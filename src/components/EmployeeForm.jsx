import React from 'react';
import '../EmployeeForm.css';

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      title: '',
      department: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    console.log('New Employee Submitted:', this.state);

    if (this.props.onAddEmployee) {
      this.props.onAddEmployee(this.state);
    }

    this.setState({
      name: '',
      email: '',
      title: '',
      department: ''
    });
  };

  render() {
    const { name, email, title, department } = this.state;

    return (
      <div className="employee-form-container">
        <h1>New Employee Form</h1>
        <form className="employee-form" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Employee Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Enter employee name"
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Enter email address"
            required
          />

          <label htmlFor="title">Job Title</label>
          <input
            id="title"
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
            placeholder="Enter job title"
            required
          />

          <label htmlFor="department">Department</label>
          <input
            id="department"
            type="text"
            name="department"
            value={department}
            onChange={this.handleChange}
            placeholder="Enter department"
            required
          />

          <button type="submit">Add Employee</button>
        </form>
      </div>
    );
  }
}

export default EmployeeForm;