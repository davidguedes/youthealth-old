import React, {useState, useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import data from '../../data/refeicoes';
import {
  Container,
  AddButton,
  AddButtonImage,
  NoRefeicoes,
  NoRefeicoesImage,
  NoRefeicoesText,
  FlatList,
  TextBottom,
} from './styles';
import {
  Box,
  HeaderItem,
  TextHeaderDate,
  TextHeaderPeriodo,
  BodyItem,
  TitleAlimentos,
  TextAlimentos,
} from '../../components/RefeicaoItem';
import {
  FindArea,
  FindInput,
  FindImageButton,
  FindButton,
} from '../../components/DefaultFind';

function ListRefeicoesScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Refeições',
      headerRight: () => (
        <AddButton
          underlayColor="transparent"
          onPress={() => navigation.navigate('EditRefeicao')}>
          <AddButtonImage source={require('../../assets/add.png')} />
        </AddButton>
      ),
      headerLeft: false,
    });
  }, [navigation]);

  const [ListRefeicoes] = useState(data);

  return (
    <Container>
      {ListRefeicoes.length === 0 && (
        <NoRefeicoes>
          <NoRefeicoesImage source={require('../../assets/lunch.png')} />
          <NoRefeicoesText>Nenhuma refeição</NoRefeicoesText>
        </NoRefeicoes>
      )}
      {ListRefeicoes && (
        <>
          <FindArea>
            <FindInput
              placeholder="Pesquise por uma refeição"
              placeholderTextColor="#EEE"
              returnKeyType="send"
            />
            <FindButton activeOpacity={0.6} underlayColor="#DDDDDD">
              <FindImageButton source={require('../../assets/loupe-w.png')} />
            </FindButton>
          </FindArea>
          <FlatList
            data={ListRefeicoes}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => {
              const {date, periodo, alimentos} = item;
              let periodoEstend;
              if (periodo === 'm') {
                periodoEstend = 'Matutino';
              } else if (periodo === 'v') {
                periodoEstend = 'Vespertino';
              } else {
                periodoEstend = 'Noturno';
              }
              return (
                <Box>
                  <>
                    <HeaderItem>
                      <TextHeaderDate>Data: {date}</TextHeaderDate>
                      <TextHeaderPeriodo>
                        Período: {periodoEstend}
                      </TextHeaderPeriodo>
                    </HeaderItem>
                    <BodyItem>
                      <TitleAlimentos>Alimentos</TitleAlimentos>
                      <TextAlimentos>{alimentos}</TextAlimentos>
                    </BodyItem>
                  </>
                </Box>
              );
            }}
          />
          <TextBottom>Total de alimentos: {ListRefeicoes.length}</TextBottom>
        </>
      )}
    </Container>
  );
}

export default ListRefeicoesScreen;
