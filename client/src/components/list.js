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
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    root: {
        width: '80%',
        margin: '2% 10%',
        overflowX: 'auto',
    },
    paper: {
        maxWidth: '80%',
    },
    tableRow: {
        cursor: 'pointer'
    },
    button: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    }
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
        this.props.history.push(`/students/${id}`);
    }

    onAddHandler = () => {
        this.props.history.push('/students/add');
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
                    <TableRow className={classes.tableRow} hover key={idStudent} onClick={() => this.onStudentClick(idStudent)}>
                        <TableCell component="th" scope="row">
                            {idStudent}
                        </TableCell>
                        <TableCell >{firstName}</TableCell>
                        <TableCell >{lastName}</TableCell>
                        <TableCell >{birthday.toString().slice(0, 10)}</TableCell>
                    </TableRow>
                )
            })
        }

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
                <Button variant="fab" color="primary" aria-label="Add"
                    className={classes.button} onClick={this.onAddHandler} >
                    <AddIcon className={classes.addIcon} />
                </Button>
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
