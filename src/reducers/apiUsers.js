import {
  GET_ALL_USERS_START,
  GET_ALL_USERS_SUCESS,
  GET_ALL_USERS_ERROR,
  ADD_USER_START,
  ADD_USER_SUCESS,
  ADD_USER_ERROR,
  DELETE_USER_BYID_START,
  DELETE_USER_BYID_SUCESS,
  DELETE_USER_BYID_ERROR,
} from '../constants/redux'

function getInitialState() {
  //les valeur initiales
  return {
    isFetching: false,
    users: null,
    isFetchingAllUsers:false,
    isFetchingAddUser:false,
    isFetchingDelUserById:false,
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

    case DELETE_USER_BYID_START: {
      return {
        ...state,
        isFetching: true,
        isFetchingDelUserById: true,
        error: false,
        errorMessage: null,
      };
    }

    case DELETE_USER_BYID_SUCESS: {
      const data = action.payload.data;
      
      return {
        ...state,
        isFetching: false,
        isFetchingDelUserById: false,
        response: data,
        error: false,
        errorMessage: null,
      };
    }

    case DELETE_USER_BYID_ERROR: {
      const data = action.payload.data;
      return {
        ...state,
        isFetching: false,
        isFetchingDelUserById: false,
        error: true,
        errorMessage: data,
      };
    }

    default: {
      return state;
    }
  }
}