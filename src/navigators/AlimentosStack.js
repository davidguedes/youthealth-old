import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CadastrarAlimentoScreen from '../pages/CadastrarAlimentoScreen';
import EditarAlimentoScreen from '../pages/EditarAlimentoScreen';
import AlimentosScreen from '../pages/AlimentosScreen.js';

const AlimentoStack = createStackNavigator();

export default () => (
  <AlimentoStack.Navigator screenOptions={{
    headerTitleAlign: 'center'
  }}>
    <AlimentoStack.Screen name="CadastrarAlimento" component={CadastrarAlimentoScreen} />
    <AlimentoStack.Screen name="EditarAlimento" component={EditarAlimentoScreen} />
    <AlimentoStack.Screen name="Alimentos" component={AlimentosScreen} />
  </AlimentoStack.Navigator>
);