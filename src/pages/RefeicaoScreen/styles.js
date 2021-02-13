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

export const RefeicoesList = styled.FlatList`
  flex: 1;
  width: 100%;
`;

export const NoRefeicoes = styled.View`
  align-items: center;
  justify-content: center;
`;

export const NoRefeicoesImage = styled.Image`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

export const NoRefeicoesText = styled.Text`
  font-size: 17px;
`;