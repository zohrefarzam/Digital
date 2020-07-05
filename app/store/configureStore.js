import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducers from '../reducers'; // where reducers is a object of reducers

const store = createStore(rootReducers, applyMiddleware(thunk));

const configureStore = () => {
  return {store};
};

export default configureStore;
