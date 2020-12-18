import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

import List from "../components/List";
import { MovieContext } from "../reducers/movieReducer";
import * as actions from "../actions";

const FavoriteScreen = ({ navigation }) => {
  const [favListLoader, setFavListLoader] = useState(true);
  const { state, dispatch } = useContext(MovieContext);

  useEffect(() => {
    async function fetchFavMovies() {
      const favMoviesData = await actions.fetchFavMovies();
      setFavListLoader(false);
      dispatch(favMoviesData);
    }
    fetchFavMovies();
  }, []);

  const renderList = () => {
    return state.movies && state.movies.length ? (
      <List
        navigation={navigation}
        data={state.movies}
        handleLoadMore={() => {}}
        renderListFooter={null}
      />
    ) : (
      <View style={styles.emptyListTextWrapper}>
        <Text style={styles.emptyListTextStyle}>
          No movies added to your favorite list yet...
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {favListLoader ? (
        <ActivityIndicator
          size="large"
          color="black"
          style={{ justifyContent: "center", alignContent: "center", flex: 1 }}
        />
      ) : (
        renderList()
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyListTextWrapper: {
    flex: 1,
    justifyContent: "center",
  },
  emptyListTextStyle: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 18,
  },
});

export default FavoriteScreen;
