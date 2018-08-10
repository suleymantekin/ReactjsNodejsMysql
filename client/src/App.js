import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actors: []
    }
  }
  componentDidMount() {
    const BASE_URL = 'http://localhost:4000'
    fetch(`${BASE_URL}/api/actors`)
      .then(res => res.json())
      .then(actors => {
        console.log(actors)
        this.setState({ actors: actors.response })
      });
  }
  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.actors.map(actor =>
          <div key={actor.actor_id}>{actor.first_name} {actor.last_name} </div>
        )}
      </div>
    );
  }
}

export default App;
