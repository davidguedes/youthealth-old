import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex:1;
  align-items:center;
  justify-content:center;
`;

export const AddButton = styled.TouchableHighlight`
  margin-right:15px;
`;

export const AddButtonImage = styled.Image`
  width:24px;
  height:24px;
`;

export const AlimentosList = styled.FlatList`
  flex: 1;
  width: 100%;
`;

export const NoAlimentos = styled.View`
  align-items: center;
  justify-content: center;
`;

export const NoAlimentosImage = styled.Image`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

export const NoAlimentosText = styled.Text`
  font-size: 17px;
`;

export const FlatList = styled.FlatList`
  flex:1;
  background-color: red;
`;

export const Box = styled.TouchableHighlight`
  background-color: #c1c1c1;
  margin-bottom:30px;
`;

export const Title = styled.Text`
  font-size:24px;
  text-align:center;
  margin-top:5px;
`;

export const Image = styled.Image`
  height: 400px;
  resize-mode:contain;
`;