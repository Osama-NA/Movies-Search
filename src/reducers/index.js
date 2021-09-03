import moviesReducer from "./moviesReducer";
import bookmarkedMoviesReducer from "./bookmarkedMoviesReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({ 
    movies: moviesReducer, 
    bookmarkedMovies: bookmarkedMoviesReducer
});

export default reducers;
