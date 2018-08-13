import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import './App.css';

const styles = theme => ({
  root: {
    width: '100%',
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
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Birthday</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.students.map(student => {
              return (
                <TableRow key={student.id}>
                  <TableCell component="th" scope="row">
                    {student.idStudent}
                  </TableCell>
                  <TableCell >{student.firstName}</TableCell>
                  <TableCell >{student.lastName}</TableCell>
                  <TableCell >{student.birthday}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>

    );
  }
}

export default withStyles(styles)(App);
