import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        marginTop: theme.spacing.unit * 2,
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    button: {
        margin: theme.spacing.unit,
        position: 'absolute',
        right: theme.spacing.unit,
    },
    saveIcon: {
        marginRight: theme.spacing.unit,
    },
});

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            birthday: ''
        }
    }

    componentDidMount() {

    }

    render() {
        const { classes } = this.props;
        const { firstName, lastName, birthday } = this.state;
        return (
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
                <Button variant="contained" color="primary" className={classes.button}>
                    <SaveIcon className={classes.saveIcon} /> Save
                </Button>
            </div>

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
    })
}

export default connect(mapStateToProps, null)(withStyles(styles)(AddForm));
