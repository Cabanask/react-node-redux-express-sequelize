import React from 'react';
import Home from '../components/home';
import fetch from "isomorphic-fetch";
import {BASE_URL} from '../constants/ApiEndPoint';
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


export function getAllDynamicsRoutes() {
  return async (dispatch) => {
    dispatch({
      type: GET_ALL_DYNAMICS_ROUTE_START,
      payload: {
      },
    });
    try {
      
      let url = BASE_URL + '/api/dynamics-router/all';
      const response = await fetch(url, {
        method: 'GET',
      });
      const data = await response.json();
      if (!response.ok) {
        dispatch({
          type: GET_ALL_DYNAMICS_ROUTE_ERROR,
          payload: {
            data,
          },
        });
      } else {
        dispatch({
          type: GET_ALL_DYNAMICS_ROUTE_SUCESS,
          payload: {
            data,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: GET_ALL_DYNAMICS_ROUTE_ERROR,
        payload: {
          error,
        },
      });
      return false;
    } 
    return true;
  };
}

export function addDynamicsRoute(objRoute) {
  return async (dispatch) => {
    dispatch({
      type: ADD_DYNAMICS_ROUTE_START,
      payload: {
      },
    });
    try {
      let jsonPost = JSON.stringify(objRoute)
      let url = BASE_URL + '/api/dynamics-router/add';
      const response = await fetch(url, {
        method: 'POST',
        headers:{Accept: 'application/json', 'Content-Type': 'application/json',  },
        body:jsonPost,
      });
      const data = await response.json();
      if (!response.ok) {
        dispatch({
          type: ADD_DYNAMICS_ROUTE_ERROR,
          payload: {
            data,
          },
        });
      } else {
        dispatch({
          type: ADD_DYNAMICS_ROUTE_SUCESS,
          payload: {
            data,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: ADD_DYNAMICS_ROUTE_ERROR,
        payload: {
          error,
        },
      });
      return false;
    } 
    return true;
  };
}

export function deleteDynamicsRouteById(id) {
  return async (dispatch) => {
    dispatch({
      type: DELETE_DYNAMICS_ROUTE_BYID_START,
      payload: {
      },
    });
    try {
      
      let url = BASE_URL + '/api/dynamics-router/'+ String(id);
      const response = await fetch(url, {
        method: 'GET',
      });
      const data = await response.json();
      if (!response.ok) {
        dispatch({
          type: DELETE_DYNAMICS_ROUTE_BYID_ERROR,
          payload: {
            data,
          },
        });
      } else {
        dispatch({
          type: DELETE_DYNAMICS_ROUTE_BYID_SUCESS,
          payload: {
            data,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: DELETE_DYNAMICS_ROUTE_BYID_ERROR,
        payload: {
          error,
        },
      });
      return false;
    } 
    return true;
  };
}

