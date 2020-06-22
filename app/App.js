/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import Navigator from './navigation';
import '@babel/polyfill';
export default class App extends Component {
  componentDidMount() {
    if (__DEV__) {
      console.disableYellowBox = true;
    }
  }
  render() {
    return <Navigator />;
  }
}
