import { PLAY_SONG } from "../actions";

const initialState = {
  content: "",
};
const songsPlayedReduce = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case PLAY_SONG:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};
export default songsPlayedReduce;
