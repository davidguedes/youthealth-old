const initialState = {
  nome: '',
  perfil: 'a',
  dataNasc: Date(),
  email: '',
  idAluno: '',
  curso: '',
  senha: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        ...state,
        nome: action.payload.nome,
        perfil: 'u',
        dataNasc: action.payload.dataNasc,
        email: action.payload.email,
        idAluno: action.payload.idAluno,
        curso: action.payload.curso,
        senha: action.payload.senha,
      };

    case 'ALTER_USER':
      return {
        ...state,
        nome: action.payload.nome,
        perfil: 'a',
        dataNasc: action.payload.dataNasc,
        email: action.payload.email,
        idAluno: action.payload.idAluno,
        curso: action.payload.curso,
        senha: action.payload.senha,
      };
  }
  return state;
};
