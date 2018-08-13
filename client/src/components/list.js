import React from 'react'

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
const List = (props) => {

    const { classes } = props;
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
                    {props.students.map(student => {
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
    )
};

export default List;