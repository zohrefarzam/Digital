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
import {connect} from 'react-redux';

class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      father: '',
      date: '',
      phone: '',
      mail: '',
      password: '',
      retPass: '',
    };
  }
  updateValue(text, field) {
    if (field === 'name') {
      this.setState({name: text});
    } else if (field === 'father') {
      this.setState({father: text});
    } else if (field === 'date') {
      this.setState({date: text});
    } else if (field === 'phone') {
      this.setState({phone: text});
    } else if (field === 'mail') {
      this.setState({mail: text});
    } else if (field === 'password') {
      this.setState({password: text});
    } else if (field === 'retPass') {
      this.setState({retPass: text});
    }
  }
  submit = () => {
    let collection = {};
    collection.name = this.state.name;
    collection.father = this.state.father;
    collection.date = this.state.date;
    collection.phone = this.state.phone;
    collection.mail = this.state.mail;
    collection.password = this.state.password;
    console.log(collection);
    fetch('https://jimbooexchange.com/php_api/insert_user.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(collection),
    })
      .then(res => res.json())
      .catch(error => console.error('error', error))
      .then(response => console.log('success', response));
  };
  render() {
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
                onChangeText={text => this.updateValue(text, 'name')}
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
                onChangeText={text => this.updateValue(text, 'father')}
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
                onChangeText={text => this.updateValue(text, 'phone')}
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
                onChangeText={text => this.updateValue(text, 'mail')}
              />
              <Image
                source={images.login.mail}
                style={sajamstyles.img}
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
                onChangeText={text => this.updateValue(text, 'date')}
              />
              <Image
                source={images.login.dates}
                style={sajamstyles.img}
                resizeMode="contain"
                tintColor={styles.color.ColorGreen}
              />
            </Item>
            <Item style={sajamstyles.itemStyle}>
              <Input
                placeholder="رمز عبور"
                placeholderTextColor="#adb4bc"
                style={sajamstyles.inputStyle}
                maxLength={10}
                keyboardType="phone-pad"
                containerStyle={sajamstyles.item}
                autoFocus
                blurOnSubmit
                onChangeText={text => this.updateValue(text, 'password')}
              />
              <Image
                source={images.login.lock}
                style={sajamstyles.img}
                resizeMode="contain"
                tintColor={styles.color.ColorGreen}
              />
            </Item>
            <Item style={sajamstyles.itemStyle}>
              <Input
                placeholder="تکرار رمز عبور"
                placeholderTextColor="#adb4bc"
                style={sajamstyles.inputStyle}
                maxLength={10}
                keyboardType="phone-pad"
                containerStyle={sajamstyles.item}
                autoFocus
                blurOnSubmit
                onChangeText={text => this.updateValue(text, 'retPass')}
              />
              <Image
                source={images.login.lock}
                style={sajamstyles.img}
                resizeMode="contain"
                tintColor={styles.color.ColorGreen}
              />
            </Item>
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
            onPress={() => this.submit()}
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
          <TouchableOpacity>
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
    paddingRight: wp(5),
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
