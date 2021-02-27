import React from 'react';
import {Image as Img} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';
import HomeStack from './HomeStack';
import ListRefeicoesScreen from './RefeicoesStack';
import ListAlimentosScreen from './AlimentosStack';
import ListProvasScreen from './ProvasStack';

const Tab = createBottomTabNavigator();

const Image = styled(Img)`
  width: 24px;
  height: 24px;
`;

export default () => (
  //<Tab.Navigator initialRouteName="Home" tabBar={(props) => <CustomTabBar {...props} />}>
  <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: '#000',
      inactiveTintColor: '#777',
      style: {},
      labelStyle: {
        textTransform: 'uppercase',
      },
    }}>
    <Tab.Screen
      name="Home"
      component={HomeStack}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({focused}) => (
          <Image
            source={
              focused
                ? require('../assets/home-icon-b.png')
                : require('../assets/home-icon-g.png')
            }
          />
        ),
      }}
    />
    <Tab.Screen
      name="Refeicoes"
      component={ListRefeicoesScreen}
      options={{
        tabBarLabel: 'Refeições',
        tabBarIcon: ({focused}) => (
          <Image
            source={
              focused
                ? require('../assets/refeicoes-icon-b.png')
                : require('../assets/refeicoes-icon-g.png')
            }
          />
        ),
      }}
    />
    <Tab.Screen
      name="Alimentos"
      component={ListAlimentosScreen}
      options={{
        tabBarLabel: 'Alimentos',
        tabBarIcon: ({focused}) => (
          <Image
            source={
              focused
                ? require('../assets/alimentos-icon-b.png')
                : require('../assets/alimentos-icon-g.png')
            }
          />
        ),
      }}
    />
    <Tab.Screen
      name="Provas"
      component={ListProvasScreen}
      options={{
        tabBarLabel: 'Provas',
        tabBarIcon: ({focused}) => (
          <Image
            source={
              focused
                ? require('../assets/provas-icon-b.png')
                : require('../assets/provas-icon-g.png')
            }
          />
        ),
      }}
    />
  </Tab.Navigator>
);
