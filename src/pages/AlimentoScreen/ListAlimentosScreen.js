import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import data from '../../alimentos.json';
import {
  Container,
  AddButton,
  AddButtonImage,
  NoAlimentos,
  NoAlimentosImage,
  NoAlimentosText,
  FlatList,
  Box,
  Title,
  Image
} from './styles';

function ListAlimentosScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Alimentos',
      headerRight: () => (
        <AddButton underlayColor="transparent" onPress={() => navigation.navigate('EditAlimento')}>
          <AddButtonImage source={require('../../assets/add.png')} />
        </AddButton>
      )
    });
  }, []);

  const [listaAlimentos, setListaAlimentos] = useState(data);

  useEffect(() => {
    //setListaAlimentos(data)
    console.log("Deu certo:" + listaAlimentos + ". Item 1. Id:" + listaAlimentos[0].id + ". Descricao:" + listaAlimentos[0].descricao
    )
  }, []);

  const handleCadastrarClick = () => {
    navigation.navigate('EditAlimento');
  }

  const handleEditarClick = () => {
    navigation.navigate('EditAlimento');
  }

  const handleAlimentoPress = () => {

  }

  return (
    <Container>
      {listaAlimentos.length == 0 &&
        <NoAlimentos>
          <NoAlimentosImage source={require("../../assets/harvest.png")} />
          <NoAlimentosText>Nenhum alimento</NoAlimentosText>
        </NoAlimentos>
      }
      {listaAlimentos &&
        <>
          <Title>Total de alimentos: {listaAlimentos.length}</Title>
          <FlatList
            data={listaAlimentos}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
              <Box>
                <Title>{item.descricao}</Title>
                <Image source={{ uri: item.image }} />
              </Box>
            }}
          />
        </>
      }
    </Container >
  );
}

export default ListAlimentosScreen;