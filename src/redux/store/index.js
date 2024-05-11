import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import favouritesReduce from "../reducers/favourites";
import songsReducer from "../reducers/songs";
import queryUser from "../reducers/query";
import songSelectedReducer from "../reducers/selectedsong";
import songsPlayedReduce from "../reducers/songsPlayed";

const rootReducer = combineReducers({
  favorites: favouritesReduce,
  songs: songsReducer,
  query: queryUser,
  selectedsong: songSelectedReducer,
  songplayed: songsPlayedReduce,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
