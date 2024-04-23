import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/Login'; // Importe a tela de login
// import BottomTabNavigation from './BottomTabNavigation';
import DrawerNavigation from './DrawerNavigation';
import Disciplinas from '../screens/Disciplinas';
import Duvidas from '../screens/Duvidas';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='Login' // Defina a tela de login como a tela inicial
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={DrawerNavigation} />
        <Stack.Screen name="Disciplina" component={Disciplinas} />
        <Stack.Screen name="Duvidas" component={Duvidas} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation;
