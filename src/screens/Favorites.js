import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import List from "../components/List";
import { movieList } from "../data/dummyMovieListData";
import { MovieContext } from "../reducers/movieReducer";

const FavoriteScreen = ({ navigation }) => {
  const { state } = useContext(MovieContext);
  return (
    <View style={styles.container}>
      {state.movies && state.movies.length ? (
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
