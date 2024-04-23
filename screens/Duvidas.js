import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants";
import Header from "../components/Header";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const queries = [
  {
    id: "1",
    status: "Pendente",
    curtidas: "4",
    disciplina: "Desenvolvimento Mobile",
    professor: "Jeferson",
    aluno: "Anônimo",
    titulo: "Título dúvida 1",
    texto: "Lorem ipsum dolor sit amet, consectetur adipisicing sed do eiusmol tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip eao commodo consequat Duis aute irure. Lorem ipsum dolor sit amet, consectetur adipisicing sed do eiusmol tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip eao commodo consequat Duis aute irure.",
  },
  {
    id: "2",
    status: "Respondida",
    curtidas: "10",
    disciplina: "Desenvolvimento Mobile",
    professor: "Elaine Zanini",
    aluno: "Anônimo",
    titulo: "Título dúvida 1",
    texto: "Lorem ipsum dolor sit amet, consectetur adipisicing sed do eiusmol tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip eao commodo consequat Duis aute irure.",
  },
];

const QueryItems = ({ query }) => {
  const navigation = useNavigation();
  const handleVerDisciplinas = () => {
    navigation.navigate("Disciplinas");
  };

  return (
    <View style={styles.periodContainer}>
      <View style={styles.infoContainer}>
        <Text style={styles.textPeriod}>
          <Ionicons
            name="school-outline"
            size={21}
            style={{ color: COLORS.primary }}
          />
          <Text style={styles.textBold}> Professor:</Text> {query.professor}
        </Text>
        <Text style={styles.textPeriod}>
          <Ionicons
            name="person-outline"
            size={21}
            style={{ color: COLORS.primary }}
          />
          <Text style={styles.textBold}> Aluno:</Text> {query.aluno}
        </Text>
        <Text style={styles.textPeriod}>
          <Ionicons
            name="thumbs-up-outline"
            size={21}
            style={{ color: COLORS.primary }}
          />
          <Text style={styles.textBold}> Curtidas:</Text> {query.curtidas}
        </Text>
        <Text style={styles.textPeriod}>
          <Ionicons
            name="checkmark"
            size={21}
            style={{ color: COLORS.primary }}
          />
          <Text style={styles.textBold}> Status:</Text> {query.status}
        </Text>
        <Text style={styles.textPeriod}>
          <Ionicons
            name="pencil-outline"
            size={21}
            style={{ color: COLORS.primary }}
          />
          <Text style={styles.textBold}> Título:</Text> {query.titulo}
        </Text>
        <Text style={styles.textPeriod}>
          <Ionicons
            name="newspaper-outline"
            size={21}
            style={{ color: COLORS.primary }}
          />
          <Text style={styles.textBold}> Texto:</Text> {query.texto}
        </Text>       
      </View>
    </View>
  );
};

const Duvidas = () => {
  const refRBSheet = useRef();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <View style={{ flex: 1, backgroundColor: COLORS.black }}>
        <Header title="Dúvidas Desenvolvimento Mobile" onPress={() => refRBSheet.current.open()} />
        <FlatList
          data={queries}
          renderItem={({ item }) => <QueryItems query={item} />}
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
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 5,
  },
  infoContainer: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: COLORS.white,
  },
  name: {
    fontSize: 17,
    marginBottom: 8,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  textPeriod: {
    marginBottom: 4,
    textAlign: "justify",
    color: COLORS.white,
  },
  textBold: {
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 10,
    width: "80%",
    maxHeight: "80%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  studentName: {
    fontSize: 16,
    marginBottom: 5,
  },
  closeButton: {
    marginTop: 20,
    alignSelf: "flex-end",
  },
  closeButtonText: {
    color: COLORS.primary,
    fontSize: 16,
  },
});

export default Duvidas;
