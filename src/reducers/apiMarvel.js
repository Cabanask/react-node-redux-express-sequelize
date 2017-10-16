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

function getInitialState() {
  //les valeur initiales
  return {
    isFetching: false,
    personageMarvel: null,
    todolist:null,
    isFetchingDelTodoList:false,
    isFetchingPersonageMarvel: false,
    isFetchingGetTodoList: false,
    error: false,
    errorMessage: null,
    returnMessage: null,
  };
}

export default function apiMarvel(state = null, action) {
  if (state === null) {
    return getInitialState();
  }

  switch (action.type) {

    case GET_MARVEL_PERSO_START: {
      return {
        ...state,
        isFetching: true,
        isFetchingPersonageMarvel: true,
        error: false,
        errorMessage: null,
      };
    }

    case GET_MARVEL_PERSO_SUCESS: {
      const data = action.payload.data;
      
      return {
        ...state,
        isFetching: false,
        isFetchingPersonageMarvel: false,
        personageMarvel: data,
        error: false,
        errorMessage: null,
      };
    }

    case GET_MARVEL_PERSO_ERROR: {
      const data = action.payload.data;
      return {
        ...state,
        isFetching: false,
        isFetchingPersonageMarvel: false,
        error: true,
        errorMessage: data,
      };
    }

    case GET_TODOLIST_NODE_START: {
      return {
        ...state,
        isFetching: true,
        isFetchingGetTodoList: true,
        error: false,
        errorMessage: null,
      };
    }

    case GET_TODOLIST_NODE_SUCESS: {
      const data = action.payload.data;
      
      return {
        ...state,
        isFetching: false,
        isFetchingGetTodoList: false,
        todolist: data,
        error: false,
        errorMessage: null,
      };
    }

    case GET_TODOLIST_NODE_ERROR: {
      const data = action.payload.data;
      return {
        ...state,
        isFetching: false,
        isFetchingGetTodoList: false,
        error: true,
        errorMessage: data,
      };
    }

    case DEL_TODOLIST_NODE_START: {
      return {
        ...state,
        isFetching: true,
        isFetchingDelTodoList: true,
        error: false,
        errorMessage: null,
      };
    }

    case DEL_TODOLIST_NODE_SUCESS: {
      const data = action.payload.data;
      
      return {
        ...state,
        isFetching: false,
        isFetchingDelTodoList: false,
        todolist: data,
        error: false,
        errorMessage: null,
      };
    }

    case DEL_TODOLIST_NODE_ERROR: {
      const data = action.payload.data;
      return {
        ...state,
        isFetching: false,
        isFetchingDelTodoList: false,
        error: true,
        errorMessage: data,
      };
    }

    case SET_MARVEL_PERSO_DETAILS: {
      const data = action.payload.data;
      return {
        ...state,
        personnageData:data,
        error: true,
        errorMessage: data,
      };
    }



    default: {
      return state;
    }
  }
}