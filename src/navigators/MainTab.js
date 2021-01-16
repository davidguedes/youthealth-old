import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from '../components/CustomTabBar'
import styled from 'styled-components/native';
import LoginScreen from '../pages/LoginScreen';
import HomeScreen from '../pages/HomeScreen';
import RegisterScreen from '../pages/RegisterScreen';
import RefeicoesScreen from '../pages/RefeicoesScreen';
import AlimentosScreen from '../pages/AlimentosScreen';
import ProvasScreen from '../pages/ProvasScreen';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
    <Tab.Screen name="Home" tabBarIcon="../assets/home-icon-g.png" component={HomeScreen} />
    <Tab.Screen name="Refeicoes" tabBarIcon='../assets/refeicoes-icon-b.png' component={RefeicoesScreen} />
    <Tab.Screen name="Alimentos" tabBarIcon='../assets/alimentos-icon-b.png' component={AlimentosScreen} />
    <Tab.Screen name="Provas" tabBarIcon='../assets/provas-icon-b.png' component={ProvasScreen} />
  </Tab.Navigator>
);