import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex:1;
  align-items:center;
  justify-content:center;
`;

export const SettingsButton = styled.TouchableHighlight`
  margin-right:15px;
`;

export const SettingsButtonImage = styled.Image`
  width:24px;
  height:24px;
`;

export const Header = styled.View`
  width:340px;
  height:auto;
  align-items:center;
  justify-content:center;
  background-color:#808080;
  margin:auto;
  border-radius: 30px;
`;

export const Title = styled.Text`
  font-size:25px;
  padding: 10px;
  background-color: #A9A9A9;
  border-radius: 30px;
  color: #FFF;
`;

export const Description = styled.Text`
  font-size:18px;  
  text-align: justify;
  color:#FFF;
  margin: 10px;
`;

export const Image = styled.Image`
  width: 64px;
  height: 64px;
  margin-bottom: 10px;
`;
