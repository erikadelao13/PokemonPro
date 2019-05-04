import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import reducer from './src/reducers/index';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: []
}

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer)
const persistor = persistStore(store)

export { store, persistor };
