import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants";
import Header from "../components/Header";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const periods = [
  {
    id: "1",
    name: "Engenharia de Software - EGS",
    term: "5º período",
    totalCourses: 5,
    receivedDoubts: 17,
    pendingDoubts: 3,
    image: "https://sites.webdezan.com.br/webdezan/images/engsoftware-logo.png",
  },
  {
    id: "2",
    name: "Engenharia de Software - EGS",
    term: "6º período",
    totalCourses: 6,
    receivedDoubts: 20,
    pendingDoubts: 5,
    image: "https://sites.webdezan.com.br/webdezan/images/engsoftware-logo.png",
  },
  {
    id: "3",
    name: "Engenharia de Software - EGS",
    term: "7º período",
    totalCourses: 4,
    receivedDoubts: 15,
    pendingDoubts: 2,
    image: "https://sites.webdezan.com.br/webdezan/images/engsoftware-logo.png",
  },
];

const PeriodItem = ({ period }) => {
  const navigation = useNavigation();
  const handleVerDisciplinas = () => {
    navigation.navigate("Disciplinas");
  };

  return (
    <View style={styles.periodContainer}>
      <Image source={{ uri: period.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{period.name}</Text>
        <Text style={styles.textPeriod}>
          <Ionicons
            name="calendar-outline"
            size={21}
            style={{ color: COLORS.primary }}
          />
          <Text style={styles.textBold}> {period.term}</Text>
        </Text>
        <Text style={styles.textPeriod}>
          <Ionicons
            name="document-text-outline"
            size={21}
            style={{ color: COLORS.primary }}
          />
          <Text style={styles.textBold}> Disciplinas:</Text>{" "}
          {period.totalCourses}
        </Text>
        <Text style={styles.textPeriod}>
          <Ionicons
            name="cloud-circle-outline"
            size={21}
            style={{ color: COLORS.primary }}
          />
          <Text style={styles.textBold}> Dúvidas recebidas:</Text>{" "}
          {period.receivedDoubts}
        </Text>
        <Text style={styles.textPeriod}>
          <Ionicons
            name="help-circle-outline"
            size={21}
            style={{ color: COLORS.primary }}
          />
          <Text style={styles.textBold}> Dúvidas pendentes:</Text>{" "}
          {period.pendingDoubts}
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleVerDisciplinas}>
          <Text style={styles.buttonText}>Ver Disciplinas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Periodos = () => {
  const refRBSheet = useRef();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <View style={{ flex: 1, backgroundColor: COLORS.black }}>
        <Header title="Períodos" onPress={() => refRBSheet.current.open()} />
        <FlatList
          data={periods}
          renderItem={({ item }) => <PeriodItem period={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  periodContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: COLORS.black,
    marginBottom: 10,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: COLORS.primary,
    alignItems: "top",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  textPeriod: {
    marginBottom: 4,
    color: COLORS.white,
  },
  textBold: {
    fontWeight: "bold",
  },
  button: {
    width: 130,
    marginTop: 10,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    textAlign: "center",
    backgroundColor: COLORS.secondary,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  name: {
    fontSize: 17,
    marginBottom: 8,
    fontWeight: "bold",
    color: COLORS.primary,
  },
});

export default Periodos;
