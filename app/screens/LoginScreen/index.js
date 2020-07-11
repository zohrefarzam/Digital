import React, {useState} from 'react';
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
export default function LoginScreen({navigation}) {
  return (
    <Container style={sajamstyles.container}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text size="large" color="gray">
          ورود
        </Text>
      </View>
      <Content contentContainerStyle={sajamstyles.mainView}>
        <Form style={sajamstyles.formView}>
          <Item style={sajamstyles.itemStyle}>
            <Input
              placeholder="شماره موبایل"
              placeholderTextColor="#adb4bc"
              style={sajamstyles.inputStyle}
              maxLength={10}
              keyboardType="phone-pad"
              containerStyle={sajamstyles.item}
              autoFocus
              blurOnSubmit
            />
            <Image
              source={images.login.phone}
              style={sajamstyles.img}
              resizeMode="contain"
              tintColor={styles.color.ColorGreen}
            />
          </Item>

          <View style={{marginTop: 20}} />
          <Item style={sajamstyles.itemStyle}>
            <Input
              placeholder="رمز"
              placeholderTextColor="#adb4bc"
              style={sajamstyles.inputStyle}
              maxLength={11}
              keyboardType="phone-pad"
              containerStyle={sajamstyles.item}
              blurOnSubmit
            />
            <Image
              source={images.login.lock}
              style={sajamstyles.img2}
              resizeMode="contain"
              tintColor={styles.color.ColorGreen}
            />
          </Item>
        </Form>
        <View
          style={{
            flexDirection: 'row-reverse',
            flexWrap: 'nowrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginRight: 50,
          }}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'nowrap',
              alignItems: 'center',
              justifyContent: 'flex-end',
              marginRight: -10,
            }}>
            <Text color="gray" size="sm" style={{marginRight: -10}}>
              مرا به خاطر بسپار
            </Text>
            <CheckBox />
          </View>
          <View>
            <Text color="green" size="sm">
              رمز عبور خود را فراموش کرده ام
            </Text>
          </View>
        </View>
      </Content>
      <View style={sajamstyles.view2}>
        <Button
          TouchableComponent={TouchableOpacity}
          ViewComponent={LinearGradient} // Don't forget this!
          title="ورود"
          containerStyle={sajamstyles.shadow}
          buttonStyle={sajamstyles.btn}
          titleStyle={sajamstyles.medium}
          linearGradientProps={{
            colors: [styles.color.ColorGreen, styles.color.ColorGreenFos],
            start: {x: 0, y: 0.5},
            end: {x: 1, y: 0.5},
          }}
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      <View
        style={{
          flexDirection: 'row-reverse',
          flexWrap: 'nowrap',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: normalize(20),
        }}>
        <Text>ثبت نام نکرده اید؟</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text color="green" style={{marginRight: 5}}>
            ثبت نام
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}
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
  item: {
    alignSelf: 'center',
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
    flex: 1,
    alignItems: 'center',
  },
  btn: {
    borderRadius: normalize(25),
    paddingVertical: hp(1),
    paddingHorizontal: normalize(50),
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
