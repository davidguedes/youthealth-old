import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Platform, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Page, KeyboardArea, Image, TextButton, TextCopy} from './styles';
import DefaultInput from '../../components/DefaultInput';
import DefaultButton from '../../components/DefaultButton';

const LoginScreen = () => {
  const navigation = useNavigation();
  const user = useSelector((state) => state.userReducer);

  const handleLoginClick = () => {
    if (login === user.idAluno && senha === user.senha) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Dados incorretos', 'Por favor, tente novamente!');
      this.input_1.focus();
      setSenha('');
    }
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
