import { View, Text, Image } from "react-native";
import React from "react";
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import { COLORS, images } from "../constants";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";
import BottomTabNavigation from "./BottomTabNavigation";
import {
  Address,
  Favourite,
  Notifications,
  Orders,
  PaymentMethod,
  Profile,
  Search,
} from "../screens";
import { SafeAreaView } from "react-native-safe-area-context";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={
        (props)=>{
            return (
                <SafeAreaView>
                    <View style={{
                        height: 200,
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: COLORS.white
                    }}>
                        <Image
                          source={images.avatar}
                          style={{
                            height: 100,
                            width: 100,
                            borderRadius: 50,
                            marginBottom: 12
                          }}
                        />
                        <Text style={{
                            fontSize: 18,
                            fontWeight: "bold",
                            color: COLORS.black,
                            marginBottom: 6
                        }}>Igor Andre</Text>
                        <Text style={{
                            fontSize: 12,
                            color: COLORS.black

                        }}>Eng. Software - 7º período</Text>
                    </View>
                    <DrawerItemList {...props} />
                </SafeAreaView>
            )
        }
      }
      screenOptions={{
        drawerStyle: {
          backgroundColor: COLORS.white,
          width: 250,
        },
        headerStyle: {
          backgroundColor: COLORS.white,
        },
        headerShown: false,
        headerTintColor: COLORS.black,
        drawerLabelStyle: {
          color: COLORS.black,
          fontSize: 14,
          marginLeft: -10,
        },
      }}
    >
      <Drawer.Screen
        name="Período"
        options={{
          drawerLabel: "Período",
          title: "Período",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="home-outline" size={24} color={COLORS.black} />
          ),
        }}
        component={BottomTabNavigation}
      />   
      <Drawer.Screen
        name="Buscar"
        options={{
          drawerLabel: "Buscar",
          title: "Buscar",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="search-outline" size={24} color={COLORS.black} />
          ),
        }}
        component={Search}
      />
      <Drawer.Screen
        name="Destaques"
        options={{
          drawerLabel: "Destaques",
          title: "Destaques",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="heart-outline" size={24} color={COLORS.black} />
          ),
        }}
        component={Favourite}
      />         
      <Drawer.Screen
        name="Notificações"
        options={{
          drawerLabel: "Notificações",
          title: "Notificações",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons
              name="notifications-outline"
              size={24}
              color={COLORS.black}
            />
          ),
        }}
        component={Notifications}
      />
      <Drawer.Screen
        name="Ajuda"
        options={{
          drawerLabel: "Ajuda",
          title: "Ajuda",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Feather name="help-circle" size={24} color={COLORS.black} />
          ),
        }}
        component={Profile}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
