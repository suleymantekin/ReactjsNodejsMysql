import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    }
  }
  componentDidMount() {
    const BASE_URL = 'http://localhost:4000'
    fetch(`${BASE_URL}/api/students`)
      .then(res => res.json())
      .then(students => {
        console.log(students);
        this.setState({ students: students.response })
      });
  }
  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.students.map(student =>
          <div key={student.idStudent}>{student.firstName} {student.lastName} </div>
        )}
      </div>
    );
  }
}

export default App;
