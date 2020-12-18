import React, { useReducer } from "react";

import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  movies: [],
  error: false,
  errorMessage: "",
};

const movieReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_FAV_LIST:
      const index = state.movies.findIndex(
        (movie) => movie.imdbID === action.payload.imdbID
      );
      if (index === -1) {
        return {
          ...state,
          movies: [...state.movies, action.payload],
          error: false,
          errorMessage: "",
        };
      }
      return state;

    case actionTypes.REMOVE_FROM_FAV_LIST:
      const updatedList = state.movies.filter(
        (movie) => movie.imdbID !== action.payload
      );
      return {
        ...state,
        movies: [...updatedList],
        error: false,
        errorMessage: "",
      };

    case actionTypes.FETCH_FAV_MOVIES:
      return {
        ...state,
        movies: [...action.payload],
        error: false,
        errorMessage: "",
      };

    case actionTypes.REMOVE_FROM_FAV_LIST_ERROR:
    case actionTypes.ADD_TO_FAV_LIST_ERROR:
    case actionTypes.FETCH_FAV_MOVIES_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.payload,
      };

    default:
      console.log("default");
      return state;
  }
};

export const MovieContext = React.createContext(INITIAL_STATE);

export const MovieProvider = (props) => {
  const [state, dispatch] = useReducer(movieReducer, INITIAL_STATE);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {props.children}
    </MovieContext.Provider>
  );
};
