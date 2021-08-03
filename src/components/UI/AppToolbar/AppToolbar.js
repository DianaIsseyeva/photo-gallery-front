import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import {AppBar, Grid, Toolbar, Typography} from "@material-ui/core";
import UserMenu from "./Menus/UserMenu";
import AnonymousMenu from "./Menus/AnonymousMenu";

const useStyles = makeStyles(theme => {
    return {
        mainLink: {
            color: "inherit",
            textDecoration: "none",
            "&:hover": {
                color: "#ccc"
            }
        },
        staticToolbar: {
            marginBottom: theme.spacing(2)
        }
    };
});

const AppToolbar = () => {

    const classes = useStyles();
    const user = useSelector(state => state.users.user);

    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <Grid container justify="space-between" alignItems="center">
                        <Typography variant="h5">
                            <Link className={classes.mainLink} to="/">
                                PHOTO GALLERY
                            </Link>
                        </Typography>
                        <Grid item>
                            {
                                user ? <UserMenu user={user} /> : <AnonymousMenu />
                            }
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Toolbar className={classes.staticToolbar}/>
        </>
    );
};

export default AppToolbar;