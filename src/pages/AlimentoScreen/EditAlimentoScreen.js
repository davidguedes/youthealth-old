import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container
} from './styles';

function EditAlimentoScreen() {

  const navigation = useNavigation();

  const handleCadastrarClick = () => {
    navigation.navigate('EditAlimento');
  }

  const handleEditarClick = () => {
    navigation.navigate('EditAlimento');
  }

  const handleListarClick = () => {
    navigation.navigate('ListAlimentos');
  }

  return (
    <Container>
    </Container>
  );
}

export default EditAlimentoScreen;