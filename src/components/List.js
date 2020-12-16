import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

const windowWidth = Dimensions.get("window").width;

const List = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.data.Search}
        contentContainerStyle={styles.listContainer}
        numColumns={2}
        keyExtractor={(item) => item.imdbID}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              key={item.imdbID}
              onPress={() => {
                props.navigation.navigate("Details", {
                  imdbID: item.imdbID,
                  movieName: item.Title,
                });
              }}
            >
              <Image style={styles.cardStyle} source={{ uri: item.Poster }} />
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