import React, { Component } from 'react'
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchStudents } from '../store/actions/actions_students'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
    root: {
        width: '80%',
        margin: '2% 10%',
        overflowX: 'auto',
    },
    paper: {
        maxWidth: '80%',
    },
});

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: []
        }
    }

    componentDidMount() {
        this.props.fetchStudents();
    }
    onStudentClick = (id) => {
        console.log(id);
        this.props.history.push(`/students/${id}`);
    }

    render() {
        const { classes } = this.props;
        let render = '';
        if (this.props.loading)
            render = <div>Loading</div>
        else {
            render = _.map(this.props.students, (student) => {
                const { idStudent, firstName, lastName, birthday } = student;
                return (
                    <TableRow key={idStudent} onClick={() => this.onStudentClick(idStudent)}>
                        <TableCell component="th" scope="row">
                            {idStudent}
                        </TableCell>
                        <TableCell >{firstName}</TableCell>
                        <TableCell >{lastName}</TableCell>
                        <TableCell >{birthday}</TableCell>
                    </TableRow>
                )
            })
        }
        console.log(render)
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
                        {render}
                    </TableBody>
                </Table>
            </Paper >
        );

    }
};

function mapStateToProps(state) {
    return {
        students: state.students.students,
        loading: state.students.loading
    };
}
function mapDistpatchToProps(dispatch) {
    return ({
        fetchStudents: () => { dispatch(fetchStudents()) }
    })
}
export default connect(mapStateToProps, mapDistpatchToProps)(withStyles(styles)(List));
