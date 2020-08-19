export function listagemAdocao(perfil) {
  return { type: '@adocao/LISTAGEM', payload: { perfil } };
}

export function carregaAdocaoResponsavel(perfil) {
  return {
    type: '@adocao/CARREGA_ADOCAO_RESPONSAVEL',
    payload: { perfil },
  };
}

export function updateAdocaoRequest(data, token) {
  return {
    type: '@adocao/UPDATE_ADOCAO_REQUEST',
    payload: { data, token },
  };
}

export function aprovarAdocao(data, token) {
  return {
    type: '@adocao/APROVAR_ADOCAO',
    payload: { data, token },
  };
}

export function reprovarAdocao(data, token) {
  return {
    type: '@adocao/REPROVAR_ADOCAO',
    payload: { data, token },
  };
}

export function saveAdocaoSuccess(data) {
  return {
    type: '@adocao/UPDATE_ADOCAO_SUCCESS',
    payload: { data },
  };
}

export function saveAdocaoFailure() {
  return {
    type: '@adocao/UPDATE_ADOCAO_FAILURE',
  };
}
