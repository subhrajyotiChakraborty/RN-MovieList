import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from "react-native-vector-icons/Feather";

import FavScreen from "./src/screens/Fav/Fav";
import ListScreen from "./src/screens/List/List";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Movies"
          component={ListScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return <Feather name="list" color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return <Feather name="heart" color={color} size={size} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
