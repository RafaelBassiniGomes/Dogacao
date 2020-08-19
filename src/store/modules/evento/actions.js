export function listagemEventos(perfil) {
  return { type: '@evento/LISTAGEM', payload: { perfil } };
}

export function carregaEventoResponsavel(perfil) {
  return {
    type: '@evento/CARREGA_EVENTO_RESPONSAVEL',
    payload: { perfil },
  };
}

export function updateEventoRequest(data, token) {
  return {
    type: '@evento/UPDATE_EVENTO_REQUEST',
    payload: { data, token },
  };
}

export function saveEventoSuccess(data) {
  return {
    type: '@evento/UPDATE_EVENTO_SUCCESS',
    payload: { data },
  };
}

export function saveEventoFailure() {
  return {
    type: '@evento/UPDATE_EVENTO_FAILURE',
  };
}
