import React from "react";
import { StyleSheet, Text, View, TextInput, Platform } from "react-native";

import Feather from "react-native-vector-icons/Feather";

import List from "../components/List";
import { movieList } from "../data/dummyMovieListData";

const MoviesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.headerStyle}>Movies</Text> */}
      <View style={styles.searchInputContainer}>
        <Feather size={18} name="search" style={styles.searchIconStyle} />
        <TextInput
          style={styles.searchInputStyle}
          placeholder="Search..."
          returnKeyType="search"
        />
      </View>
      <List navigation={navigation} data={movieList} />
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
