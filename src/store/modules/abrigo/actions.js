export function listagemSlug(perfil) {
  return { type: '@abrigo/LISTAGEM_SLUG', payload: { perfil } };
}

export function carregaAbrigoResponsavel(perfil) {
  return {
    type: '@abrigo/CARREGA_ABRIGO_RESPONSAVEL',
    payload: { perfil },
  };
}

export function updateAbrigoRequest(data, token) {
  return {
    type: '@abrigo/UPDATE_ABRIGO_REQUEST',
    payload: { data, token },
  };
}

export function saveAbrigoSuccess(data) {
  return {
    type: '@abrigo/UPDATE_ABRIGO_SUCCESS',
    payload: { data },
  };
}

export function saveAbrigoFailure() {
  return {
    type: '@abrigo/UPDATE_ABRIGO_FAILURE',
  };
}
