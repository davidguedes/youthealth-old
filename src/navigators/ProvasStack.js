import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CadastrarProvaScreen from '../pages/CadastrarProvaScreen';
import EditarProvaScreen from '../pages/EditarProvaScreen';
import ProvasScreen from '../pages/ProvasScreen.js';

const ProvaStack = createStackNavigator();

export default () => (
  <ProvaStack.Navigator screenOptions={{
    headerTitleAlign: 'center'
  }}>
    <ProvaStack.Screen name="CadastrarProva" component={CadastrarProvaScreen} />
    <ProvaStack.Screen name="EditarProva" component={EditarProvaScreen} />
    <ProvaStack.Screen name="Provas" component={ProvasScreen} />
  </ProvaStack.Navigator>
);