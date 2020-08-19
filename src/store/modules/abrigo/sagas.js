import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { saveAbrigoFailure } from './actions';

export function* salvarAbrigo({ payload }) {
  try {
    const { nome, email, quemSomos, comoAjudar, ...rest } = payload.data;

    const abrigo = { nome, email, quemSomos, comoAjudar, ...rest };

    let response = null;

    api.defaults.headers.Authorization = `Bearer ${payload.token}`;

    if (abrigo.id) {
      response = yield call(api.put, 'abrigos', abrigo);
    } else {
      response = yield call(api.post, 'abrigos', abrigo);
    }

    toast.success('Registro salvo com sucesso!');

    history.push(`/${response.data.slug}`);
  } catch (err) {
    toast.error('Erro ao salvar o abrigo, confira os dados!');
    yield put(saveAbrigoFailure());
  }
}

export default all([takeLatest('@abrigo/UPDATE_ABRIGO_REQUEST', salvarAbrigo)]);
