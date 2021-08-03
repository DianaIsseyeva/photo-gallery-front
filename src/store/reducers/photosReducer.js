import { FETCH_PHOTOS_SUCCESS, FETCH_CURRENT_AUTHOR_PHOTOS_SUCCESS, CREATE_PHOTO_SUCCESS } from '../actionTypes';

const initialState = {
  photos: [],
  currentPhoto: '',
  currentAuthorPhotos: []
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PHOTOS_SUCCESS:
      return {...state, photos: action.photos};
    case FETCH_CURRENT_AUTHOR_PHOTOS_SUCCESS:
      return{...state, currentAuthorPhotos: action.value}
    case CREATE_PHOTO_SUCCESS:
      return{...state}
    default:
    return state;
  }
};

export default reducer;