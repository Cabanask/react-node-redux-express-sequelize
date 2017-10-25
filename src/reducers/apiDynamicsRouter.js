import CrudUserController from '../components/CrudUser/CrudUserController';

import {

  GET_ALL_DYNAMICS_ROUTE_START,
  GET_ALL_DYNAMICS_ROUTE_SUCESS,
  GET_ALL_DYNAMICS_ROUTE_ERROR,
  ADD_DYNAMICS_ROUTE_START,
  ADD_DYNAMICS_ROUTE_SUCESS,
  ADD_DYNAMICS_ROUTE_ERROR,
  DELETE_DYNAMICS_ROUTE_BYID_START,
  DELETE_DYNAMICS_ROUTE_BYID_SUCESS,
  DELETE_DYNAMICS_ROUTE_BYID_ERROR,
} from '../constants/redux'

function getInitialState() {
  //les valeur initiales
  return {
    isFetching: false,
    isFetchingGetAllRoute:false,
    isFetchingAddRoute:false,
    isFetchingDelRoute:false,
    routes:[],
    routeAdded:{},
    routeDeleted:{},
    error: false,
    errorMessage: null,
    returnMessage: null,
  };
}

export default function apiDynamicsRouter(state = null, action) {
  if (state === null) {
    return getInitialState();
  }

  switch (action.type) {

    case GET_ALL_DYNAMICS_ROUTE_START: {
      return {
        ...state,
        isFetching: true,
        isFetchingGetAllRoute: true,
        error: false,
        errorMessage: null,
      };
    }

    case GET_ALL_DYNAMICS_ROUTE_SUCESS: {
      const data = action.payload.data;
      
      return {
        ...state,
        isFetching: false,
        isFetchingGetAllRoute: false,
        routes: data,
        error: false,
        errorMessage: null,
      };
    }

    case GET_ALL_DYNAMICS_ROUTE_ERROR: {
      const data = action.payload.data;
      return {
        ...state,
        isFetching: false,
        isFetchingGetAllRoute: false,
        error: true,
        errorMessage: data,
      };
    }


     case ADD_DYNAMICS_ROUTE_START: {
      return {
        ...state,
        isFetching: true,
        isFetchingAddRoute: true,
        error: false,
        errorMessage: null,
      };
    }

    case ADD_DYNAMICS_ROUTE_SUCESS: {
      const data = action.payload.data;
      
      return {
        ...state,
        isFetching: false,
        isFetchingAddRoute: false,
        routeAdded: data,
        error: false,
        errorMessage: null,
      };
    }

    case ADD_DYNAMICS_ROUTE_ERROR: {
      const data = action.payload.data;
      return {
        ...state,
        isFetching: false,
        isFetchingAddRoute: false,
        error: true,
        errorMessage: data,
      };
    }

    case DELETE_DYNAMICS_ROUTE_BYID_START: {
      return {
        ...state,
        isFetching: true,
        isFetchingDelRoute: true,
        error: false,
        errorMessage: null,
      };
    }

    case DELETE_DYNAMICS_ROUTE_BYID_SUCESS: {
      const data = action.payload.data;
      
      return {
        ...state,
        isFetching: false,
        isFetchingDelRoute: false,
        routeDeleted: data,
        error: false,
        errorMessage: null,
      };
    }

    case DELETE_DYNAMICS_ROUTE_BYID_ERROR: {
      const data = action.payload.data;
      return {
        ...state,
        isFetching: false,
        isFetchingDelRoute: false,
        error: true,
        errorMessage: data,
      };
    }


    default: {
      return state;
    }
  }
}