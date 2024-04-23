import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Pressable,
  FlatList,
} from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants";
import Header from "../components/Header";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const disciplines = [
  {
    id: "1",
    name: "Desenvolvimento Mobile",
    professor: "Jeferson",
    code: "EGS19701",
    term: "7º período",
    shift: "Noturno",
    receivedDoubts: 17,
    pendingDoubts: 3,
    students: [
      "Maria",
      "João",
      "Ana",
      "Pedro",
      "Juliana",
      "Lucas",
      "Camila",
      "Mateus",
      "Isabela",
      "Rafael",
      "Larissa",
      "Diego",
      "Amanda",
      "Guilherme",
      "Laura",
    ],
  },
  {
    id: "2",
    name: "Gestão de Projetos",
    professor: "Elaine Zanini",
    code: "EGS19702",
    term: "7º período",
    shift: "Tarde",
    receivedDoubts: 20,
    pendingDoubts: 5,
    students: [
      "Fernanda",
      "Daniel",
      "Carolina",
      "Thiago",
      "Isabela",
      "Gabriel",
      "Juliana",
      "Lucas",
      "Mariana",
      "Pedro",
      "Beatriz",
      "Rodrigo",
      "Letícia",
      "Carlos",
      "Vitória",
    ],
  },
  {
    id: "3",
    name: "Qualidade de Software",
    professor: "Leandro Ensina",
    code: "EGS19703",
    term: "7º período",
    shift: "Noite",
    receivedDoubts: 15,
    pendingDoubts: 2,
    students: [
      "Fernanda",
      "Daniel",
      "Carolina",
      "Thiago",
      "Isabela",
      "Gabriel",
      "Juliana",
      "Lucas",
      "Mariana",
      "Pedro",
      "Beatriz",
      "Rodrigo",
      "Letícia",
      "Carlos",
      "Maria",
      "João",
      "Ana",
      "Pedro",
      "Juliana",
      "Vitória",
    ],
  },
];

const DisciplineItems = ({ discipline }) => {
  const navigation = useNavigation();
  const handleVerDuvidas = () => {
    navigation.navigate("Duvidas");
  };
  
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.periodContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              <Ionicons
                name="people-outline"
                size={21}
                style={{ color: COLORS.primary }}
              /> Alunos da disciplina
            </Text>
            <FlatList
              data={discipline.students}
              renderItem={({ item }) => (
                <View style={styles.studentItem}>
                  <Text style={styles.studentName}>{item}</Text>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
            <Pressable onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{discipline.name}</Text>
        <Text style={styles.textPeriod}>
          <Ionicons
            name="school-outline"
            size={21}
            style={{ color: COLORS.primary }}
          />
          <Text style={styles.textBold}> Professor:</Text>{" "}
          {discipline.professor}
        </Text>
        <Text style={styles.textPeriod}>
          <Ionicons
            name="document-text-outline"
            size={21}
            style={{ color: COLORS.primary }}
          />
          <Text style={styles.textBold}> Código:</Text> {discipline.code}
        </Text>
        <Text style={styles.textPeriod}>
          <Ionicons
            name="calendar-outline"
            size={21}
            style={{ color: COLORS.primary }}
          />
          <Text style={styles.textBold}>
            {" "}
            {discipline.term} - {discipline.shift}
          </Text>
        </Text>
        <Text style={styles.textPeriod}>
          <Ionicons
            name="cloud-circle-outline"
            size={21}
            style={{ color: COLORS.primary }}
          />
          <Text style={styles.textBold}> Dúvidas enviadas:</Text>{" "}
          {discipline.receivedDoubts}
        </Text>
        <Text style={styles.textPeriod}>
          <Ionicons
            name="help-circle-outline"
            size={21}
            style={{ color: COLORS.primary }}
          />
          <Text style={styles.textBold}> Dúvidas pendentes:</Text>{" "}
          {discipline.pendingDoubts}
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.buttonOne, { marginRight: 10 }]}
            onPress={handleVerDuvidas}
          >
            <Text style={styles.buttonOneText}>Acessar Dúvidas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonTwo} onPress={openModal}>
            <Text style={styles.buttonTwoText}>Ver Integrantes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const Disciplinas = () => {
  const refRBSheet = useRef();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <View style={{ flex: 1, backgroundColor: COLORS.black }}>
        <Header title="Disciplinas" onPress={() => refRBSheet.current.open()} />
        <FlatList
          data={disciplines}
          renderItem={({ item }) => <DisciplineItems discipline={item} />}
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
  buttonOne: {
    backgroundColor: COLORS.secondary,
    padding: 8,
    borderRadius: 5,
  },
  buttonTwo: {
    backgroundColor: COLORS.primary,
    padding: 8,
    borderRadius: 5,
  },
  buttonOneText: {
    fontSize: 15,
    fontWeight: "bold",
    color: COLORS.white,
  },
  buttonTwoText: {
    fontSize: 15,
    fontWeight: "bold",
    color: COLORS.black,
  },
  name: {
    fontSize: 17,
    marginBottom: 8,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  textPeriod: {
    marginBottom: 4,
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
    backgroundColor: "#1c1c1c",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    maxHeight: "80%",
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 15,
    fontWeight: "bold",
    flexDirection: "row",
    color: COLORS.primary,
  },
  studentItem: {
    marginBottom: 8,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primary,
  },
  studentName: {
    fontSize: 16,
    color: COLORS.white,
  },
  closeButton: {
    padding: 8,
    marginTop: 20,
    borderRadius: 5,
    alignSelf: "flex-end",
    backgroundColor: COLORS.secondary,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.white,
  },
});

export default Disciplinas;
