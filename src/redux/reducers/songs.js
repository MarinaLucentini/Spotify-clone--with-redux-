import {
  GET_SONGS,
  GET_SONGS_EMINEM,
  GET_SONGS_KATY,
  GET_SONGS_QUEEN,
} from "../actions";

const initialState = {
  content: [],
  queen: [],
  eminem: [],
  katyPerry: [],
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

    default:
      return state;
  }
};

export default songsReducer;
