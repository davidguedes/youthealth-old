import React, {useState, useLayoutEffect} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import data from '../../data/alimentos';
import {
  Container,
  AddButton,
  AddButtonImage,
  NoAlimentos,
  NoAlimentosImage,
  NoAlimentosText,
  FlatList,
  TextBottom,
} from './styles';
import {
  FindArea,
  FindInput,
  FindImageButton,
  FindButton,
} from '../../components/DefaultFind';
import {
  Box,
  HeaderItem,
  Image,
  BodyItem,
  Title,
  TextCat,
} from '../../components/AlimentoItem';

function ListAlimentosScreen() {
  const navigation = useNavigation();
  const perfil = useSelector((state) => state.userReducer.perfil);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Alimentos',
      headerRight: false,
      headerLeft: false,
    });
    if (perfil === 'a') {
      navigation.setOptions({
        headerRight: () => (
          <AddButton
            underlayColor="transparent"
            onPress={() => navigation.navigate('EditAlimento')}>
            <AddButtonImage source={require('../../assets/add.png')} />
          </AddButton>
        ),
      });
    }
  }, [navigation, perfil]);

  /*
if(perfil === 'a')
      return (
      navigation.setOptions({
        headerRight: () => (
          <AddButton
            underlayColor="transparent"
            onPress={() => navigation.navigate('EditAlimento')}>
            <AddButtonImage source={require('../../assets/add.png')} />
          </AddButton>
        ),
      })
*/

  /*
    {perfil === 'a' &&
      navigation.setOptions({
        headerRight: () => (
          <AddButton
            underlayColor="transparent"
            onPress={() => navigation.navigate('EditAlimento')}>
            <AddButtonImage source={require('../../assets/add.png')} />
          </AddButton>
        ),
      });
    }*/

  const [ListaAlimentos] = useState(data);

  return (
    <Container>
      {ListaAlimentos.length === 0 && (
        <NoAlimentos>
          <NoAlimentosImage source={require('../../assets/harvest.png')} />
          <NoAlimentosText>Nenhum alimento</NoAlimentosText>
        </NoAlimentos>
      )}
      {ListaAlimentos && (
        <>
          <FindArea>
            <FindInput
              placeholder="Pesquise por um alimento"
              placeholderTextColor="#EEE"
              returnKeyType="send"
            />
            <FindButton activeOpacity={0.6} underlayColor="#DDDDDD">
              <FindImageButton source={require('../../assets/loupe-w.png')} />
            </FindButton>
          </FindArea>
          <FlatList
            data={ListaAlimentos}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => {
              const {descricao, image, categorias} = item;
              return (
                <Box>
                  <>
                    <HeaderItem>
                      <Image source={image} resizeMode="contain" />
                    </HeaderItem>
                    <BodyItem>
                      <Title>{descricao}</Title>
                      <TextCat>{categorias}</TextCat>
                    </BodyItem>
                  </>
                </Box>
              );
            }}
          />
          <TextBottom>Total de alimentos: {ListaAlimentos.length}</TextBottom>
        </>
      )}
    </Container>
  );
}

export default ListAlimentosScreen;
