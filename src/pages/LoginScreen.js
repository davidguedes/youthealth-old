import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Platform, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Page = styled.SafeAreaView`
  flex:1;
  align-items:center;
  justify-content:center;
`;

const KeyboardArea = styled.KeyboardAvoidingView`
  align-items:center;
  justify-content:center;
`;

const Input = styled.TextInput`
  background-color:#555;
  border-radius:5px;
  color:#FFF;
  font-size:18px;
  width:300px;
  height:45px;
  margin:10px;
  padding-left:10px;
  padding-right:10px;
`;

const Image = styled.Image``;

const Botao = styled.TouchableHighlight`
  background-color:#808080;
  padding:10px 25px;
  border-radius:10px;
  margin-top:15px;
`;

const TextButton = styled.Text`
font-size:18px;  
color:#FFF;
`;

function LoginScreen() {

  const navigation = useNavigation();

  const handleLoginClick = () => {
    navigation.navigate('Home', {
      login: login
    });
  }

  const handleRegisterClick = () => {
    navigation.navigate('Cadastrarse');
  }

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <Page>
      <KeyboardArea behavior={Platform.OS == 'ios' ? 'padding' : null}>
        <Image
          source={require('../images/logo-big.png')}
          defaultSource={require('../images/image-placeholder.png')}
          style={{ width: 100, height: 100 }}
          resizeMode="cover"
        />
        <Input
          placeholder="Digite seu login"
          placeholderTextColor="#EEE"
          value={login}
          onChangeText={n => setLogin(n)}
        />
        <Input
          placeholder="Digite sua senha"
          placeholderTextColor="#EEE"
          value={senha}
          onChangeText={n => setSenha(n)}
          secureTextEntry={true}
        />
        <Botao
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={handleLoginClick}
        >
          <TextButton>LOGIN</TextButton>
        </Botao>
        <Botao
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={handleRegisterClick}
        >
          <TextButton>Cadastrar-se</TextButton>
        </Botao>
      </KeyboardArea>
    </Page>
  );
}

export default LoginScreen;