import api from '~/services/api';
import { formatDate } from './Funcoes';

const EventosApi = {
  listaEventos: () => {
    return api.get('eventos');
  },

  listaEventoId: Id => {
    return api.get(`eventos/${Id}`);
  },

  listaEventoResponsavel: () => {
    const Eventos = api.get('EventosResponsavel');
    return Eventos;
  },

  isResponsavel: (evento, profile) => {
    if (evento && profile && evento.user && evento.user.id === profile.id)
      return true;
    return false;
  },
  ConverteDatasEvento: evento => {
    evento.data_evento = formatDate(evento.data_evento);
  },

  TrataErros: res => {
    return res;
  },
};

export default EventosApi;
