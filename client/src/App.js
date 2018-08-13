import React, { Component } from 'react';
import List from './components/List';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '80%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 800,
  },
});
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
    const { classes } = this.props;
    return (
      <div className="App">
        <CssBaseline />
        <List students={this.state.students} classes={classes} />
      </div >

    );
  }
}

export default withStyles(styles)(App);
