import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { saveAdocaoFailure, saveAdocaoSuccess } from './actions';

export function* aprovarAdocao({ payload }) {
  try {
    const { id, nome, ...rest } = payload.data;

    const adocao = { id, nome, ...rest };
    adocao.status = 'A';
    api.defaults.headers.Authorization = `Bearer ${payload.token}`;

    if (adocao.id) {
      yield call(api.put, 'adocoes', adocao);
    } else {
      yield call(api.post, 'adocoes', adocao);
    }
    yield put(saveAdocaoSuccess());

    toast.success('Registro Aprovado com sucesso!');

    history.push(`/${adocao.abrigo.slug}`);
  } catch (err) {
    toast.error('Erro ao salvar a adoção, confira os dados!');
    yield put(saveAdocaoFailure());
  }
}

export function* reprovarAdocao({ payload }) {
  try {
    const { id, nome, ...rest } = payload.data;

    const adocao = { id, nome, ...rest };
    adocao.status = 'R';
    api.defaults.headers.Authorization = `Bearer ${payload.token}`;

    if (adocao.id) {
      yield call(api.put, 'adocoes', adocao);
    } else {
      yield call(api.post, 'adocoes', adocao);
    }

    toast.success('Registro Reprovado com sucesso!');

    history.push(`/${adocao.abrigo.slug}`);
  } catch (err) {
    toast.error('Erro ao salvar a adoção, confira os dados!');
    yield put(saveAdocaoFailure());
  }
}

export function* salvarAdocao({ payload }) {
  let response = null;
  try {
    const { id, nome, ...rest } = payload.data;

    const adocao = { id, nome, ...rest };

    api.defaults.headers.Authorization = `Bearer ${payload.token}`;

    if (adocao.id) {
      response = yield call(api.put, 'adocoes', adocao);
    } else {
      response = yield call(api.post, 'adocoes', adocao);
    }

    toast.success(
      'Registro enviado com sucesso, aguarde o contato do abrigo responsável!'
    );

    history.push(`/casos/${response.data.animal_id}`);
  } catch (err) {
    toast.error('Erro ao salvar a adoção, confira os dados!');
    yield put(saveAdocaoFailure());
  }
}

export default all([
  takeLatest('@adocao/UPDATE_ADOCAO_REQUEST', salvarAdocao),
  takeLatest('@adocao/APROVAR_ADOCAO', aprovarAdocao),
  takeLatest('@adocao/REPROVAR_ADOCAO', reprovarAdocao),
]);
