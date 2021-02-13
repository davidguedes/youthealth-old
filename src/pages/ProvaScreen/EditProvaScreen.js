import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container
} from './styles';

function EditProvaScreen() {

  const navigation = useNavigation();

  const handleCadastrarClick = () => {
    navigation.navigate('EditProva');
  }

  const handleEditarClick = () => {
    navigation.navigate('EditProva');
  }

  const handleListarClick = () => {
    navigation.navigate('ListProvas');
  }

  return (
    <Container>
    </Container>
  );
}

export default EditProvaScreen;