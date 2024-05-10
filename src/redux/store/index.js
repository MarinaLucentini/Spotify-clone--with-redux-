import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import favouritesReduce from "../reducers/favourites";
import songsReducer from "../reducers/songs";

const rootReducer = combineReducers({
  favorites: favouritesReduce,
  songs: songsReducer,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
