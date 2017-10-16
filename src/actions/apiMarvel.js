import fetch from "isomorphic-fetch";
import { API_PUBLIC, API_PRIVATE, characters, baseUrl } from '../constants/ApiEndPoint';
import { convertDateToTimeStamp, creatHash } from '../utils/apiUtils';
import md5 from 'js-md5';
import {
  GET_MARVEL_PERSO_START,
  GET_MARVEL_PERSO_SUCESS,
  GET_MARVEL_PERSO_ERROR,
  SET_MARVEL_PERSO_DETAILS,
  GET_TODOLIST_NODE_START,
  GET_TODOLIST_NODE_SUCESS,
  GET_TODOLIST_NODE_ERROR,
  DEL_TODOLIST_NODE_START,
  DEL_TODOLIST_NODE_SUCESS,
  DEL_TODOLIST_NODE_ERROR,
} from '../constants/redux'

export function setDataPersonnage(data) {
  return (dispatch) => {
    dispatch({
      type: SET_MARVEL_PERSO_DETAILS,
      payload: {
        data,
      },
    });
  }
}

export function getTodoListNode() {
  return async (dispatch) => {
    dispatch({
      type: GET_TODOLIST_NODE_START,
      payload: {
      },
    });
    try {
      
      let url ='http://localhost:9000/todo';
      const response = await fetch(url, {
        method: 'GET',
      });
      const data = await response.json();
      if (!response.ok) {
        dispatch({
          type: GET_TODOLIST_NODE_ERROR,
          payload: {
            data,
          },
        });
      } else {
        dispatch({
          type: GET_TODOLIST_NODE_SUCESS,
          payload: {
            data,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: GET_TODOLIST_NODE_ERROR,
        payload: {
          error,
        },
      });
      return false;
    } 
    return true;
  };
}
export function deleteTodoListNodeById(id) {
  return async (dispatch) => {
    dispatch({
      type: DEL_TODOLIST_NODE_START,
      payload: {
      },
    });
    try {
      console.log("id REDUX",id)
      let url ='http://localhost:9000/todo/supprimer/' + id ;
      const response = await fetch(url, {
        method: 'GET',
      });
      const data = await response.json();
      if (!response.ok) {
        dispatch({
          type: DEL_TODOLIST_NODE_ERROR,
          payload: {
            data,
          },
        });
      } else {
        dispatch({
          type: DEL_TODOLIST_NODE_SUCESS,
          payload: {
            data,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: DEL_TODOLIST_NODE_ERROR,
        payload: {
          error,
        },
      });
      return false;
    } 
    return true;
  };
}
export function getPersoMarvel() {
  return async (dispatch) => {
    dispatch({
      type: GET_MARVEL_PERSO_START,
      payload: {
      },
    });
    try {
      let timeStamp = convertDateToTimeStamp(new Date())
      let paramTs = '?ts=' + timeStamp + "&";
      let apikey = 'apikey=' + API_PUBLIC + "&";
      let hash = 'hash=' + creatHash(timeStamp);
      let url = baseUrl + characters + encodeURI(paramTs + apikey + hash);
      const response = await fetch(url, {
        method: 'GET',
      });
      const data = await response.json();
      if (!response.ok) {
        dispatch({
          type: GET_MARVEL_PERSO_ERROR,
          payload: {
            data,
          },
        });
      } else {
        dispatch({
          type: GET_MARVEL_PERSO_SUCESS,
          payload: {
            data,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: GET_MARVEL_PERSO_ERROR,
        payload: {
          error,
        },
      });
      return false;
    } 
    return true;
  };
}
