import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import favouritesReduce from "../reducers/favourites";
import songsReducer from "../reducers/songs";
import queryUser from "../reducers/query";

const rootReducer = combineReducers({
  favorites: favouritesReduce,
  songs: songsReducer,
  query: queryUser,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
