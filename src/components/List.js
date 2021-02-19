import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const List = (props) => {
  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState(true);

  return (
    <View style={styles.container}>
      <FlatList
        data={props.data}
        contentContainerStyle={styles.listContainer}
        numColumns={2}
        onMomentumScrollBegin={() => {
          setOnEndReachedCalledDuringMomentum(false);
        }}
        onEndReached={() => {
          if (!onEndReachedCalledDuringMomentum) {
            props.handleLoadMore();
            setOnEndReachedCalledDuringMomentum(true);
          }
        }}
        onEndReachedThreshold={0.5}
        ListFooterComponent={props.renderListFooter}
        keyExtractor={(item) => item.imdbID}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              key={item.imdbID}
              onPress={() => {
                props.navigation.navigate("Details", {
                  imdbID: item.imdbID,
                  movieName: item.Title,
                  isFav: item.isFav || false,
                });
              }}
            >
              {item.Poster === "N/A" ? (
                <Image
                  style={styles.cardStyle}
                  source={require("../../assets/poster_placeholder.jpg")}
                />
              ) : (
                <Image style={styles.cardStyle} source={{ uri: item.Poster }} />
              )}
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: windowHeight,
  },
  listContainer: {
    padding: 10,
    paddingTop: 0,
  },
  cardStyle: {
    width: (windowWidth - 30) / 2 - 5,
    height: 250,
    resizeMode: "cover",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    flex: 1,
    margin: 5,
  },
});

export default List;
