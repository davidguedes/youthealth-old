import React, {useState, useLayoutEffect} from 'react';
import {Platform, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Container, KeyboardArea, ScrollView, TextButton} from './styles';
import DefaultInput from '../../components/DefaultInput';
import DefaultButton from '../../components/DefaultButton';
import {
  CancelButton,
  CancelButtonImage,
} from '../../components/DefaultCancelButton';

function EditAlimentoScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Cadastrar Alimento',
      headerLeft: () => (
        <CancelButton
          underlayColor="transparent"
          onPress={() => navigation.goBack()}>
          <CancelButtonImage source={require('../../assets/cancel.png')} />
        </CancelButton>
      ),
    });
  }, [navigation]);

  const [imagem, setImagem] = useState('');
  const [descricao, setDescricao] = useState('');
  const [categoria, setCategoria] = useState('');

  const toggleRegisterClick = () => {
    if (!descricao) {
      Alert.alert('Dados inválidos', 'Você precisa de uma descrião!');
      this.input_1.focus();
      return;
    } else if (!categoria) {
      Alert.alert('Dados inválidos', 'Você precisa selecionar uma categoria!');
      this.input_2.focus();
      return;
    }

    Alert.alert('Sucesso', 'Alimento cadastrado!');
    navigation.navigate('Home');
  };

  return (
    <Container>
      <KeyboardArea behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <ScrollView>
          <DefaultInput
            placeholder="Descrição"
            placeholderTextColor="#EEE"
            autoCapitalize="words"
            autoFocus={true}
            returnKeyType="next"
            value={descricao}
            onChangeText={(n) => setDescricao(n)}
            ref={(input) => {
              this.input_1 = input;
            }}
            blurOnSubmit={false}
            onSubmitEditing={() => {
              this.input_2.focus();
            }}
          />
          <DefaultInput
            placeholder="Categoria"
            placeholderTextColor="#EEE"
            autoCapitalize="words"
            returnKeyType="next"
            value={categoria}
            onChangeText={(n) => setCategoria(n)}
            ref={(input) => {
              this.input_2 = input;
            }}
            blurOnSubmit={false}
            onSubmitEditing={() => {
              this.input_3.focus();
            }}
          />
          <DefaultInput
            placeholder="Imagem"
            placeholderTextColor="#EEE"
            returnKeyType="send"
            value={imagem}
            onChangeText={(n) => setImagem(n)}
            ref={(input) => {
              this.input_3 = input;
            }}
            blurOnSubmit={false}
            onSubmitEditing={toggleRegisterClick}
          />
        </ScrollView>
        <DefaultButton
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={toggleRegisterClick}>
          <TextButton>Cadastrar</TextButton>
        </DefaultButton>
      </KeyboardArea>
    </Container>
  );
}

export default EditAlimentoScreen;
