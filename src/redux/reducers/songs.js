import {
  ERROR_MESSAGE,
  GET_SONGS,
  GET_SONGS_EMINEM,
  GET_SONGS_KATY,
  GET_SONGS_QUEEN,
  HAS_ERROR,
  IS_LOADING,
} from "../actions";

const initialState = {
  content: [],
  queen: [],
  eminem: [],
  katyPerry: [],
  isLoading: false,
  hasError: false,
  ErrorMessage: "",
};

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        content: action.payload,
      };
    case GET_SONGS_EMINEM:
      return {
        ...state,
        eminem: action.payload,
      };
    case GET_SONGS_QUEEN:
      return {
        ...state,
        queen: action.payload,
      };
    case GET_SONGS_KATY:
      return {
        ...state,
        katyPerry: action.payload,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case HAS_ERROR:
      return {
        ...state,
        isLoading: action.payload,
      };
    case ERROR_MESSAGE:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};

export default songsReducer;
