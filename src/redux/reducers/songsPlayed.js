import { PAUSE_SONG, PLAY_SONG } from "../actions";

const initialState = {
  content: "",
  isPlaying: false,
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
        isPlaying: true,
      };
    case PAUSE_SONG:
      return {
        ...state,
        isPlaying: false,
      };

    default:
      return state;
  }
};
export default songsPlayedReduce;
