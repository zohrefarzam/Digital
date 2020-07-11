import React, {useState, Component} from 'react';
import {
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
  StyleSheet,
} from 'react-native';
import {Item, Input, Container, Content} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from '../../config/styles';
import images from '../../config/images';
import {Text} from '../../utils/Kit';
import {Field, reduxForm} from 'redux-form';
import normalize from 'react-native-normalize';
import {Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

class SignInScreen extends Component {
  onSubmit = values => {
    console.log(values);
  };
  renderInput = field => {
    const {
      placeholder,
      maxLength,
      keyboardType,
      autoFocus,
      blurOnSubmit,
      image,
      onchangeText,
      onValue,
    } = field;
    return (
      <Item style={sajamstyles.itemStyle}>
        <Input
          onChange={onchangeText}
          value={onValue}
          placeholder={placeholder}
          placeholderTextColor="#adb4bc"
          style={sajamstyles.inputStyle}
          maxLength={maxLength}
          keyboardType={keyboardType}
          containerStyle={sajamstyles.item}
          autoFocus={autoFocus}
          blurOnSubmit={blurOnSubmit}
        />
        <Image
          source={image}
          style={sajamstyles.img}
          resizeMode="contain"
          tintColor={styles.color.ColorGreen}  

          
        />
      </Item>
    );
  };
  render() {
    const {navigation} = this.props;
    const {handleSubmit} = this.props;
    return (
      <Container style={sajamstyles.container}>
        <View
          style={{flex: 0.4, justifyContent: 'center', alignItems: 'center'}}>
          <Text size="large" color="gray">
            ثبت نام جدید
          </Text>
        </View>
        <Content contentContainerStyle={sajamstyles.mainView}>
          <View style={sajamstyles.ViewView}>
            <Field
              name="name"
              placeholder="Name"
              image={images.login.males}
              component={this.renderInput}
            />
            {/* <Item style={sajamstyles.itemStyle}>
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
            </Item> */}
            <Field
              name="family"
              placeholder="Family"
              image={images.login.males}
              component={this.renderInput}
            />
            <Field
              name="phone"
              placeholder="Phone"
              image={images.login.phone}
              component={this.renderInput}
            />
            <Field
              name="mail"
              placeholder="Email"
              image={images.login.mail}
              component={this.renderInput}
            />
            <Field
              name="date"
              placeholder="Date"
              image={images.login.dates}
              component={this.renderInput}
            />
            <Field
              name="pass"
              placeholder="Pass"
              image={images.login.lock}
              component={this.renderInput}
            />
            <Field
              name="w"
              placeholder="W"
              image={images.login.lock}
              component={this.renderInput}
            />
          </View>
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
            onPress={handleSubmit(this.onSubmit)}
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
export default (SignInScreen = reduxForm({
  // a unique name for the form
  form: 'register',
})(SignInScreen));
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
