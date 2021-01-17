import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RefeicoesScreen from '../pages/RefeicoesScreen.js';
import CadastrarRefeicaoScreen from '../pages/CadastrarRefeicaoScreen';
import EditarRefeicaoScreen from '../pages/EditarRefeicaoScreen';

const AlimentoStack = createStackNavigator();

export default () => (
  <AlimentoStack.Navigator screenOptions={{
    headerTitleAlign: 'center'
  }}>
    <AlimentoStack.Screen name="Refeicoes" component={RefeicoesScreen} />
    <AlimentoStack.Screen name="CadastrarRefeicao" component={CadastrarRefeicaoScreen} />
    <AlimentoStack.Screen name="EditarRefeicao" component={EditarRefeicaoScreen} />
  </AlimentoStack.Navigator>
);