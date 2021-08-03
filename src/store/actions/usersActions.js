import axios from '../../axios-exam12';
import {push} from 'connected-react-router';
import {CREATE_USER_SUCCESS, 
    CREATE_USER_FAILURE, 
    LOGIN_USER_FAILURE, 
    LOGIN_USER_SUCCESS,
    LOGOUT_USER,
    FETCH_USERS_SUCCESS,
    FETCH_CURRENT_AUTHOR_SUCCESS,} from '../actionTypes';

const createUserSuccess = () => {
  return {type: CREATE_USER_SUCCESS};
};

const createUserFailure = error => {
  return {type: CREATE_USER_FAILURE, error};
};

export const createUser = userData => {
    return async dispatch => {
        try {
          await axios.post('/users', userData);
          dispatch(createUserSuccess());
          dispatch(push('/'));
        } catch (error) {
            if (error.response && error.response.data) {
                dispatch(createUserFailure(error.response.data));
            } else {
                dispatch(createUserFailure(error));
            }
        }
    };
    
};

const loginUserSuccess = user => {
    return {type: LOGIN_USER_SUCCESS, user};
};
const loginUserFailure = error => {
    return {type: LOGIN_USER_FAILURE, error};
};

export const loginUser = userData => {
    return async dispatch => {
        try {
            const response = await axios.post("/users/sessions", userData);
            dispatch(loginUserSuccess(response.data));
            dispatch(push("/"));
        } catch(error) {
            dispatch(loginUserFailure(error));
        }
    };
};

export const logoutUser = () => {
    return async dispatch => {
      await axios.delete("/users/sessions");
      dispatch({type: LOGOUT_USER});
      dispatch(push("/login"));
    };
  };

const fetchUsersSuccess = value => {
    return{type: FETCH_USERS_SUCCESS, value}
};

export const fetchUsers =() => {
    return async dispatch => {
        const response = await axios.get("/users");
        dispatch(fetchUsersSuccess(response.data))
    };
};

const fetchCurrentAuthorSuccess = value => {
    return {type: FETCH_CURRENT_AUTHOR_SUCCESS, value}
};

export const fetchCurrentAuthor =(id) => {
    return async dispatch => {
        try {
            const response = await axios.get(`/users/${id}`);
            dispatch(fetchCurrentAuthorSuccess(response.data))
        } catch(e) {
            console.log(e)
        }
    }
}