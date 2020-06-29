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
import {Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import normalize from 'react-native-normalize';
export default function SajamEntryScreen({navigation}) {
  return (
    <Container style={sajamstyles.container}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={images.tab.weblog}
          style={{height: 90, width: 90, tintColor: styles.color.ColorGreen}}
        />
      </View>
      <Content contentContainerStyle={sajamstyles.mainView}>
        <Form style={sajamstyles.formView}>
          <Item rounded style={sajamstyles.itemStyle}>
            <Image
              source={images.tab.profile}
              style={sajamstyles.img}
              resizeMode="contain"
              tintColor={styles.color.ColorGreen}
            />
            <Input
              placeholder="نام کاربری"
              placeholderTextColor="#adb4bc"
              style={sajamstyles.inputStyle}
              maxLength={10}
              keyboardType="phone-pad"
              containerStyle={sajamstyles.item}
              autoFocus
              blurOnSubmit
            />
          </Item>

          <View style={{marginTop: 20}} />
          <Item rounded style={sajamstyles.itemStyle}>
            <Image
              source={images.global.phone}
              style={sajamstyles.img2}
              resizeMode="contain"
              tintColor={styles.color.ColorGreen}
            />
            <Input
              placeholder="پسورد"
              placeholderTextColor="#adb4bc"
              style={sajamstyles.inputStyle}
              maxLength={11}
              keyboardType="phone-pad"
              containerStyle={sajamstyles.item}
              blurOnSubmit
            />
          </Item>
        </Form>
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
    </Container>
  );
}
const sajamstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f2f6',
    justifyContent: 'center',
  },
  img: {height: hp(6.5), width: wp(6.5)},
  img2: {height: hp(7.5), width: wp(7.5)},
  mainView: {flex: 1, justifyContent: 'center'},
  itemStyle: {
    paddingHorizontal: wp(2.5),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    backgroundColor: 'white',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    height: hp(7),
  },
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
    paddingHorizontal: normalize(140),
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
