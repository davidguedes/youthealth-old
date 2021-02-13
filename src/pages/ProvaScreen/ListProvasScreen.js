import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  AddButton,
  AddButtonImage,
  NoProvas,
  NoProvasImage,
  NoProvasText
} from './styles';

function ListProvasScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Provas',
      headerRight: () => (
        <AddButton underlayColor="transparent" onPress={() => navigation.navigate('EditProva')}>
          <AddButtonImage source={require('../../assets/add.png')} />
        </AddButton>
      )
    });
  }, []);

  const handleEditarClick = () => {
    navigation.navigate('EditProva');
  }

  const handleListarClick = () => {
    navigation.navigate('ListProvas');
  }

  const list = [];

  return (
    <Container>
      {list.length == 0 &&
        <NoProvas>
          <NoProvasImage source={require("../../assets/test.png")} />
          <NoProvasText>Nenhuma prova</NoProvasText>
        </NoProvas>
      }
    </Container>
  );
}

export default ListProvasScreen;