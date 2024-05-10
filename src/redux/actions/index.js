export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES =
  "REMOVE_FROM_FAVOURITES";
export const GET_SONGS = "GET_SONGS";

export const getsongsAction = () => {
  return async (dispatch, getState) => {
    console.log("GET STATE", getState());
    try {
      let resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"
      );
      if (resp.ok) {
        let fetchedSongs = await resp.json();
        dispatch({
          type: GET_SONGS,
          payload: fetchedSongs.data,
        });
        //   let fetchedBooks = await resp.json();
        //   dispatch({ type: GET_BOOKS, payload: fetchedBooks });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
