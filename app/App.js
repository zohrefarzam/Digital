/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
import Navigator from './navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import configureStore from 'app/store/configureStore';
import {View} from 'native-base';
const {persistor, store} = configureStore();
class App extends Component {
  componentDidMount() {
    if (__DEV__) {
      console.disableYellowBox = true;
    }
  }
  render() {
    return (
   
        <Provider store={store}>
          <Navigator />;
        </Provider>
   
    );
  }
}
export default App;
