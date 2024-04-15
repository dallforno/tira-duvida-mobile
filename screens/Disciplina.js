import React, { useRef } from 'react';
import { View, FlatList, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constants';
import Header from '../components/Header'
import BottomSheet from '../components/BottomSheet';
import { useNavigation } from '@react-navigation/native';
import DisciplineItem from '../components/DisciplineItem';

const disciplines = [
  {
    id: '1',
    name: 'Desenvolvimento Mobile',
    professor: 'Jeferson',
    code: 'EGS19701',
    term: '7º período',
    shift: 'Noturno',
    receivedDoubts: 17,
    pendingDoubts: 3,
    students: ['Maria', 'João', 'Ana', 'Pedro', 'Juliana', 'Lucas', 'Camila', 'Mateus', 'Isabela', 'Rafael', 'Larissa', 'Diego', 'Amanda', 'Guilherme', 'Laura'],
  },
  {
    id: '2',
    name: 'Gestão de Projetos',
    professor: 'Elaine Zanini',
    code: 'EGS19702',
    term: '7º período',
    shift: 'Tarde',
    receivedDoubts: 20,
    pendingDoubts: 5,
    students: ['Fernanda', 'Daniel', 'Carolina', 'Thiago', 'Isabela', 'Gabriel', 'Juliana', 'Lucas', 'Mariana', 'Pedro', 'Beatriz', 'Rodrigo', 'Letícia', 'Carlos', 'Vitória'],
  },
  {
    id: '3',
    name: 'Qualidade de Software',
    professor: 'Leandro Ensina',
    code: 'EGS19703',
    term: '7º período',
    shift: 'Noite',
    receivedDoubts: 15,
    pendingDoubts: 2,
    students: ['Fernanda', 'Daniel', 'Carolina', 'Thiago', 'Isabela', 'Gabriel', 'Juliana', 'Lucas', 'Mariana', 'Pedro', 'Beatriz', 'Rodrigo', 'Letícia', 'Carlos', 'Maria', 'João', 'Ana', 'Pedro', 'Juliana', 'Vitória'],
  }
];

const Disciplina = () => {
  const refRBSheet = useRef();
  const navigation = useNavigation(); // Obtenha a navegação

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <Header
          title="Disciplinas"
          onPress={() => refRBSheet.current.open()}
        />
        <FlatList
          data={disciplines}
          renderItem={({ item }) => <DisciplineItem discipline={item} navigation={navigation} />}
          keyExtractor={item => item.id}
        />
      </View>
      <BottomSheet bottomSheetRef={refRBSheet} />
    </SafeAreaView>
  );
};

export default Disciplina;