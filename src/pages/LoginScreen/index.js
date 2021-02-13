import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Page,
  KeyboardArea,
  Image,
  TextButton,
  TextCopy
} from './styles';
import DefaultInput from '../../components/DefaultInput';
import DefaultButton from '../../components/DefaultButton';

const LoginScreen = (props) => {

  const navigation = useNavigation();

  const handleLoginClick = () => {
    if ((login === props.login) && (senha === props.senha))
      navigation.navigate('Home');
    else
      alert('Dados incorretos. Por favor, tente novamente!');
  }

  const handleRegisterClick = () => {
    navigation.navigate('Register');
  }

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <Page>
      <KeyboardArea behavior={Platform.OS == 'ios' ? 'padding' : null}>
        <Image
          source={require('../../images/logo-big.png')}
          defaultSource={require('../../images/image-placeholder.png')}
          style={{ width: 100, height: 100 }}
          resizeMode="cover"
        />
        <DefaultInput
          placeholder="Digite seu login"
          placeholderTextColor="#EEE"
          keyboardType="numeric"
          maxLength={8}
          returnKeyType='next'
          value={login}
          onChangeText={n => setLogin(n)}
          blurOnSubmit={false}
          onSubmitEditing={() => { this.input_2.focus(); }}
        />
        <DefaultInput
          placeholder="Digite sua senha"
          placeholderTextColor="#EEE"
          returnKeyType='send'
          value={senha}
          secureTextEntry={true}
          onChangeText={n => setSenha(n)}
          ref={(input) => { this.input_2 = input; }}
          blurOnSubmit={false}
          onSubmitEditing={handleLoginClick}
        />
        <DefaultButton
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={handleLoginClick}
        >
          <TextButton>LOGIN</TextButton>
        </DefaultButton>
        <DefaultButton
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={handleRegisterClick}
        >
          <TextButton>Cadastrar-se</TextButton>
        </DefaultButton>
      </KeyboardArea>
      <TextCopy>© YoutHealth</TextCopy>
    </Page>
  );
}

const mapStateToProps = (state) => {
  return {
    login: state.userReducer.idAluno,
    senha: state.userReducer.senha
  };
}

const mapDispatchToProps = () => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);