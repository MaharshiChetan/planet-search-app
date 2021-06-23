import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import planetReducer from './reducers/planet.reducer';

const rootPersistConfig = {
  key: 'root',
  storage,
};
const planetPersistConfig = {
  key: 'planet',
  storage,
  whitelist: ['currentPlanet'],
};

const rootReducer = combineReducers({
  planet: persistReducer(planetPersistConfig, planetReducer),
});
export default persistReducer(rootPersistConfig, rootReducer);
