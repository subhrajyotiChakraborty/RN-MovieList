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
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const windowWidth = Dimensions.get("window").width;

const Detail = ({ plot, poster, addRemoveHandler, ...props }) => {
  const awards = props.Awards && props.Awards.split(".");
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          style={styles.posterStyle}
          source={
            poster === "N/A"
              ? require("../../assets/poster_placeholder.jpg")
              : {
                  uri: poster,
                }
          }
        ></Image>
        <View style={styles.movieHeaderBannerStyle}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.movieNameStyle}>{props.Title}</Text>
            <Text style={styles.movieYearStyle}>({props.Year})</Text>
          </View>
          <Text style={styles.movieRunTimeStyle}>
            {props.Rated} | {props.Runtime} | {props.Genre}
          </Text>
        </View>
        <View style={styles.hrStyle} />
        <View style={styles.movieDetailsWrapper}>
          <Text style={styles.moviePlotStyle}>{plot}</Text>
          <TouchableOpacity
            style={styles.addRemoveFromFavBtnStyle}
            onPress={addRemoveHandler}
          >
            {props.isFav ? (
              <FontAwesome5
                style={styles.addRemoveFromFavBtnIcon}
                name="heart-broken"
                color="blue"
                size={15}
              />
            ) : (
              <Feather
                style={styles.addRemoveFromFavBtnIcon}
                name="heart"
                color="blue"
                size={15}
              />
            )}

            <Text style={styles.addRemoveFromFavBtnText}>
              {props.isFav ? "Remove from favorites" : "Add To Favorites"}{" "}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.hrStyle} />
        <View style={styles.movieRatingBlock}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <View style={{ flexDirection: "row" }}>
              <FontAwesome5
                style={{ alignSelf: "center" }}
                name="star"
                color="blue"
                size={15}
              />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ color: "blue" }}>{props.imdbRating}/10</Text>
                <Text style={{ color: "blue", marginTop: 5 }}>
                  {props.imdbVotes}
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.metascoreStyle}>
                <Text style={{ color: "blue", alignSelf: "center" }}>
                  {props.Metascore}
                </Text>
              </View>
              <Text style={styles.metascoreLabelStyle}>Metascore</Text>
            </View>
          </View>
        </View>
        <View style={styles.hrStyle} />
        <View style={styles.movieAwardsStyle}>
          <Text style={{ color: "#664700", fontSize: 20 }}>Awards</Text>
          <Text style={{ fontWeight: "bold", marginTop: 10 }}>
            {awards && awards[0]}
          </Text>
          <Text style={{ marginTop: 5 }}>
            {awards && awards[1] && awards[1].trim()}
          </Text>
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
  movieHeaderBannerStyle: {
    backgroundColor: "ghostwhite",
    padding: 15,
  },
  movieNameStyle: {
    fontSize: 20,
    fontWeight: "700",
  },
  movieYearStyle: {
    justifyContent: "center",
    paddingLeft: 4,
    fontSize: 15,
    color: "#999",
  },
  movieRunTimeStyle: {
    marginTop: 5,
  },
  hrStyle: {
    borderColor: "#ccc",
    borderWidth: 10,
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
  movieRatingBlock: {
    backgroundColor: "ghostwhite",
    padding: 15,
  },
  metascoreStyle: {
    padding: 10,
    borderColor: "blue",
    borderWidth: 1,
  },
  metascoreLabelStyle: {
    alignSelf: "center",
    color: "blue",
    marginLeft: 5,
  },
  movieAwardsStyle: {
    margin: 15,
  },
});

export default Detail;
