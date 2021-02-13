import React, { useState } from 'react';
import { Platform } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {
  Page,
  KeyboardArea,
  ScrollView,
  TextButton
} from './styles';
import DefaultInput from '../../components/DefaultInput';
import DefaultButton from '../../components/DefaultButton';

const RegisterScren = (props) => {

  const navigation = useNavigation();

  const toggleBackClick = () => {
    navigation.goBack();
  }

  const toggleRegisterClick = () => {
    if (!nome) {
      alert("Você precisa de um nome!");
      return
    } else if (!dataNasc) {
      alert("Você precisa de uma data de nascimento");
      return
    } else if (!email) {
      alert("Você precisa de um email");
      return
    } else if (!idAluno) {
      alert("Você precisa de um ID");
      return
    } else if (!curso) {
      alert("Você precisa de um curso");
      return
    } else if (!senha) {
      alert("Você precisa de uma senha");
      return
    } else if (!confirmarSenha) {
      alert("Você precisa confirmar a senha");
      return
    } else if (senha != confirmarSenha) {
      alert("As senhas não conferem");
      setSenha('');
      setConfirmarSenha('');
      return
    }
    props.setUser([nome, dataNasc, email, idAluno, curso, senha]);
    navigation.navigate('Home');
  }

  const [nome, setNome] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [email, setEmail] = useState('');
  const [idAluno, setIdAluno] = useState('');
  const [curso, setCurso] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  return (
    <Page>
      <KeyboardArea behavior={Platform.OS == 'ios' ? 'padding' : null}>
        <ScrollView>
          <DefaultInput
            placeholder="Nome completo"
            placeholderTextColor="#EEE"
            autoFocus={true}
            autoCapitalize="words"
            returnKeyType='next'
            value={nome}
            onChangeText={n => setNome(n)}
            ref={(input) => { this.input_1 = input; }}
            blurOnSubmit={false}
            onSubmitEditing={() => { this.input_2.focus(); }}
          />
          <DefaultInput
            placeholder="Data de nascimento"
            placeholderTextColor="#EEE"
            returnKeyType='next'
            value={dataNasc}
            onChangeText={n => setDataNasc(n)}
            ref={(input) => { this.input_2 = input; }}
            blurOnSubmit={false}
            onSubmitEditing={() => { this.input_3.focus(); }}
          />
          <DefaultInput
            placeholder="Email"
            placeholderTextColor="#EEE"
            keyboardType="email-address"
            returnKeyType='next'
            value={email}
            onChangeText={n => setEmail(n)}
            ref={(input) => { this.input_3 = input; }}
            blurOnSubmit={false}
            onSubmitEditing={() => { this.input_4.focus(); }}
          />
          <DefaultInput
            placeholder="ID de aluno"
            placeholderTextColor="#EEE"
            keyboardType="numeric"
            maxLength={8}
            returnKeyType='next'
            value={idAluno}
            onChangeText={n => setIdAluno(n)}
            ref={(input) => { this.input_4 = input; }}
            blurOnSubmit={false}
            onSubmitEditing={() => { this.input_5.focus(); }}
          />
          <DefaultInput
            placeholder="Curso"
            placeholderTextColor="#EEE"
            returnKeyType='next'
            value={curso}
            onChangeText={n => setCurso(n)}
            ref={(input) => { this.input_5 = input; }}
            blurOnSubmit={false}
            onSubmitEditing={() => { this.input_6.focus(); }}
          />
          <DefaultInput
            placeholder="Senha"
            placeholderTextColor="#EEE"
            returnKeyType='next'
            value={senha}
            secureTextEntry={true}
            onChangeText={n => setSenha(n)}
            ref={(input) => { this.input_6 = input; }}
            blurOnSubmit={false}
            onSubmitEditing={() => { this.input_7.focus(); }}
          />
          <DefaultInput
            placeholder="Confirmar senha"
            placeholderTextColor="#EEE"
            returnKeyType='send'
            value={confirmarSenha}
            secureTextEntry={true}
            onChangeText={n => setConfirmarSenha(n)}
            ref={(input) => { this.input_7 = input; }}
            blurOnSubmit={false}
            onSubmitEditing={toggleRegisterClick}
          />
        </ScrollView>
        <DefaultButton
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={toggleRegisterClick}
        >
          <TextButton>Cadastrar-se</TextButton>
        </DefaultButton>
      </KeyboardArea>
    </Page>
  );
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: ([nome, dataNasc, email, idAluno, curso, senha]) => dispatch({ type: 'CREATE_USER', payload: { nome, dataNasc, email, idAluno, curso, senha } })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScren);