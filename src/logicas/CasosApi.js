import { calculaIdade, formatDate, formatNumber } from './Funcoes';
import api from '~/services/api';

const CasosApi = {
  listaCasos: () => {
    return api.get('animais');
  },
  listaCasoId: Id => {
    return api.get(`animais/${Id}`);
  },
  isResponsavel: (caso, profile) => {
    if (caso && profile && caso.user && caso.user.id === profile.id)
      return true;
    return false;
  },

  TrataErros: res => {
    return res;
  },
  ConverteDatasCaso: caso => {
    caso.data_nascimento = formatDate(caso.data_nascimento);
    caso.idade = calculaIdade(caso.data_nascimento);
    caso.peso = formatNumber(caso.peso);
    caso.data_resgate = formatDate(caso.data_resgate);
    return caso;
  },
};

export default CasosApi;
