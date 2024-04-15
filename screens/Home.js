import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../constants'
import Header from '../components/Header'
import BottomSheet from '../components/BottomSheet'
import { useNavigation } from '@react-navigation/native';

const periods = [
     {
          id: '1',
          name: 'Engenharia de Software - EGS',
          term: '5º período',
          totalCourses: 5,
          receivedDoubts: 17,
          pendingDoubts: 3,
          image: 'https://via.placeholder.com/150',
     },
     {
          id: '2',
          name: 'Engenharia de Software - EGS',
          term: '6º período',
          totalCourses: 6,
          receivedDoubts: 20,
          pendingDoubts: 5,
          image: 'https://via.placeholder.com/150',
     },
     {
          id: '3',
          name: 'Engenharia de Software - EGS',
          term: '7º período',
          totalCourses: 4,
          receivedDoubts: 15,
          pendingDoubts: 2,
          image: 'https://via.placeholder.com/150',
     }
];

const PeriodItem = ({ period }) => {


     const navigation = useNavigation();
     const handleVerDisciplinas = () => {
          navigation.navigate('Disciplina');
     };     

     return (
          <View style={styles.periodContainer}>
               <Image source={{ uri: period.image }} style={styles.image} />
               <View style={styles.infoContainer}>
                    <Text style={styles.name}>{period.name}</Text>
                    <Text>{period.term}</Text>
                    <Text>Disciplinas: {period.totalCourses}</Text>
                    <Text>Dúvidas recebidas: {period.receivedDoubts}</Text>
                    <Text>Dúvidas pendentes: {period.pendingDoubts}</Text>
                    <TouchableOpacity style={styles.button} onPress={handleVerDisciplinas}>
                         <Text style={styles.buttonText}>Ver Disciplinas</Text>
                    </TouchableOpacity>
               </View>
          </View>
     );
};


const Home = () => {
     const refRBSheet = useRef();
     return (
          <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
               <View style={{ flex: 1, backgroundColor: COLORS.white }}>
                    <Header
                         title="Períodos"
                         onPress={() => refRBSheet.current.open()}
                    />
                    <FlatList
                         data={periods}
                         renderItem={({ item }) => <PeriodItem period={item} />}
                         keyExtractor={item => item.id}
                    />
               </View>
               <BottomSheet bottomSheetRef={refRBSheet} />
          </SafeAreaView>
     );
};

const styles = StyleSheet.create({
     periodContainer: {
          flexDirection: 'row',
          padding: 10,
          backgroundColor: COLORS.lightGray,
          marginBottom: 10,
          alignItems: 'center',
     },
     image: {
          width: 50,
          height: 50,
          marginRight: 10,
     },
     infoContainer: {
          flex: 1,
     },
     button: {
          backgroundColor: COLORS.primary,
          padding: 10,
     },
     buttonText: {
          color: 'white',
     },
     name: {
          fontWeight: 'bold',
     },
});

export default Home
