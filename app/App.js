/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {SafeAreaContext} from 'react-native-safe-area-context';
import Navigator from './navigation';
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
