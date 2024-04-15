import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Pressable, FlatList } from 'react-native';
import { COLORS } from '../constants';

const DisciplineItem = ({ discipline, navigation }) => {
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
            <Text style={styles.modalTitle}>Alunos da Disciplina</Text>
            <FlatList
              data={discipline.students}
              renderItem={({ item }) => (
                <Text style={styles.studentName}>{item}</Text>
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
        <Text>Professor: {discipline.professor}</Text>
        <Text>Código: {discipline.code}</Text>
        <Text>{discipline.term} - {discipline.shift}</Text>
        <Text>Dúvidas enviadas: {discipline.receivedDoubts}</Text>
        <Text>Dúvidas pendentes: {discipline.pendingDoubts}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, { marginRight: 10 }]}>
            <Text style={styles.buttonText}>Acessar Matéria</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={openModal}>
            <Text style={styles.buttonText}>Ver Integrantes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  periodContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: COLORS.lightGray,
    marginBottom: 10,
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
    flexDirection: 'row',
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
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  studentName: {
    fontSize: 16,
    marginBottom: 5,
  },
  closeButton: {
    marginTop: 20,
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    color: COLORS.primary,
    fontSize: 16,
  },
});

export default DisciplineItem;
