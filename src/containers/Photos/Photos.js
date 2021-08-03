import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { Grid } from "@material-ui/core";
import { fetchPhotos } from '../../store/actions/photosActions';
import PhotoItem from '../../components/PhotoItem/PhotoItem';

const Photos = () => {
  const dispatch = useDispatch();
  const photos = useSelector(state => state.photos.photos);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  return (
    <Grid container direction="column" spacing={2}>
      <Grid
        item
        container
        direction="row"
        spacing={2}
      >
        {photos.map(photo => {
          return <PhotoItem
            id={photo._id}
            title={photo.title}
            username={photo.username}
            userId={photo.user}
            image={photo.image}
            key={photo._id}
          />
        })}
      </Grid>
    </Grid>
  );
};

export default Photos;