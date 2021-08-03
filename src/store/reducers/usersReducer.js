import {CREATE_USER_FAILURE, 
    CREATE_USER_SUCCESS, 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAILURE,
    LOGOUT_USER,
    FETCH_USERS_SUCCESS,
    FETCH_CURRENT_AUTHOR_SUCCESS
} from "../actionTypes"
  
  const initialState = {
    registerError: null,
    loginError: null,
    user: null,
    users: null,
    currentAuthor: null
  };
  
  const usersReducer = (state = initialState, action) => {
    switch(action.type) {
      case CREATE_USER_FAILURE:
        return {...state, registerError: action.error};
      case CREATE_USER_SUCCESS:
          return {...state, registerError: null};
      case LOGIN_USER_SUCCESS:
          return {...state, user: action.user, loginError: null};
      case LOGIN_USER_FAILURE:
          return {...state, loginError: action.error};
      case LOGOUT_USER:
            return {...state, user: null};
      case FETCH_USERS_SUCCESS:
          return{...state, users: action.value};
      case FETCH_CURRENT_AUTHOR_SUCCESS:
          return{...state, currentAuthor: action.value};
      default:
        return state;
    };
  };
  
  export default usersReducer;
  