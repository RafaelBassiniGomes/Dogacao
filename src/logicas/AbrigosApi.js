import api from '~/services/api';

const AbrigosApi = {
  listaAbrigos: () => {
    return api.get('abrigos');
  },

  listaAbrigoSlug: Slug => {
    const abrigos = api.get(`abrigo/${Slug}`);
    return abrigos;
  },

  listaCasosAbrigo: Id => {
    const abrigos = api.get(`adocoesabrigos/${Id}`);
    return abrigos;
  },

  listaAbrigoResponsavel: () => {
    const abrigos = api.get('abrigosResponsavel');
    return abrigos;
  },

  isResponsavel: (abrigo, profile) => {
    if (abrigo && profile && abrigo.user && abrigo.user.id === profile.id)
      return true;
    return false;
  },

  TrataErros: res => {
    return res;
  },
};

export default AbrigosApi;
