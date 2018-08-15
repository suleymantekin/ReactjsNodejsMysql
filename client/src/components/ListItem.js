import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import _ from 'lodash';

import { fetchStudent } from '../store/actions/actions_students'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
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
    deleteIcon: {
        marginRight: '120px',
    }
});

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            birthday: ''
        }
    }
    componentDidMount() {
        this.props.fetchStudent(this.props.match.params.id);


    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.students[this.props.match.params.id] && _.isEqual(this.state, prevState)) {
            this.setState({
                firstName: this.props.students[this.props.match.params.id].firstName,
                lastName: this.props.students[this.props.match.params.id].lastName,
                birthday: this.props.students[this.props.match.params.id].birthday
            })
        }
    }


    handleChange = ({ nativeEvent }) => {
        const { id, value } = nativeEvent.target;
        console.log(id, value)
        this.setState({
            [id]: value
        })
    };

    onSaveHandler = () => {
        alert("a;sdfs")
    }

    render() {
        console.log(this.state)

        const { classes } = this.props;
        const { firstName, lastName, birthday } = this.state;
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
                                        onChange={(e) => this.handleChange(e)}
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
                    <Button variant="contained" color="secondary" className={classNames(classes.deleteIcon, classes.button)}>
                        Delete
                        <DeleteIcon />
                    </Button>
                    <Button variant="contained" color="primary" className={classes.button} onClick={this.onSaveHandler}>
                        <SaveIcon className={classes.saveIcon} /> Save
                     </Button>
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
