import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { Typography } from '@material-ui/core';
import PhotoForm from '../../components/PhotoForm/PhotoForm';
import { createPhoto } from "../../store/actions/photosActions";

const NewPhoto = () => {
  const user = useSelector(state => state.users.user);
  const userId = user.user._id;

  const dispatch = useDispatch();

  const formSubmitHandler = async (photo) => {
    await dispatch(createPhoto(photo, userId));
  };

  return (
    <>
      <Typography variant="h4">
        New Photo
      </Typography>
      <PhotoForm onSubmit={formSubmitHandler} />
    </>
  );
};

export default NewPhoto;