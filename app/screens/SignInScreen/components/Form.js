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

export default function CustomTable(props) {
  <View>
    <Content contentContainerStyle={sajamstyles.mainView}>
      <Form style={sajamstyles.formView}>
        <Item style={sajamstyles.itemStyle}>
          <Input
            placeholder="نام"
            placeholderTextColor="#adb4bc"
            style={sajamstyles.inputStyle}
            maxLength={10}
            keyboardType="phone-pad"
            containerStyle={sajamstyles.item}
            autoFocus
            blurOnSubmit
          />
          <Image
            source={images.login.males}
            style={sajamstyles.img}
            resizeMode="contain"
            tintColor={styles.color.ColorGreen}
          />
        </Item>

        <Item style={sajamstyles.itemStyle}>
          <Input
            placeholder="نام خانوادگی"
            placeholderTextColor="#adb4bc"
            style={sajamstyles.inputStyle}
            maxLength={10}
            keyboardType="phone-pad"
            containerStyle={sajamstyles.item}
            autoFocus
            blurOnSubmit
          />
          <Image
            source={images.login.males}
            style={sajamstyles.img}
            resizeMode="contain"
            tintColor={styles.color.ColorGreen}
          />
        </Item>
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
        <Item style={sajamstyles.itemStyle}>
          <Input
            placeholder="ایمیل"
            placeholderTextColor="#adb4bc"
            style={sajamstyles.inputStyle}
            maxLength={10}
            keyboardType="phone-pad"
            containerStyle={sajamstyles.item}
            autoFocus
            blurOnSubmit
          />
          <Image
            source={images.login.mail}
            style={{height: hp(4), width: wp(4)}}
            resizeMode="contain"
            tintColor={styles.color.ColorGreen}
          />
        </Item>
        <Item style={sajamstyles.itemStyle}>
          <Input
            placeholder="تاریخ تولد"
            placeholderTextColor="#adb4bc"
            style={sajamstyles.inputStyle}
            maxLength={10}
            keyboardType="phone-pad"
            containerStyle={sajamstyles.item}
            autoFocus
            blurOnSubmit
          />
          <Image
            source={images.login.dates}
            style={{height: hp(4), width: wp(4)}}
            resizeMode="contain"
            tintColor={styles.color.ColorGreen}
          />
        </Item>
        <Item style={sajamstyles.itemStyle}>
          <Image
            source={images.login.eye}
            style={{height: hp(5), width: wp(5)}}
            resizeMode="contain"
            //tintColor={styles.color.ColorGreen}
          />
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
        <Item style={sajamstyles.itemStyle}>
          <Input
            placeholder="تکرار رمز"
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
    </Content>
    <View style={sajamstyles.view2}>
      <Button
        TouchableComponent={TouchableOpacity}
        ViewComponent={LinearGradient} // Don't forget this!
        title="ثبت نام"
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
  </View>;
}
