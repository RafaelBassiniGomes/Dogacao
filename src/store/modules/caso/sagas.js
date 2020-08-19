import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { saveCasoFailure } from './actions';

export function* salvarCaso({ payload }) {
  try {
    const { id, nome, ...rest } = payload.data;

    const caso = { id, nome, ...rest };

    let response = null;

    api.defaults.headers.Authorization = `Bearer ${payload.token}`;

    if (caso.id) {
      response = yield call(api.put, 'animais', caso);
    } else {
      response = yield call(api.post, 'animais', caso);
    }

    toast.success('Registro salvo com sucesso!');

    history.push(`/casos/${response.data.id}`);
  } catch (err) {
    toast.error('Erro ao salvar o caso, confira os dados!');
    yield put(saveCasoFailure());
  }
}

export default all([takeLatest('@caso/UPDATE_CASO_REQUEST', salvarCaso)]);
