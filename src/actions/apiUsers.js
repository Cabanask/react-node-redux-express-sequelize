import fetch from "isomorphic-fetch";
import { API_PUBLIC, API_PRIVATE, characters, baseUrl } from '../constants/ApiEndPoint';
import { convertDateToTimeStamp, creatHash } from '../utils/apiUtils';
import md5 from 'js-md5';
import {
  GET_ALL_USERS_START,
  GET_ALL_USERS_SUCESS,
  GET_ALL_USERS_ERROR,
  ADD_USER_START,
  ADD_USER_SUCESS,
  ADD_USER_ERROR,
} from '../constants/redux'



export function getAllUsers() {
  return async (dispatch) => {
    dispatch({
      type: GET_ALL_USERS_START,
      payload: {
      },
    });
    try {
      
      let url ='http://localhost:9000/api/users/all';
      const response = await fetch(url, {
        method: 'GET',
      });
      const data = await response.json();
      if (!response.ok) {
        dispatch({
          type: GET_ALL_USERS_ERROR,
          payload: {
            data,
          },
        });
      } else {
        dispatch({
          type: GET_ALL_USERS_SUCESS,
          payload: {
            data,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: GET_ALL_USERS_ERROR,
        payload: {
          error,
        },
      });
      return false;
    } 
    return true;
  };
}

export function addUser(objUser) {
  return async (dispatch) => {
    dispatch({
      type: ADD_USER_START,
      payload: {
      },
    });
    try {
      let jsonPost = JSON.stringify(objUser)
      let url ='http://localhost:9000/api/users/add';
      const response = await fetch(url, {
        method: 'POST',
        header:'application/json', 'Content-Type': 'application/json',
        body:jsonPost,
      });
      const data = await response.json();
      if (!response.ok) {
        dispatch({
          type: ADD_USER_ERROR,
          payload: {
            data,
          },
        });
      } else {
        dispatch({
          type: ADD_USER_SUCESS,
          payload: {
            data,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: ADD_USER_ERROR,
        payload: {
          error,
        },
      });
      return false;
    } 
    return true;
  };
}

