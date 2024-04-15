import { View, Text, Image, Platform } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Message, Orders, Profile, Search } from "../screens";
import { COLORS, icons } from "../constants";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: Platform.OS === "ios" ? 90 : 60,
    backgroundColor: COLORS.white,
  },
};

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="DrawerHome"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={focused ? icons.home : icons.homeOutline}
                resizeMode="contain"
                style={{
                  height: 24,
                  width: 24,
                  tintColor: focused ? COLORS.primary : COLORS.black,
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
