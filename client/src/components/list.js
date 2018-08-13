import React, { Component } from 'react'
import { connect } from 'react-redux';
import { startFetchStudents } from '../store/actions/actions_students'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ListItem from './ListItem';

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
        this.props.startFetchStudents();
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
                        {this.props.students.map(student => {
                            return (
                                <TableRow key={student.idStudent}>
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
        )
    }
};

function mapStateToProps(state) {
    return { students: state.students };
}
function mapDistpatchToProps(dispatch) {
    return ({
        startFetchStudents: () => { dispatch(startFetchStudents()) }
    })
}
export default connect(mapStateToProps, mapDistpatchToProps)(withStyles(styles)(List));
