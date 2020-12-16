import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";

import Feather from "react-native-vector-icons/Feather";

const windowWidth = Dimensions.get("window").width;

const Detail = ({ plot, poster }) => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          style={styles.posterStyle}
          source={{
            uri: poster,
          }}
        ></Image>
        <View style={styles.movieDetailsWrapper}>
          <Text style={styles.moviePlotStyle}>{plot}</Text>

          <TouchableOpacity style={styles.addRemoveFromFavBtnStyle}>
            <Feather
              style={styles.addRemoveFromFavBtnIcon}
              name="heart"
              color="blue"
              size={15}
            />
            <Text style={styles.addRemoveFromFavBtnText}>Add To Favorites</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  posterStyle: {
    width: windowWidth,
    height: 450,
    resizeMode: "stretch",
  },
  movieDetailsWrapper: {
    margin: 15,
  },
  moviePlotStyle: {
    fontSize: 18,
  },
  addRemoveFromFavBtnStyle: {
    flexDirection: "row",
    width: "auto",
    marginVertical: 10,
    alignSelf: "flex-start",
  },
  addRemoveFromFavBtnIcon: {
    alignSelf: "center",
  },
  addRemoveFromFavBtnText: {
    color: "blue",
    marginLeft: 5,
  },
});

export default Detail;
