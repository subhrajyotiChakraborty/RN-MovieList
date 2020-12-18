import React, { useReducer } from "react";

import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  movies: [],
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
