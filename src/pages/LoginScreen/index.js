import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Platform, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Page, KeyboardArea, Image, TextButton, TextCopy} from './styles';
import DefaultInput from '../../components/DefaultInput';
import DefaultButton from '../../components/DefaultButton';
const axios = require('axios');

const LoginScreen = () => {
  const navigation = useNavigation();
  const user = useSelector((state) => state.userReducer);

  const handleLoginClick = () => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        idAluno: login,
        senha: senha,
      }),
    };
    const promise = fetch('http://192.168.0.12:5000/user/signin', options);
    promise
      .then((response) => {
        navigation.navigate('Home');
        console.log(response);
      })
      .catch(function (error) {
        Alert.alert('Dados inválidos', error.toString());
        this.input_1.focus();
        setSenha('');
      });
    /*
    axios
      .post('http://localhost:5000/user/signin/', {
        idAluno: '997082',
        senha: '1401',
      })
      .then(function (response) {
        navigation.navigate('Home');
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        this.input_1.focus();
        setSenha('');
      });
      */
    /*
    if (login === user.idAluno && senha === user.senha) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Dados incorretos', 'Por favor, tente novamente!');
      this.input_1.focus();
      setSenha('');
    }
    */
  };

  const handleRegisterClick = () => {
    navigation.navigate('Register');
  };

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <Page>
      <KeyboardArea behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <Image
          source={require('../../images/logo-big.png')}
          defaultSource={require('../../images/image-placeholder.png')}
          resizeMode="cover"
        />
        <DefaultInput
          placeholder="Digite seu login"
          placeholderTextColor="#EEE"
          keyboardType="numeric"
          maxLength={8}
          returnKeyType="next"
          value={login}
          onChangeText={(n) => setLogin(n)}
          ref={(input) => {
            this.input_1 = input;
          }}
          blurOnSubmit={false}
          onSubmitEditing={() => {
            this.input_2.focus();
          }}
        />
        <DefaultInput
          placeholder="Digite sua senha"
          placeholderTextColor="#EEE"
          returnKeyType="send"
          value={senha}
          secureTextEntry={true}
          onChangeText={(n) => setSenha(n)}
          ref={(input) => {
            this.input_2 = input;
          }}
          blurOnSubmit={false}
          onSubmitEditing={handleLoginClick}
        />
        <DefaultButton
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={handleLoginClick}>
          <TextButton>LOGIN</TextButton>
        </DefaultButton>
        <DefaultButton
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={handleRegisterClick}>
          <TextButton>Cadastrar-se</TextButton>
        </DefaultButton>
      </KeyboardArea>
      <TextCopy>© YoutHealth</TextCopy>
    </Page>
  );
};

export default LoginScreen;
