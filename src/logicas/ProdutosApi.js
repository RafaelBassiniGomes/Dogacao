import api from '~/services/api';

const ProdutosApi = {
  listaProdutosAbrigo: Id => {
    const abrigos = api.get(`produtosAbrigo/${Id}`);
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

export default ProdutosApi;
