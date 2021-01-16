import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../pages/HomeScreen';
import LoginScreen from '../pages/LoginScreen';

const MainStack = createStackNavigator();

export default () => (
  <MainStack.Navigator screenOptions={{
    headerTitleAlign: 'center'
  }}>
    <MainStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
    <MainStack.Screen name="Home" component={HomeScreen} />
  </MainStack.Navigator>
);