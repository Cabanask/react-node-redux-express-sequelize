import CrudUserController from '../components/CrudUser/CrudUserController';

import {
  GET_ALL_PRODUCT_START,
  GET_ALL_PRODUCT_SUCESS,
  GET_ALL_PRODUCT_ERROR,
  ADD_PRODUCT_START,
  ADD_PRODUCT_SUCESS,
  ADD_PRODUCT_ERROR,
  UPDATE_PRODUCT_BYID_START,
  UPDATE_PRODUCT_BYID_SUCESS,
  UPDATE_PRODUCT_BYID_ERROR,
  DELETE_PRODUCT_BYID_START,
  DELETE_PRODUCT_BYID_SUCESS,
  DELETE_PRODUCT_BYID_ERROR,
} from '../constants/redux'

function getInitialState() {
  //les valeur initiales
  return {
    isFetching: false,
    products: null,
    isFetchingAllProduct:false,
    isFetchingAddProduct:false,
    isFetchingDelProductById:false,
    isFetchingUpdateProduct:false,
    error: false,
    errorMessage: null,
    returnMessage: null,
  };
}

export default function apiProduct(state = null, action) {
  if (state === null) {
    return getInitialState();
  }

  switch (action.type) {

    case GET_ALL_PRODUCT_START: {
      return {
        ...state,
        isFetching: true,
        isFetchingAllProduct: true,
        error: false,
        errorMessage: null,
      };
    }

    case GET_ALL_PRODUCT_SUCESS: {
      const data = action.payload.data;
      
      return {
        ...state,
        isFetching: false,
        isFetchingAllProduct: false,
        products: data,
        error: false,
        errorMessage: null,
      };
    }

    case GET_ALL_PRODUCT_ERROR: {
      const data = action.payload.data;
      return {
        ...state,
        isFetching: false,
        isFetchingAllProduct: false,
        error: true,
        errorMessage: data,
      };
    }

    case ADD_PRODUCT_START: {
      return {
        ...state,
        isFetching: true,
        isFetchingAddProduct: true,
        error: false,
        errorMessage: null,
      };
    }

    case ADD_PRODUCT_SUCESS: {
      const data = action.payload.data;
      
      return {
        ...state,
        isFetching: false,
        isFetchingAddProduct: false,
        response: data,
        error: false,
        errorMessage: null,
      };
    }

    case ADD_PRODUCT_ERROR: {
      const data = action.payload.data;
      return {
        ...state,
        isFetching: false,
        isFetchingAddProduct: false,
        error: true,
        errorMessage: data,
      };
    }

     case UPDATE_PRODUCT_BYID_START: {
      return {
        ...state,
        isFetching: true,
        isFetchingUpdateProduct: true,
        error: false,
        errorMessage: null,
      };
    }

    case UPDATE_PRODUCT_BYID_SUCESS: {
      const data = action.payload.data;
      
      return {
        ...state,
        isFetching: false,
        isFetchingUpdateProduct: false,
        response: data,
        error: false,
        errorMessage: null,
      };
    }

    case UPDATE_PRODUCT_BYID_ERROR: {
      const data = action.payload.data;
      return {
        ...state,
        isFetching: false,
        isFetchingUpdateProduct: false,
        error: true,
        errorMessage: data,
      };
    }

    case DELETE_PRODUCT_BYID_START: {
      return {
        ...state,
        isFetching: true,
        isFetchingDelProductById: true,
        error: false,
        errorMessage: null,
      };
    }

    case DELETE_PRODUCT_BYID_SUCESS: {
      const data = action.payload.data;
      
      return {
        ...state,
        isFetching: false,
        isFetchingDelProductById: false,
        response: data,
        error: false,
        errorMessage: null,
      };
    }

    case DELETE_PRODUCT_BYID_ERROR: {
      const data = action.payload.data;
      return {
        ...state,
        isFetching: false,
        isFetchingDelProductById: false,
        error: true,
        errorMessage: data,
      };
    }

   
    default: {
      return state;
    }
  }
}