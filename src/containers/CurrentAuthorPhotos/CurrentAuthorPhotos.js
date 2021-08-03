import { Grid, Typography, Button } from "@material-ui/core";
import {useSelector, useDispatch} from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';
import {Link} from "react-router-dom";
import {fetchCurrentAuthorPhotos} from '../../store/actions/photosActions';
import {fetchCurrentAuthor} from '../../store/actions/usersActions';
import PhotoItem from '../../components/PhotoItem/PhotoItem';

const CurrentAuthorPhotos =(props) =>{
    const dispatch = useDispatch();
    const currentAuthor = useSelector(state => state.users.currentAuthor);
    const photos = useSelector(state => state.photos.currentAuthorPhotos);
    const user = useSelector(state=> state.users.user);

    useEffect(() => {
      dispatch(fetchCurrentAuthorPhotos(props.match.params.id));
    }, [dispatch, props.match.params.id]);

    useEffect(() => {
        dispatch(fetchCurrentAuthor(props.match.params.id));
      }, [dispatch, props.match.params.id]);

    const useStyles = makeStyles({
        card: {
          height: "100%",
        },
        root: {
          marginBottom: 20,
        },
        media: {
          height: 150,
          width: 150
        }
      });

      const classes = useStyles();

    return (
        <Grid item className = {classes.root}>
          {currentAuthor ?
          <>
                <Grid container justify="space-between" alignItems="center">
                    <Typography variant="h6">
                    {currentAuthor.username}'s gallery
                    </Typography>
                    {user!==null && user.user._id===currentAuthor._id ?
                        <Button variant = "contained" color="primary" component={Link} to="/photos/new">
                            Add photo
                        </Button>
                    :null
                    }
                </Grid>
                 <Grid
                    container
                    direction="row"
                    spacing={2}
                >
                    {photos.map(photo => {
                    return <PhotoItem
                        id={photo._id}
                        title={photo.title}
                        image={photo.image}
                        key={photo._id}
                        userId={photo.user}
                    />
                    })}
                </Grid>
            </>
            : null
              }
        </Grid>
    )
};

export default CurrentAuthorPhotos;