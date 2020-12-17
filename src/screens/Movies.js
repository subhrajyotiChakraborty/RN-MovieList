import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  ActivityIndicator,
} from "react-native";

import Feather from "react-native-vector-icons/Feather";

import List from "../components/List";
import { movieList } from "../data/dummyMovieListData";
import { useMovies } from "../hooks/useMovies";

const MoviesScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const { movies, totalMovies, showLoader, endReached } = useMovies(
    search || "Jurassic",
    page
  );

  console.log("movie data check =>", movies.length);
  // console.log("totalMovies =>", totalMovies);
  console.log("length check =>", movies.length);

  const handleRefresh = () => {
    // handle pull to refresh
    setPage(1);
    setSearch("");
    setIsRefreshing(true);
  };

  const handleLoadMore = () => {
    // handle scroll to load item
    if (totalMovies > 10 && !endReached) {
      setPage(page + 1);
    }
  };

  const renderListFooter = () => {
    return showLoader ? (
      <ActivityIndicator
        style={styles.loaderStyle}
        size="large"
        color="black"
      />
    ) : null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchInputContainer}>
        <Feather size={18} name="search" style={styles.searchIconStyle} />
        <TextInput
          style={styles.searchInputStyle}
          placeholder="Search..."
          returnKeyType="done"
          value={search}
          onChangeText={(text) => {
            setSearch(text);
            setPage(1);
          }}
        />
      </View>
      {movies.length ? (
        <List
          navigation={navigation}
          data={movies}
          handleLoadMore={handleLoadMore}
          renderListFooter={renderListFooter}
        />
      ) : (
        <View style={{ flex: 1 }} />
      )}
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
  loaderStyle: {
    justifyContent: "center",
    alignContent: "center",
  },
});

export default MoviesScreen;
