import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addStudent } from '../store/actions/actions_students'

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

    handleChange = ({ nativeEvent }) => {
        const { id, value } = nativeEvent.target;
        console.log(id, value)
        this.setState({
            [id]: value
        })
    };

    onAddHandler = () => {
        this.props.addStudent(this.state);
    }

    render() {
        console.log(this.state)
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
                                    onChange={(e) => this.handleChange(e)}
                                    value={firstName}
                                    margin="normal"
                                />
                                <TextField
                                    id="lastName"
                                    label="Last Name"
                                    value={lastName}
                                    className={classes.textField}
                                    onChange={(e) => this.handleChange(e)}
                                    margin="normal"
                                />
                                <TextField
                                    id="birthday"
                                    label="Birthday"
                                    type="date"
                                    value={birthday.toString().slice(0, 10)}
                                    className={classes.textField}
                                    onChange={(e) => this.handleChange(e)}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </form>
                        </Paper>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={this.onAddHandler} >
                    <SaveIcon className={classes.saveIcon} /> Save
                </Button>
            </div>

        )
    }
}

export default connect(null, { addStudent })(withStyles(styles)(AddForm));
