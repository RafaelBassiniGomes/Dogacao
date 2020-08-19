import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import abrigo from './abrigo/sagas';
import caso from './caso/sagas';
import evento from './evento/sagas';
import adocao from './adocao/sagas';

export default function* rootSaga() {
  return yield all([auth, user, abrigo, caso, evento, adocao]);
}
