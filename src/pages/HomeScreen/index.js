import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Container,
  SettingsButton,
  SettingsButtonImage,
  Header,
  Title,
  Description,
  Image
} from './styles';

const HomeScreen = (props) => {

  const navigation = useNavigation();
  const route = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Home',
      headerRight: () => (
        <SettingsButton underlayColor="transparent" onPress={() => navigation.navigate('Settings')}>
          <SettingsButtonImage source={require('../../assets/settings.png')} />
        </SettingsButton>
      )
    });
  }, []);

  const handleLogoutClick = () => {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <Title>Seja bem-vindo, {props.nome}!</Title>
        <Description>O YoutHealth foi criado para ajudar você, estudade, a ter um melhor controle sobre sua alimentação! Navegue entre nosso menu de opções e comece agora a aproveitar nosso App da melhor forma possível.</Description>
        <Image source={require('../../images/logo-big.png')} />
      </Header>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    nome: state.userReducer.nome,
    idAluno: state.userReducer.idAluno
  };
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);