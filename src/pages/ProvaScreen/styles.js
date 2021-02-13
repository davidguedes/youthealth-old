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

export const ProvasList = styled.FlatList`
  flex: 1;
  width: 100%;
`;

export const NoProvas = styled.View`
  align-items: center;
  justify-content: center;
`;

export const NoProvasImage = styled.Image`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

export const NoProvasText = styled.Text`
  font-size: 17px;
`;