import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { Grid, Card, CardHeader, Dialog, Button, Slide, CardActions, IconButton, CardMedia, CardContent, Typography } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import config from "../../config";
import {deletePhoto} from "../../store/actions/photosActions";

const useStyles = makeStyles({
  card: {
    height: "100%",
    width: "100%"
  },
  appBar: {
    position: 'relative',
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const PhotoItem = props => {
  let cardImage;
  if (props.image) {
    cardImage = config.apiUrl + "/uploads/" + props.image;
  }

  const classes = useStyles();

  const dispatch = useDispatch();

  const user = useSelector(state => state.users.user);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const deletePhotoHandler = (idPhoto, idAuthor) => {
    dispatch(deletePhoto(idPhoto, idAuthor));
  };


  return (
    <Grid item>
      <Card className={classes.card}>
        <CardHeader title={props.title} />
        <CardContent>
            <CardActions>
                <IconButton onClick={handleClickOpen}>
                    <CardMedia
                    height="100"
                    image={cardImage}
                    component="img"
                    />
                </IconButton>
            </CardActions>
            {props.username ?
                <CardActions>
                    <IconButton component={Link} to={"/authors/" + props.userId}>
                        <Typography variant="h6">
                            by: {props.username}
                        </Typography>
                    </IconButton>
                </CardActions>
                :null
            }
            {user!==null && user.user._id===props.userId && props.username===undefined ?
                <Button onClick={()=> deletePhotoHandler(props.id, props.userId)} color="secondary">
                    Delete
                </Button>
                :null
            }
        </CardContent>
      </Card>

      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <CardMedia
        height="100%"
        image={cardImage}
        component="img"
        />
        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
        </IconButton>
      </Dialog>
    </Grid>
  );
};

PhotoItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  username: PropTypes.string.isRequired
};

export default PhotoItem;