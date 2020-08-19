import api from '~/services/api';

const AdocoesApi = {
  listaAdocaoPk: Id => {
    return api.get(`adocao/${Id}`);
  },

  listaFormAdocaoAbrigo: Id => {
    return api.get(`adocoes/${Id}`);
  },

  updateAdocao: adocao => {
    return api.put('adocoes', adocao);
  },

  createAdocao: adocao => {
    return api.post('adocoes', adocao);
  },
};

export default AdocoesApi;
