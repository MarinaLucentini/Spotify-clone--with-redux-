export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES =
  "REMOVE_FROM_FAVOURITES";
export const GET_SONGS = "GET_SONGS";
export const GET_SONGS_QUEEN = "GET_SONGS_QUEEN";
export const GET_SONGS_EMINEM = "GET_SONGS_EMINEM";
export const GET_SONGS_KATY = "GET_SONGS_KATY";
export const QUERY_USER = "QUERY_USER";
export const SELECT_SONG = "SELECT_SONG";
export const IS_LOADING = "IS_LOADING";
export const HAS_ERROR = "HAS_ERROR";
export const ERROR_MESSAGE = "ERROR_MESSAGE";
export const PLAY_SONG = "PLAY_SONG";
export const PAUSE_SONG = "PAUSE_SONG";
export const addTofavourites = (data) => ({
  type: ADD_TO_FAVOURITES,
  payload: data,
});
export const removeFromfavourites = (data) => ({
  type: REMOVE_FROM_FAVOURITES,
  payload: data,
});
export const queryAction = (inputValue) => ({
  type: QUERY_USER,
  payload: inputValue,
});

export const getsongsAction = (artistname) => {
  return async (dispatch) => {
    dispatch({
      type: IS_LOADING,
      payload: true,
    });
    try {
      let resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistname
      );
      if (resp.ok) {
        dispatch({
          type: IS_LOADING,
          payload: false,
        });
        let fetchedSongs = await resp.json();
        const fetchedData = fetchedSongs.data;
        const filteredSong = [];

        const numSongs = fetchedData.length;
        let randomIndex = 0;

        for (let i = 0; i < 4; i++) {
          randomIndex = Math.floor(
            Math.random() * numSongs
          );
          filteredSong.push(fetchedData[randomIndex]);
        }
        // così ho reso randomiche le 4 canzoni
        if (artistname === "eminem") {
          dispatch({
            type: GET_SONGS_EMINEM,
            payload: filteredSong,
          });
        } else if (artistname === "queen") {
          dispatch({
            type: GET_SONGS_QUEEN,
            payload: filteredSong,
          });
        } else if (artistname === "katy perry") {
          dispatch({
            type: GET_SONGS_KATY,
            payload: filteredSong,
          });
        } else {
          dispatch({
            type: GET_SONGS,
            payload: filteredSong,
          });
        }
      } else {
        dispatch({
          type: IS_LOADING,
          payload: false,
        });
        dispatch({
          type: HAS_ERROR,
          payload: true,
        });
        console.log("error");
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: ERROR_MESSAGE,
        payload: error.message,
      });
    }
  };
};
export const playSong = (songUrl) => {
  return (dispatch) => {
    const audio = new Audio(songUrl);
    audio.play();
    dispatch({ type: PLAY_SONG, payload: songUrl });
  };
};
