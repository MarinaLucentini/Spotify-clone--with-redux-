export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES =
  "REMOVE_FROM_FAVOURITES";
export const GET_SONGS = "GET_SONGS";
export const GET_SONGS_QUEEN = "GET_SONGS_QUEEN";
export const GET_SONGS_EMINEM = "GET_SONGS_EMINEM";
export const GET_SONGS_KATY = "GET_SONGS_KATY";
export const QUERY_USER = "QUERY_USER";

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
    try {
      let resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistname
      );
      if (resp.ok) {
        let fetchedSongs = await resp.json();
        const filteredSong = fetchedSongs.data.slice(0, 4);
        dispatch({
          type: GET_SONGS,
          payload: filteredSong,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const getsongsActionqueen = (artistname) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistname
      );
      if (resp.ok) {
        let fetchedSongs = await resp.json();
        const filteredSong = fetchedSongs.data.slice(0, 4);
        dispatch({
          type: GET_SONGS_QUEEN,
          payload: filteredSong,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const getsongsActionkaty = (artistname) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistname
      );
      if (resp.ok) {
        let fetchedSongs = await resp.json();
        const filteredSong = fetchedSongs.data.slice(0, 4);
        dispatch({
          type: GET_SONGS_KATY,
          payload: filteredSong,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const getsongsActioneminem = (artistname) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistname
      );
      if (resp.ok) {
        let fetchedSongs = await resp.json();
        const filteredSong = fetchedSongs.data.slice(0, 4);
        dispatch({
          type: GET_SONGS_EMINEM,
          payload: filteredSong,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
