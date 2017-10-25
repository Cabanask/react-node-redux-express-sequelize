import React from 'react';
import Home from '../components/home';
import fetch from "isomorphic-fetch";
import {BASE_URL} from '../constants/ApiEndPoint';
import { convertDateToTimeStamp, creatHash } from '../utils/apiUtils';
import md5 from 'js-md5';
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


export function getAllProducts() {
  return async (dispatch) => {
    dispatch({
      type: GET_ALL_PRODUCT_START,
      payload: {
      },
    });
    try {
      
      let url = BASE_URL + '/api/product/all';
      const response = await fetch(url, {
        method: 'GET',
      });
      const data = await response.json();
      if (!response.ok) {
        dispatch({
          type: GET_ALL_PRODUCT_ERROR,
          payload: {
            data,
          },
        });
      } else {
        dispatch({
          type: GET_ALL_PRODUCT_SUCESS,
          payload: {
            data,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: GET_ALL_PRODUCT_ERROR,
        payload: {
          error,
        },
      });
      return false;
    } 
    return true;
  };
}

export function addProduct(objProduct) {
  return async (dispatch) => {
    dispatch({
      type: ADD_PRODUCT_START,
      payload: {
      },
    });
    try {
      let jsonPost = JSON.stringify(objProduct)
      let url = BASE_URL + '/api/product/add';
      const response = await fetch(url, {
        method: 'POST',
        headers:{Accept: 'application/json', 'Content-Type': 'application/json',  },
        body:jsonPost,
      });
      const data = await response.json();
      if (!response.ok) {
        dispatch({
          type: ADD_PRODUCT_ERROR,
          payload: {
            data,
          },
        });
      } else {
        dispatch({
          type: ADD_PRODUCT_SUCESS,
          payload: {
            data,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: ADD_PRODUCT_ERROR,
        payload: {
          error,
        },
      });
      return false;
    } 
    return true;
  };
}


export function updateProductById(objProduct,id) {
  return async (dispatch) => {
    dispatch({
      type: UPDATE_PRODUCT_BYID_START,
      payload: {
      },
    });
    try {
      let jsonPost = JSON.stringify(objProduct)
      let url = BASE_URL + '/api/product/' + id;
      const response = await fetch(url, {
        method: 'PUT',
        headers:{Accept: 'application/json', 'Content-Type': 'application/json',  },
        body:jsonPost,
      });
      const data = await response.json();
      if (!response.ok) {
        dispatch({
          type: UPDATE_PRODUCT_BYID_ERROR,
          payload: {
            data,
          },
        });
      } else {
        dispatch({
          type: UPDATE_PRODUCT_BYID_SUCESS,
          payload: {
            data,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: UPDATE_PRODUCT_BYID_ERROR,
        payload: {
          error,
        },
      });
      return false;
    } 
    return true;
  };
}


export function deleteProductById(id) {
  return async (dispatch) => {
    dispatch({
      type: DELETE_PRODUCT_BYID_START,
      payload: {
      },
    });
    try {
      
      let url = BASE_URL + '/api/product/'+ String(id);
      const response = await fetch(url, {
        method: 'GET',
      });
      const data = await response.json();
      if (!response.ok) {
        dispatch({
          type: DELETE_PRODUCT_BYID_ERROR,
          payload: {
            data,
          },
        });
      } else {
        dispatch({
          type: DELETE_PRODUCT_BYID_SUCESS,
          payload: {
            data,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: DELETE_PRODUCT_BYID_ERROR,
        payload: {
          error,
        },
      });
      return false;
    } 
    return true;
  };
}