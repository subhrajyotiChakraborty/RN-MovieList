import React, { useLayoutEffect, useContext, useState } from "react";
import { Text, StyleSheet, ActivityIndicator } from "react-native";

import Detail from "../components/Detail";
import { useMovieDetails } from "../hooks/useMovieDetails";
import { MovieContext } from "../reducers/movieReducer";
import * as actions from "../actions";

const Details = ({ route, navigation }) => {
  useLayoutEffect(() => {
    const { movieName } = route.params;
    navigation.setOptions({
      title: movieName,
    });
  }, [navigation]);

  const { data, status, isFetched, error } = useMovieDetails(
    route.params.imdbID
  );

  const { dispatch } = useContext(MovieContext);
  const [isFav, setIsFav] = useState(route.params.isFav);
  const addOrRemoveFromFavListHandler = async () => {
    const { Poster, Title, Type, Year, imdbID } = data;
    if (isFav) {
      const deletedData = await actions.removeFromFavList(imdbID);
      dispatch(deletedData);
    } else {
      const savedData = await actions.addToFavList({
        Poster,
        Title,
        Type,
        Year,
        imdbID,
      });
      dispatch(savedData);
    }
    setIsFav(!isFav);
  };

  return (
    <>
      {isFetched ? (
        <Detail
          poster={data?.Poster}
          plot={data?.Plot}
          addRemoveHandler={addOrRemoveFromFavListHandler}
          isFav={isFav}
          {...data}
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
