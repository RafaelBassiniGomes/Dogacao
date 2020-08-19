import api from '~/services/api';

const ParceirosApi = {
  listaParceiros: () => {
    return api.get('parceiros');
  },

  listaParceiroResponsavel: () => {
    const parceiro = api.get('parceirosResponsavel');
    return parceiro;
  },

  isResponsavel: (parceiro, profile) => {
    if (parceiro && profile && parceiro.user && parceiro.user.id === profile.id)
      return true;
    return false;
  },

  TrataErros: res => {
    return res;
  },
};

export default ParceirosApi;
