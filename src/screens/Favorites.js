import React from "react";
import { StyleSheet, Text, View } from "react-native";

import List from "../components/List";
import { movieList } from "../data/dummyMovieListData";

const FavoriteScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.headerStyle}>Favorites</Text> */}
      <List
        navigation={navigation}
        data={movieList.Search}
        handleLoadMore={() => {}}
        renderListFooter={null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerStyle: {
    fontSize: 20,
    marginHorizontal: 15,
    marginVertical: 10,
    fontWeight: "bold",
  },
});

export default FavoriteScreen;
