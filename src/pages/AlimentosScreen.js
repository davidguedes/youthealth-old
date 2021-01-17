import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const Page = styled.SafeAreaView`
  flex:1;
  align-items:center;
  justify-content:center;
`;

const Header = styled.View`
  width:200px;
  height:200px;
  align-items:center;
  justify-content:center;
  background-color:#D1D1D1;
  margin:auto;
`;

const Title = styled.Text`
  font-size:25px;
`;

const Botao = styled.TouchableHighlight`
  background-color:#808080;
  padding:10px 25px;
  border-radius:10px;
  margin-top:15px;
`;

const TextButton = styled.Text`
  font-size:18px;  
  color:#FFF;
`;

function AlimentosScreen() {

  const navigation = useNavigation();

  const handleCadastrarClick = () => {
    navigation.navigate('CadastrarAlimento');
  }

  const handleEditarClick = () => {
    navigation.navigate('EditarAlimento');
  }

  const handleListarClick = () => {
    navigation.navigate('Alimentos');
  }

  return (
    <Page>
      <Header>
        <Title>Listar Alimentos</Title>
        <Botao
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={handleCadastrarClick}>
          <TextButton>Cadastrar alimento</TextButton>
        </Botao>
        <Botao
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={handleEditarClick}>
          <TextButton>Editar alimento</TextButton>
        </Botao>
        <Botao
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={handleListarClick}>
          <TextButton>Listar alimento</TextButton>
        </Botao>
      </Header>
    </Page>
  );
}

export default AlimentosScreen;