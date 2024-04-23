import { View, Text, Image } from "react-native";
import React from "react";
import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { COLORS, images } from "../constants";
import { Ionicons } from "@expo/vector-icons";
import { Periodos, Disciplinas, Duvidas } from "../screens";
import { SafeAreaView } from "react-native-safe-area-context";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <SafeAreaView
            style={{
              height: "100%",
              backgroundColor: "#0e0e0e",
            }}
          >
            <View
              style={{
                height: 200,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: COLORS.black,
              }}
            >
              <Image
                source={images.avatarCurso}
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 50,
                  marginBottom: 12,
                }}
              />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: COLORS.white,
                  marginBottom: 6,
                }}
              >
                Igor André
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.white,
                }}
              >
                Eng. Software - 7º período
              </Text>
            </View>
            <DrawerItemList {...props} />
          </SafeAreaView>
        );
      }}
      screenOptions={{
        drawerStyle: {
          backgroundColor: COLORS.black,
          width: 250,
        },
        headerStyle: {
          backgroundColor: COLORS.black,
        },
        headerShown: false,
        headerTintColor: COLORS.black,
        drawerLabelStyle: {
          color: COLORS.white,
          fontSize: 14,
          marginLeft: -10,
        },
      }}
    >
      <Drawer.Screen
        name="Períodos"
        options={{
          drawerLabel: "Períodos",
          title: "Períodos",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons
              name="ios-calendar-outline"
              size={24}
              style={{ color: COLORS.primary }}
            />
          ),
        }}
        component={Periodos}
      />
      <Drawer.Screen
        name="Disciplinas"
        options={{
          drawerLabel: "Disciplinas",
          title: "Disciplinas",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons
              name="school-outline"
              size={24}
              style={{ color: COLORS.primary }}
            />
          ),
        }}
        component={Disciplinas}
      />
      <Drawer.Screen
        name="Dúvidas"
        options={{
          drawerLabel: "Dúvidas",
          title: "Dúvidas",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons
              name="help-outline"
              size={24}
              style={{ color: COLORS.primary }}
            />
          ),
        }}
        component={Duvidas}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
