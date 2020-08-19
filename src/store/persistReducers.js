import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'dogacao',
      storage,
      whitelist: ['auth', 'user', 'abrigo', 'caso', 'evento'],
    },
    reducers
  );

  return persistedReducer;
};
