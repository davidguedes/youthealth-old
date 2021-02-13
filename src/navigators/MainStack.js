import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainTab from '../navigators/MainTab';
import RegisterScreen from '../pages/RegisterScreen/index';
import LoginScreen from '../pages/LoginScreen/index';
import SettingsScreen from '../pages/SettingsScreen/index';

const MainStack = createStackNavigator();

export default () => (
  <MainStack.Navigator screenOptions={{
    headerTitleAlign: 'center'
  }}>
    <MainStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
    <MainStack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
    <MainStack.Screen name="Home" component={MainTab} options={{ headerShown: false }} />
    <MainStack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
  </MainStack.Navigator>
);