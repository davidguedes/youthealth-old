import styled from 'styled-components/native';
import {Image as Img} from 'react-native';

export const Box = styled.TouchableHighlight`
  margin-bottom: 10px;
  background-color: #c1c1c1;
  border-radius: 34px;
  flex-direction: row;
  padding: 10px;
`;

export const HeaderItem = styled.View`
  width: 30%;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-right-color: #fff;
  border-right-width: 1px;
`;

export const Image = styled(Img)`
  width: 64px;
  height: 64px;
`;

export const BodyItem = styled.View`
  width: 70%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  text-align: center;
`;

export const TextCat = styled.Text`
  font-size: 15px;
  text-align: center;
  margin-top: 5px;
`;
