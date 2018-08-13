import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Navbar = (props) => (
    <AppBar position="static" color="primary">
        <Toolbar>
            <Typography variant="title" color="inherit">
                University System
          </Typography>
        </Toolbar>
    </AppBar>
)

export default Navbar;