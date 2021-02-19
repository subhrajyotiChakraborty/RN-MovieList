import "react-native-gesture-handler";
import { StatusBar, View, Platform } from "react-native";
import Constants from "expo-constants";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from "react-native-vector-icons/Feather";

import FavoriteScreen from "./src/screens/Favorites";
import MoviesScreen from "./src/screens/Movies";
import DetailsScreen from "./src/screens/Details";
import { MovieProvider } from "./src/reducers/movieReducer";

const Tab = createBottomTabNavigator();
const MovieStack = createStackNavigator();
const FavStack = createStackNavigator();

const queryClient = new QueryClient();

const MovieStackScreen = () => {
  return (
    <MovieStack.Navigator>
      <MovieStack.Screen
        name="Movies"
        component={MoviesScreen}
      ></MovieStack.Screen>
      <MovieStack.Screen
        name="Details"
        component={DetailsScreen}
      ></MovieStack.Screen>
    </MovieStack.Navigator>
  );
};

const FavStackScreen = () => {
  return (
    <FavStack.Navigator>
      <FavStack.Screen
        name="Favorites"
        component={FavoriteScreen}
      ></FavStack.Screen>
      <MovieStack.Screen
        name="Details"
        component={DetailsScreen}
      ></MovieStack.Screen>
    </FavStack.Navigator>
  );
};

export default function App() {
  const renderTabBarIcon = (focused, color, size, name) => {
    return <Feather name={name} color={color} size={size} />;
  };
  return (
    <QueryClientProvider client={queryClient}>
      <MovieProvider>
        <View
          style={{
            paddingTop: Platform.OS === "ios" ? Constants.statusBarHeight : 0,
            flex: 1,
          }}
        >
          <StatusBar
            barStyle={Platform.OS === "ios" ? "dark-content" : "default"}
          />
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen
                name="Movies"
                component={MovieStackScreen}
                options={{
                  tabBarIcon: ({ focused, color, size }) =>
                    renderTabBarIcon(focused, color, size, "list"),
                }}
              />
              <Tab.Screen
                name="Favorites"
                component={FavStackScreen}
                options={{
                  tabBarIcon: ({ focused, color, size }) =>
                    renderTabBarIcon(focused, color, size, "heart"),
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </View>
      </MovieProvider>
    </QueryClientProvider>
  );
}
