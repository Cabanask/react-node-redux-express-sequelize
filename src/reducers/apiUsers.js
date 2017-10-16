import {
  GET_ALL_USERS_START,
  GET_ALL_USERS_SUCESS,
  GET_ALL_USERS_ERROR,
  ADD_USER_START,
  ADD_USER_SUCESS,
  ADD_USER_ERROR,
} from '../constants/redux'

function getInitialState() {
  //les valeur initiales
  return {
    isFetching: false,
    users: null,
    isFetchingAllUsers:false,
    isFetchingAddUser:false,
    error: false,
    errorMessage: null,
    returnMessage: null,
  };
}

export default function apiUsers(state = null, action) {
  if (state === null) {
    return getInitialState();
  }

  switch (action.type) {

    case GET_ALL_USERS_START: {
      return {
        ...state,
        isFetching: true,
        isFetchingAllUsers: true,
        error: false,
        errorMessage: null,
      };
    }

    case GET_ALL_USERS_SUCESS: {
      const data = action.payload.data;
      
      return {
        ...state,
        isFetching: false,
        isFetchingAllUsers: false,
        users: data,
        error: false,
        errorMessage: null,
      };
    }

    case GET_ALL_USERS_ERROR: {
      const data = action.payload.data;
      return {
        ...state,
        isFetching: false,
        isFetchingAllUsers: false,
        error: true,
        errorMessage: data,
      };
    }

    case ADD_USER_START: {
      return {
        ...state,
        isFetching: true,
        isFetchingAddUser: true,
        error: false,
        errorMessage: null,
      };
    }

    case ADD_USER_SUCESS: {
      const data = action.payload.data;
      
      return {
        ...state,
        isFetching: false,
        isFetchingAddUser: false,
        response: data,
        error: false,
        errorMessage: null,
      };
    }

    case ADD_USER_ERROR: {
      const data = action.payload.data;
      return {
        ...state,
        isFetching: false,
        isFetchingAddUser: false,
        error: true,
        errorMessage: data,
      };
    }

    default: {
      return state;
    }
  }
}