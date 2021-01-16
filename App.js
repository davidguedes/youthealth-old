import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigators/MainStack';
import MainTab from './src/navigators/MainTab';

/*
<NavigationContainer>
      <MainStack />
    </NavigationContainer>
*/

function App() {
  return (
    <NavigationContainer>
      <MainTab />
    </NavigationContainer>
  );
}

export default App;