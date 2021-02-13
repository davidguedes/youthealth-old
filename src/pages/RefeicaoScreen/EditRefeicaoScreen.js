import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container
} from './styles';

function EditRefeicaoScreen() {

  const navigation = useNavigation();

  const handleCadastrarClick = () => {
    navigation.navigate('EditRefeicao');
  }

  const handleEditarClick = () => {
    navigation.navigate('EditRefeicao');
  }

  const handleListarClick = () => {
    navigation.navigate('ListRefeicoes');
  }

  return (
    <Container>
    </Container>
  );
}

export default EditRefeicaoScreen;