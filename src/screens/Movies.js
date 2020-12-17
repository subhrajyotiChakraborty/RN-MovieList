import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Platform } from "react-native";

import Feather from "react-native-vector-icons/Feather";

import List from "../components/List";
import { movieList } from "../data/dummyMovieListData";
import { useMovies } from "../hooks/useMovies";

const MoviesScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  // console.log("search text =>", search);
  const { movies, totalMovies } = useMovies(search || "Jurassic");

  // console.log("movies =>", movies);
  console.log("totalMovies =>", totalMovies);

  return (
    <View style={styles.container}>
      <View style={styles.searchInputContainer}>
        <Feather size={18} name="search" style={styles.searchIconStyle} />
        <TextInput
          style={styles.searchInputStyle}
          placeholder="Search..."
          returnKeyType="done"
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
      </View>
      {movies.length ? <List navigation={navigation} data={movies} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  headerStyle: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 15,
    marginTop: 10,
  },
  searchInputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 10,
    borderColor: "#cccc",
    borderRadius: 5,
    backgroundColor: "#ddd",
    paddingVertical: Platform.OS === "ios" ? 8 : 4,
  },
  searchIconStyle: {
    alignSelf: "center",
    paddingHorizontal: 10,
  },
  searchInputStyle: {
    fontSize: 18,
    flex: 1,
  },
});

export default MoviesScreen;
