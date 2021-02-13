const initialState = {
  nome: '',
  dataNasc: '',
  email: '',
  idAluno: '',
  curso: '',
  senha: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        ...state, nome: action.payload.nome,
        dataNasc: action.payload.dataNasc,
        email: action.payload.email,
        idAluno: action.payload.idAluno,
        curso: action.payload.curso,
        senha: action.payload.senha
      };
      break;

    case 'ALTER_USER':
      return {
        ...state, nome: action.payload.nome,
        dataNasc: action.payload.dataNasc,
        email: action.payload.email,
        idAluno: action.payload.idAluno,
        curso: action.payload.curso,
        senha: action.payload.senha
      };
      break;
  }
  return state;
}