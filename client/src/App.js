import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import List from './components/List';

import studentReducer from './store/reducers/reducer_students'
import CssBaseline from '@material-ui/core/CssBaseline';
import thunk from 'redux-thunk';
import './App.css';

class App extends Component {


  render() {
    const store = createStore(combineReducers({
      students: studentReducer
    }),
      applyMiddleware(thunk));
    // const { classes } = this.props;
    return (
      <Provider store={store}>
        <div >
          <CssBaseline />
          <Navbar />
          <Switch>
            <Route exact path='/List' component={List} />
          </Switch>
        </div >
      </Provider>
    );
  }
}

export default App;
