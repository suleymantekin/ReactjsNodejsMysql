import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import List from './components/List';
import './App.css';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  }
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
        this.setState({ students: students.response })
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <div >
        <CssBaseline />
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="title" color="inherit">
              University System
          </Typography>
          </Toolbar>
        </AppBar>
        <List students={this.state.students} />
      </div >
    );
  }
}

export default withStyles(styles)(App);
