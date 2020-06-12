import React, {Component} from 'react';
import NavigationStack from './NavigationStack';
import NavigationService from './NavigationService';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default class AppNavigator extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <NavigationStack
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </SafeAreaProvider>
    );
  }
}
