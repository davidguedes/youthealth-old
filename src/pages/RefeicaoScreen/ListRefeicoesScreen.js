import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  AddButton,
  AddButtonImage,
  NoRefeicoes,
  NoRefeicoesImage,
  NoRefeicoesText
} from './styles';

function ListRefeicoesScreen() {

  const navigation = useNavigation();


  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Refeições',
      headerRight: () => (
        <AddButton underlayColor="transparent" onPress={() => navigation.navigate('EditRefeicao')}>
          <AddButtonImage source={require('../../assets/add.png')} />
        </AddButton>
      )
    });
  }, []);

  const handleCadastrarClick = () => {
    navigation.navigate('EditRefeicao');
  }

  const handleEditarClick = () => {
    navigation.navigate('EditRefeicao');
  }

  const handleListarClick = () => {
    navigation.navigate('ListRefeicoes');
  }

  const list = [];

  return (
    <Container>
      {list.length == 0 &&
        <NoRefeicoes>
          <NoRefeicoesImage source={require("../../assets/lunch.png")} />
          <NoRefeicoesText>Nenhuma refeição</NoRefeicoesText>
        </NoRefeicoes>
      }
    </Container>
  );
}

export default ListRefeicoesScreen;