import React, { useLayoutEffect } from "react";
import { Text, StyleSheet } from "react-native";

import Detail from "../components/Detail";
import { movieDetails } from "../data/dummyMovieDetailsData";

const Details = ({ route, navigation }) => {
  useLayoutEffect(() => {
    const { imdbID, movieName } = route.params;
    navigation.setOptions({
      title: movieName,
    });
  }, [navigation]);

  return <Detail poster={movieDetails.Poster} plot={movieDetails.Plot} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Details;
