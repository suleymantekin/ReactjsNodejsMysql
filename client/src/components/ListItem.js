import React from 'react';
import TextField from '@material-ui/core/TextField';

const ListItem = (props) => {
    const { classes } = props;
    return (
        <form className={classes.container} autoComplete="off">
            <TextField
                id="name"
                label="Name"
                className={classes.textField}
                value="Suleuamg"
                margin="normal"
            />
            <TextField
                id="uncontrolled"
                label="Uncontrolled"
                defaultValue="foo"
                className={classes.textField}
                margin="normal"
            />
            <TextField
                id="date"
                label="Birthday"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </form>
    )
}

export default ListItem;