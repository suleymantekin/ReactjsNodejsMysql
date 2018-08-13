import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import List from './components/List';

import studentReducer from './components/store/reducers/reducer_student'
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
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

  MyList = (props) => {
    return (
      <List
        students={this.state.students}
      />
    );
  }

  render() {
    const store = createStore(combineReducers({
      student: studentReducer
    }));
    // const { classes } = this.props;
    return (
      <Provider store={store}>
        <div >
          <CssBaseline />
          <Navbar />
          <Switch>
            <Route exact path='/List' component={this.MyList} />
          </Switch>
        </div >
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
