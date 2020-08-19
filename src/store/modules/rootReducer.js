import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import abrigo from './abrigo/reducer';
import caso from './caso/reducer';
import evento from './evento/reducer';
import adocao from './adocao/reducer';

export default combineReducers({
  auth,
  user,
  abrigo,
  caso,
  evento,
  adocao,
});
