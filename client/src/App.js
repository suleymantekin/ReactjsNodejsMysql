import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import thunk from 'redux-thunk';

import Navbar from './components/Navbar';
import List from './components/List';
import ListItem from './components/ListItem';
import AddForm from './components/AddForm';
import studentReducer from './store/reducers/reducer_students'

import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

class App extends Component {


  render() {
    const store = createStore(combineReducers({
      students: studentReducer
    }),
      applyMiddleware(thunk));
    return (
      <Provider store={store}>
        <div >
          <CssBaseline />
          <Navbar />
          <Switch>
            <Route exact path='/Students' component={List} />
            <Route exact path='/Students/add' component={AddForm} />
            <Route exact path='/Students/:id' component={ListItem} />
          </Switch>
        </div >
      </Provider>
    );
  }
}

export default App;
