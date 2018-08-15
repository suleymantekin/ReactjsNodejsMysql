import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchStudent } from '../store/actions/actions_students'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    container: {
        width: '80%',
        margin: '2% 10%',
        overflowX: 'auto',
    },
    paper: {
        maxWidth: '80%',
    },
});

class ListItem extends Component {
    componentDidMount() {
        this.student = this.props.fetchStudent(this.props.match.params.id);
        console.log(this.student);
    }
    render() {
        console.log(this.props);
        const { classes } = this.props;
        let firstName = "", lastName = "", birthday = "";
        if (this.student) {
            firstName = this.props.student.firstName;
            lastName = this.props.student.lastName;
            birthday = this.props.student.birthday;
        }
        console.log(birthday);
        return (
            this.student ? <div>Loading</div> : (
                <form className={classes.container} autoComplete="off">
                    <TextField
                        id="firstName"
                        label="First Name"
                        className={classes.textField}
                        value={firstName}
                        margin="normal"
                    />
                    <TextField
                        id="lastName"
                        label="Last Name"
                        value={lastName}
                        className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        id="date"
                        label="Birthday"
                        type="date"
                        value={birthday.toString().slice(0, 10)}
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </form>
            )
        )
    }
}
function mapStateToProps(state) {
    return {
        students: state.students.students,
        loading: state.students.loading
    };
}

export default connect(mapStateToProps, { fetchStudent })(withStyles(styles)(ListItem));
