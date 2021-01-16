import React from 'react';
import styled from 'styled-components/native';
import { TouchableHighlight } from 'react-native';

const View = styled.View`
  flex-direction:row;
`;

const TabItem = styled.TouchableHighlight`
  flex:1;
  justify-content:center;
  align-items:center;
  height:80px;
`;

const TabLabel = styled.Text`
  font-size:16px;
`;

const TabIcon = styled.Image``;

function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View>
      {state.routes.map((route, index) => {
        //const { options } = descriptors[route.key];
        const options = descriptors[route.key].options;

        const isFocused = state.index === index;

        let label = route.name;

        let imgSource = options.tabBarIcon;

        alert(imgSource);

        switch (route.name) {
          case 'Home':
            if (!isFocused)
              imgSource = require('../assets/home-icon-g.png');
            else
              imgSource = require('../assets/home-icon-b.png');
            break;
          case 'Refeicoes':
            if (!isFocused)
              imgSource = require('../assets/refeicoes-icon-g.png');
            else
              imgSource = require('../assets/refeicoes-icon-b.png');
            break;
          case 'Alimentos':
            if (!isFocused)
              imgSource = require('../assets/alimentos-icon-g.png');
            else
              imgSource = require('../assets/alimentos-icon-b.png');
            break;
          case 'Provas':
            if (!isFocused)
              imgSource = require('../assets/provas-icon-g.png');
            else
              imgSource = require('../assets/provas-icon-b.png');
            break;
        }

        if (options.tabBarLabel != undefined) {
          label = route.tabBarLabel;
        } else if (options.title != undefined) {
          label = route.title;
        }

        const handleTabPress = () => {
          navigation.navigate(route.name);
        }

        return (
          <TabItem key={index} undeleyColor="transparent" onPress={handleTabPress}>
            <>
              <TabIcon source={imgSource} style={{ width: 24, height: 24 }} />
              <TabLabel>{label}</TabLabel>
            </>
          </TabItem>
        );
      })}
    </View>
  );
}

export default CustomTabBar;