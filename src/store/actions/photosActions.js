import axios from "../../axios-exam12";
import {push} from 'connected-react-router';

import { 
    CREATE_PHOTO_SUCCESS,
    FETCH_PHOTOS_SUCCESS, 
    FETCH_CURRENT_AUTHOR_PHOTOS_SUCCESS,
    DELETE_PHOTO_SUCCESS
} from '../actionTypes';

const fetchPhotosSuccess = photos => {
  return {type: FETCH_PHOTOS_SUCCESS, photos};
};

export const fetchPhotos = () => {
  return async dispatch => {
    try {
      const response = await axios.get("/photos");
      dispatch(fetchPhotosSuccess(response.data));
    } catch(e) {
      console.log(e);
    }
  };
};



const fetchCurrentAuthorPhotosSuccess = value => {
  return{type: FETCH_CURRENT_AUTHOR_PHOTOS_SUCCESS, value};
};

export const fetchCurrentAuthorPhotos = (id) => {
    return async dispatch => {
    try {
      const response = await axios.get(`/photos/${id}`);
      dispatch(fetchCurrentAuthorPhotosSuccess(response.data));
    } catch(e) {
      console.log(e);
    }
  };
};

const deletePhotoSuccess=()=> {
    return{type: DELETE_PHOTO_SUCCESS}
}

export const deletePhoto =(idPhoto, idAuthor)=> {
    return async dispatch => {
        try {
            await axios.delete(`/photos/${idPhoto}`);
            dispatch(deletePhotoSuccess());
            dispatch(push('/'));
        } catch(e) {
            console.log(e);
        }
    };
};

const createPhotoSuccess = () => {
    return {type: CREATE_PHOTO_SUCCESS};
  };
  
  export const createPhoto = (photo) => {
    return async dispatch => {
      try {
        await axios.post("/photos", photo);
        dispatch(createPhotoSuccess());
        dispatch(push('/'));
      } catch(e) {
        console.log(e);
      }
    };
  };
