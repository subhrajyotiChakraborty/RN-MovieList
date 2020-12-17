import React, { useLayoutEffect } from "react";
import { Text, StyleSheet, ActivityIndicator } from "react-native";

import Detail from "../components/Detail";
import { movieDetails } from "../data/dummyMovieDetailsData";
import { useMovieDetails } from "../hooks/useMovieDetails";

const Details = ({ route, navigation }) => {
  useLayoutEffect(() => {
    const { movieName } = route.params;
    navigation.setOptions({
      title: movieName,
    });
  }, [navigation]);

  const { details } = useMovieDetails(route.params.imdbID);

  return (
    <>
      {details ? (
        <Detail poster={details.Poster} plot={details.Plot} />
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
