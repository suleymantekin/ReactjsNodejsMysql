import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchStudent } from '../store/actions/actions_students'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    container: {
        width: '100%',
        overflowX: 'auto',
    }, root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class ListItem extends Component {
    componentDidMount() {
        this.props.fetchStudent(this.props.match.params.id);
    }

    render() {
        const { classes } = this.props;
        let firstName = "", lastName = "", birthday = "";
        if (this.props.students[this.props.match.params.id]) {
            firstName = this.props.students[this.props.match.params.id].firstName;
            lastName = this.props.students[this.props.match.params.id].lastName;
            birthday = this.props.students[this.props.match.params.id].birthday;
        }
        return (
            this.props.loading ? <div>Loading</div> : (
                <div className={classes.root}>
                    <Grid container spacing={24}>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={10}>
                            <Paper className={classes.paper}>
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
                            </Paper>
                        </Grid>
                        <Grid item xs={1}></Grid>
                    </Grid>
                </div>
            )
        )
    }
}
function mapStateToProps(state) {
    console.log(state.students.students, "in mapp")
    return {
        students: state.students.students,
        loading: state.students.loading
    };
}

function mapDistpatchToProps(dispatch) {
    return ({
        fetchStudent: () => { dispatch(fetchStudent()) }
    })
}

export default connect(mapStateToProps, { fetchStudent })(withStyles(styles)(ListItem));
