import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';
import HomeScreen from '../pages/HomeScreen';
import RefeicoesScreen from '../pages/RefeicoesScreen';
import AlimentosScreen from '../pages/AlimentosScreen';
import ProvasScreen from '../pages/ProvasScreen';

const Tab = createBottomTabNavigator();

const Image = styled.Image``;

export default () => (
  <Tab.Navigator screenOptions={({ route }) => ({
    tabBarIcon: (focused) => {
      let imgSource = null;

      switch (route.name) {
        case 'Home':
          imgSource = require('../assets/home-icon-g.png');
          break;
        case 'Refeicoes':
          imgSource = require('../assets/refeicoes-icon-g.png');
          break;
        case 'Alimentos':
          imgSource = require('../assets/alimentos-icon-g.png');
          break;
        case 'Provas':
          imgSource = require('../assets/provas-icon-g.png');
          break;
      }

      return <Image source={imgSource} style={{ width: 24, height: 24 }} />
    }
  })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Refeicoes" component={RefeicoesScreen} />
    <Tab.Screen name="Alimentos" component={AlimentosScreen} />
    <Tab.Screen name="Provas" component={ProvasScreen} />
  </Tab.Navigator>
);