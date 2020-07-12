import React, {useState, Component} from 'react';
import {
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
  StyleSheet,
  Alert,
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
import Dialog from 'react-native-dialog';
import CustomModal from '../../components/CustomModal';
class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      father: '',
      date: '',
      phone: '',
      mail: '',
      password: '',
      retPass: '',
      visible: true,
      dialog1: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      dialog5: false,
      dialog6: false,
    };
  }
  updateValue(text, field) {
    if (field === 'Name') {
      this.setState({Name: text});
    } else if (field === 'Father_Name') {
      this.setState({father: text});
    } else if (field === 'Bourning_Time') {
      this.setState({date: text});
    } else if (field === 'Mail') {
      this.setState({mail: text});
    } else if (field === 'Phone') {
      this.setState({phone: text});
    } else if (field === 'Password') {
      this.setState({password: text});
    } else if (field === 'retPass') {
      this.setState({retPass: text});
    }
  }
  submit = () => {
    let collection = {};
    collection.Name = this.state.Name;
    collection.Father_Name = this.state.father;
    collection.Bourning_Time = this.state.date;
    collection.IsOk = 'no';
    collection.IsBlock = 'no';
    collection.Mail = this.state.mail;
    collection.Phone = this.state.phone;
    collection.Is_Phone_Ok = 'no';
    collection.Password = this.state.password;

    console.log(collection);
    // if (collection.password.length < 8) {
    //   this.setState({dialog1: true});
    // }
    // if (this.state.password !== this.state.retPass) {
    //   this.setState({dialog2: true});
    // }
    // if (
    //   /^[a-z]/.test(collection.Name) ||
    //   /^[A-Z]/.test(collection.Name) ||
    //   /^[a-z]/.test(collection.father) ||
    //   /^[A-Z]/.test(collection.father)
    // ) {
    //   this.setState({dialog4: true});
    // }
    // if (collection.phone < 11) {
    //   this.setState({dialog5: true});
    // }
    // if (!/[@ ]/g.test(collection.mail) || !/[.com]/g.test(collection.mail)) {
    //   this.setState({dialog6: true});
    // }

    this.setState({dialog3: true});
    fetch('https://jimbooexchange.com/php_api/insert_user.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(collection),
    })
      .then(response => response.ok)
      .then(response => {
        console.log('upload succes', response);
        alert('Upload success!', response);
      })
      .catch(error => {
        console.log('upload error', error);
        alert('Upload failed!');
      });
  };
  render() {
    return (
      <Container style={sajamstyles.container}>
        <Content contentContainerStyle={sajamstyles.mainView}>
          <View
            style={{flex: 0.4, justifyContent: 'center', alignItems: 'center'}}>
            <Text size="large" color="gray">
              ثبت نام جدید
            </Text>
          </View>

          <View style={sajamstyles.ViewView}>
            <Item style={sajamstyles.itemStyle}>
              <Input
                placeholder="نام"
                placeholderTextColor="#adb4bc"
                style={sajamstyles.inputStyle}
                containerStyle={sajamstyles.item}
                autoFocus
                blurOnSubmit
                onChangeText={text => this.updateValue(text, 'Name')}
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
                containerStyle={sajamstyles.item}
                autoFocus
                blurOnSubmit
                onChangeText={text => this.updateValue(text, 'Father_Name')}
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
                maxLength={11}
                keyboardType="phone-pad"
                containerStyle={sajamstyles.item}
                autoFocus
                blurOnSubmit
                onChangeText={text => this.updateValue(text, 'Phone')}
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
                containerStyle={sajamstyles.item}
                autoFocus
                blurOnSubmit
                onChangeText={text => this.updateValue(text, 'Mail')}
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
                onChangeText={text => this.updateValue(text, 'Bourning_Time')}
              />
              <Image
                source={images.login.dates}
                style={sajamstyles.img}
                resizeMode="contain"
                tintColor={styles.color.ColorGreen}
              />
            </Item>
            <Item style={sajamstyles.itemStyle}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({visible: false});
                }}>
                <Image
                  source={images.login.eye}
                  style={{height: hp(5), width: wp(5), marginLeft: wp(5)}}
                  resizeMode="contain"
                  // tintColor={styles.color.ColorGreen}
                />
              </TouchableOpacity>
              <Input
                placeholder="رمز عبور"
                placeholderTextColor="#adb4bc"
                style={sajamstyles.inputStyle}
                maxLength={10}
                containerStyle={sajamstyles.item}
                multiline={false}
                secureTextEntry={this.state.visible}
                onChangeText={text => this.updateValue(text, 'Password')}
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
                containerStyle={sajamstyles.item}
                multiline={false}
                secureTextEntry={true}
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
            marginBottom: normalize(20, 'height'),
          }}>
          <Text>ثبت نام کرده اید؟</Text>
          <TouchableOpacity>
            <Text color="green" style={{marginRight: 5}}>
              ورود
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <CustomModal
            isVisible={this.state.dialog1}
            title="خطا در ورود اطلاعات"
            describe="رمز عبور نباید کمتر از 8 حرف باشد"
            onConfirm={() => {
              this.setState({dialog1: false});
            }}
          />
          <CustomModal
            isVisible={this.state.dialog2}
            title="خطا در ثبت اطلاعات"
            describe="رمز ورود و تکرار آن یکسان نیستند"
            onConfirm={() => {
              this.setState({dialog2: false});
            }}
          />
          <CustomModal
            isVisible={this.state.dialog4}
            title="خطا در ورود اطلاعات"
            describe="نام و نام خانوادگی خود را به فارسی تایپ کنید"
            onConfirm={() => {
              this.setState({dialog4: false});
            }}
          />
          <CustomModal
            isVisible={this.state.dialog5}
            title="خطا در ورود اطلاعات"
            describe="شماره تماس خود را به درستی وارد کنید"
            onConfirm={() => {
              this.setState({dialog5: false});
            }}
          />
          <CustomModal
            isVisible={this.state.dialog6}
            title="خطا در ورود اطلاعات"
            describe="ایمیل خود را درست وارد کنید"
            onConfirm={() => {
              this.setState({dialog6: false});
            }}
          />
          <CustomModal
            isVisible={this.state.dialog3}
            title="ثبت نام اولیه شما با موفقیت انجام شد"
            describe="برای انجام معاملات، پس از ورود، ابتدا از بخش احراز حویت، حویت خود را تایید کنید."
            onConfirm={() => {
              this.setState({dialog3: false});
            }}
          />
        </View>
      </Container>
    );
  }
}
export default connect(null, null)(SignInScreen);
const sajamstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f2f6',
    justifyContent: 'center',
  },
  img: {height: hp(3), width: wp(3)},
  img2: {height: hp(3.4), width: wp(3.4)},
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
    flex: 0.12,
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
