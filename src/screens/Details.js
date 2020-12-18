import React, { useLayoutEffect, useContext, useState } from "react";
import { Text, StyleSheet, ActivityIndicator } from "react-native";

import Detail from "../components/Detail";
import { movieDetails } from "../data/dummyMovieDetailsData";
import { useMovieDetails } from "../hooks/useMovieDetails";
import { MovieContext } from "../reducers/movieReducer";
import * as actionTypes from "../actions/actionTypes";

const Details = ({ route, navigation }) => {
  useLayoutEffect(() => {
    const { movieName } = route.params;
    navigation.setOptions({
      title: movieName,
    });
  }, [navigation]);

  const { details } = useMovieDetails(route.params.imdbID);

  const { dispatch } = useContext(MovieContext);
  const [isFav, setIsFav] = useState(route.params.isFav);

  const addOrRemoveFromFavListHandler = () => {
    const { Poster, Title, Type, Year, imdbID } = details;
    if (isFav) {
      console.log("remove call");
      dispatch({
        type: actionTypes.REMOVE_FROM_FAV_LIST,
        payload: imdbID,
      });
    } else {
      console.log("add call");
      dispatch({
        type: actionTypes.ADD_TO_FAV_LIST,
        payload: {
          Poster,
          Title,
          Type,
          Year,
          imdbID,
          isFav: true,
        },
      });
    }
    setIsFav(!isFav);
  };

  return (
    <>
      {details ? (
        <Detail
          poster={details.Poster}
          plot={details.Plot}
          addRemoveHandler={addOrRemoveFromFavListHandler}
          isFav={isFav}
          {...details}
        />
      ) : (
        <ActivityIndicator
          style={styles.loaderStyle}
          size="large"
          color="black"
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderStyle: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});

export default Details;
