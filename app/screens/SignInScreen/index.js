import React, {useState, Component} from 'react';
import {
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
  StyleSheet,
} from 'react-native';
import {Form, Item, Input, Container, Content} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Text} from '../../utils/Kit';
import styles from '../../config/styles';
import images from '../../config/images';
import {Button, CheckBox} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import normalize from 'react-native-normalize';
import {connect} from 'react-redux';
class SignInScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <Container style={sajamstyles.container}>
        <View
          style={{flex: 0.4, justifyContent: 'center', alignItems: 'center'}}>
          <Text size="large" color="gray">
            ثبت نام جدید
          </Text>
        </View>
    
        <View
          style={{
            flexDirection: 'row-reverse',
            flexWrap: 'nowrap',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: normalize(20),
          }}>
          <Text>ثبت نام کرده اید؟</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text color="green" style={{marginRight: 5}}>
              ورود
            </Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}
export default connect(
  null,
  null,
)(SignInScreen);
const sajamstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f2f6',
    justifyContent: 'center',
  },
  img: {height: hp(3), width: wp(3)},
  img2: {height: hp(3.1), width: wp(3.1)},
  mainView: {flex: 1, justifyContent: 'center'},

  formView: {marginHorizontal: '9%'},
  itemStyle: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  inputStyle: {
    fontFamily: 'IRANSansMobile',
    textAlign: 'right',
    paddingBottom: hp(0.8),
  },
  error: {color: 'red', margin: 5, marginHorizontal: 15},
  view: {
    marginRight: wp(10),
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  text: {padding: 10},
  view2: {
    flex: 0.15,
    alignItems: 'center',
  },
  btn: {
    borderRadius: normalize(25),
    paddingVertical: hp(1),
    paddingHorizontal: normalize(40),
  },
  medium: {fontSize: normalize(20), fontFamily: 'IRANSansMobile'},
  shadow: {
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
});
