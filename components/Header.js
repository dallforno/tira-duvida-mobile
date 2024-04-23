import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS, icons } from "../constants";
import { Ionicons } from "@expo/vector-icons";

const Header = ({ title, onPress }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconBackContainer}
        >
          <Text>
            <Ionicons
              name="arrow-back"
              size={21}
              style={{ color: COLORS.black }}
            />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
          style={styles.iconContainer}
        >
          <Image resizeMode="contain" style={styles.icon} source={icons.menu} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            marginLeft: 12,
            fontWeight: "bold",
            color: COLORS.white,
            flexShrink: 1,
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 16,
  },
  iconContainer: {
    height: 45,
    width: 45,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
  },
  iconBackContainer: {
    height: 45,
    width: 45,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    marginRight: 10,
  },
  icon: {
    height: 24,
    width: 24,
    tintColor: COLORS.black,
  },
});
export default Header;
