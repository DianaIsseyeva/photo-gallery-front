import React from "react";
import {useDispatch} from "react-redux";
import {Button, Typography, Grid} from "@material-ui/core";
import {Link} from "react-router-dom";

import {logoutUser} from "../../../../store/actions/usersActions";

const UserMenu = ({user}) => {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logoutUser());
    };

    return (
        <Grid container justify="space-between" alignItems="center">
            <Typography
                color="inherit"
            >
                Hello, {user.user.username}
            </Typography>
            <Button component={Link} to="/photos/new">
                Add photo
            </Button>
            <Button onClick={logout}>Logout</Button>
        </Grid>
    );
};

export default UserMenu;