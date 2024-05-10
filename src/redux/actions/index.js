export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES =
  "REMOVE_FROM_FAVOURITES";
export const GET_SONGS = "GET_SONGS";

export const addTofavourites = (data) => ({
  type: ADD_TO_FAVOURITES,
  payload: data,
});
export const removeFromfavourites = (data) => ({
  type: REMOVE_FROM_FAVOURITES,
  payload: data,
});

export const getsongsAction = () => {
  return async (dispatch) => {
    try {
      let resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"
      );
      if (resp.ok) {
        let fetchedSongs = await resp.json();
        const filteredSong = fetchedSongs.data.slice(0, 5);
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
