import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { saveEventoFailure } from './actions';

export function* salvarEvento({ payload }) {
  try {
    const { id, titulo, ...rest } = payload.data;

    const evento = { id, titulo, ...rest };

    let response = null;

    api.defaults.headers.Authorization = `Bearer ${payload.token}`;

    if (evento.id) {
      response = yield call(api.put, 'eventos', evento);
    } else {
      response = yield call(api.post, 'eventos', evento);
    }
    toast.success('Registro salvo com sucesso!');

    history.push(`/eventos/${response.data.id}`);
  } catch (err) {
    toast.error('Erro ao salvar o caso, confira os dados!');
    yield put(saveEventoFailure());
  }
}

export default all([takeLatest('@evento/UPDATE_EVENTO_REQUEST', salvarEvento)]);
