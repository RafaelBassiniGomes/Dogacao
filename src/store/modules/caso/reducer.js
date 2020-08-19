import produce from 'immer';

const INITIAL_STATE = {
  perfil: null,
  perfilEdicao: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@caso/CARREGA_CASO_RESPONSAVEL': {
        draft.perfil = action.payload.perfil;
        draft.perfilEdicao = action.payload.perfil;
        break;
      }
      case '@caso/LISTAGEM': {
        draft.perfil = action.payload.perfil;
        draft.perfilEdicao = null;
        break;
      }
      default:
    }
  });
}
