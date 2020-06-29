import {createStore, compose, applyMiddleware} from 'redux';
import {persistStore, persistCombineReducers} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import rootReducers from '../reducers'; // where reducers is a object of reducers

const config = {
  key: 'root',
  storage: AsyncStorage,
  // blacklist: ['loading', 'auth', 'company', 'news'],
  whitelist: ['user', 'bank', 'basket', 'message'],
  debug: true, //to get useful logging
};

const middleware = [];

// if (__DEV__) {
//   middleware.push(createLogger());
// }

const reducers = persistCombineReducers(config, rootReducers);
const enhancers = [applyMiddleware(...middleware)];
// const initialState = {};
const persistConfig = {enhancers};
const store = createStore(reducers, undefined, compose(...enhancers));
const persistor = persistStore(store, persistConfig, () => {
  // console.log('Test', store.getState());
});
const configureStore = () => {
  return {persistor, store};
};

export default configureStore;
