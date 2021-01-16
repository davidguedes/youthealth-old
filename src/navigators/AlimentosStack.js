import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabCadastrarAlimento from '../pages/CadastrarAlimentosScreen';
import TabEditarAlimento from '../pages/EditarAlimentoScreen';

const MainStack = createStackNavigator();

export default () => (
  <MainStack.Navigator screenOptions={{
    headerTitleAlign: 'center'
  }}>
    <MainStack.Screen name="TabCadastrarAlimento" component={LoginScreen} />
    <MainStack.Screen name="TabEditarAlimento" component={HomeScreen} />
  </MainStack.Navigator>
);