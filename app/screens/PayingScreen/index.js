import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {WebView} from 'react-native-webview';

export default class PayingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {link: ''};
  }
  async componentWillMount() {
    const link = this.props.navigation.getParam('link');
    this.setState({link: link});
  }
  render() {
    return <WebView source={{uri: this.state.link}} />;
  }
}
