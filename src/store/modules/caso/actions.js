export function listagemCaso(perfil) {
  return { type: '@caso/LISTAGEM', payload: { perfil } };
}

export function carregaCasoResponsavel(perfil) {
  return {
    type: '@caso/CARREGA_CASO_RESPONSAVEL',
    payload: { perfil },
  };
}

export function updateCasoRequest(data, token) {
  return {
    type: '@caso/UPDATE_CASO_REQUEST',
    payload: { data, token },
  };
}

export function saveCasoSuccess(data) {
  return {
    type: '@caso/UPDATE_CASO_SUCCESS',
    payload: { data },
  };
}

export function saveCasoFailure() {
  return {
    type: '@caso/UPDATE_CASO_FAILURE',
  };
}
