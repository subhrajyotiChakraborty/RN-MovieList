import * as actionTypes from "./actionTypes";
import axios from "../axios";

export const addToFavList = async (movieData) => {
  try {
    const response = await axios.post("/movie", movieData);
    // console.log(response.data);
    return addToFavListSuccess(response.data);
  } catch {
    console.log("Error during save movie to fav list.");
    return addToFavListError("Error during save movie to fav list.");
  }
};

export const addToFavListSuccess = (movieData) => {
  return {
    type: actionTypes.ADD_TO_FAV_LIST,
    payload: movieData,
  };
};

export const addToFavListError = (errorMessage) => {
  return {
    type: actionTypes.ADD_TO_FAV_LIST_ERROR,
    payload: errorMessage,
  };
};

export const removeFromFavList = async (imdbID) => {
  try {
    const response = await axios.delete(`/movie/${imdbID}`);
    console.log(response.data);
    return removeFromFavListSuccess(imdbID);
  } catch {
    console.log("Error during removing movie from fav list.");
    return removeFromFavListError("Error during removing movie from fav list.");
  }
};

export const removeFromFavListSuccess = (imdbID) => {
  return {
    type: actionTypes.REMOVE_FROM_FAV_LIST,
    payload: imdbID,
  };
};

export const removeFromFavListError = (errorMessage) => {
  return {
    type: actionTypes.REMOVE_FROM_FAV_LIST_ERROR,
    payload: errorMessage,
  };
};

export const fetchFavMovies = async () => {
  try {
    const response = await axios.get("/favorites");
    return fetchFavMoviesSuccess(response.data.movies);
  } catch {
    console.log("Unable to fetch fav movies.");
    return fetchFavMoviesError("Unable to fetch fav movies.");
  }
};

export const fetchFavMoviesSuccess = (movies) => {
  return {
    type: actionTypes.FETCH_FAV_MOVIES,
    payload: movies,
  };
};

export const fetchFavMoviesError = (errorMessage) => {
  return {
    type: actionTypes.FETCH_FAV_MOVIES_ERROR,
    payload: errorMessage,
  };
};
