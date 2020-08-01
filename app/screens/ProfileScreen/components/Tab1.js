import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
  UIManager,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Button, Image} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import AutoHeightWebView from 'react-native-autoheight-webview';
import styles from '../../../config/styles';
import {Text} from '../../../utils/Kit';
import normalize from 'react-native-normalize';
import images from '../../../config/images';
import AsyncStorage from '@react-native-community/async-storage';
import {persianNumber} from '../../../lib/persian';
import ImagePicker from 'react-native-image-picker';
import {Item, Input} from 'native-base';
import {number} from 'prop-types';
import CustomModal from '../../../components/CustomModal';
import {picker} from './ImagePicker';
import {uploader} from './Uploader';
import RNFetchBlob from 'react-native-fetch-blob';
import moment from 'moment-jalaali';
export default class Tab3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      ImageSource: null,
      ImageSource2: null,
      Image_TAG: '',
      data2: null,
      name: '',
      time: '',
      id: '',
      txt: '',
      Meli: null,
      data: null,
      rand: Math.floor(1000 + Math.random() * 9000),
      btn: 'ارسال SMS',
      btn2: 'عکس کارت ملی',
      btn3: 'عکس سلفی',
      dialog1: false,
      dialog2: false,
      dialog3: false,
    };
  }
  async componentWillMount() {
    const name = await AsyncStorage.getItem('name');
    const id = await AsyncStorage.getItem('id');
    const phone = await AsyncStorage.getItem('phone');
    this.setState({name: name});
    this.setState({id: id});
    this.setState({phone: phone});
  }
  selectPhotoTapped() {
    picker((source, data) =>
      this.setState({ImageSource: source, data}, () => {
        console.log(this.state);
      }),
    );
    this.setState({btn2: 'ارسال عکس کارت ملی'});
  }
  selectPhotoTapped2() {
    picker((source2, data2) =>
      this.setState({ImageSource2: source2, data2}, () => {
        console.log(this.state);
      }),
    );
    this.setState({btn3: 'ارسال عکس سلفی'});
  }
  uploadImageToServer = () => {
    const {name, id} = this.state;
    const date = persianNumber(moment().format('jYYYY/jM/jD hh:mm:ss '));
    RNFetchBlob.fetch(
      'POST',
      'https://jimbooexchange.com/php_api/upload_image.php',
      {
        Authorization: 'Bearer access-token',
        otherHeader: 'foo',
        'Content-Type': 'multipart/form-data',
      },
      [
        {
          name: 'photo',
          filename: 'image.png',
          type: 'image/png',
          data: this.state.data,
        },
      ],
    ).then(resp => {
      var tempMSG = resp.data;
      tempMSG = tempMSG.replace(/^"|"$/g, '');
      this.setState({Meli: tempMSG});
      console.log(tempMSG);
      fetch('https://jimbooexchange.com/php_api/insert_meli.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
        },
        body: `User_Name=${name}&User_Id=${id}&Time=${date}&Pic_Link=${tempMSG}&kind=${'meli'}`,
      });
    });
  };
  uploadImageToServer2 = () => {
    const {name, id} = this.state;
    const date = persianNumber(moment().format('jYYYY/jM/jD hh:mm:ss '));
    RNFetchBlob.fetch(
      'POST',
      'https://jimbooexchange.com/php_api/upload_image.php',
      {
        Authorization: 'Bearer access-token',
        otherHeader: 'foo',
        'Content-Type': 'multipart/form-data',
      },
      [
        {
          name: 'photo',
          filename: 'image.png',
          type: 'image/png',
          data: this.state.data2,
        },
      ],
    ).then(resp => {
      var tempMSG = resp.data;
      tempMSG = tempMSG.replace(/^"|"$/g, '');
      this.setState({Meli: tempMSG});
      console.log(tempMSG);
      fetch('https://jimbooexchange.com/php_api/insert_selfi.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
        },
        body: `User_Name=${name}&User_Id=${id}&Time=${date}&Pic_Link=${tempMSG}&kind=${'selfi'}`,
      });
    });
  };
  onSubmit2 = () => {
    const {btn2} = this.state;
    switch (btn2) {
      case 'عکس کارت ملی':
        return this.selectPhotoTapped();
      case 'ارسال عکس کارت ملی':
        this.uploadImageToServer();
      default:
        break;
    }
  };
  onSubmit3 = () => {
    const {btn3} = this.state;
    switch (btn3) {
      case 'عکس سلفی':
        return this.selectPhotoTapped2();
      case 'ارسال عکس سلفی':
        this.uploadImageToServer2();
      default:
        break;
    }
  };
  SendCode = () => {
    const {phone, rand} = this.state;
    fetch('https://jimbooexchange.com/php_api/send_sms.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
      },
      body: `code=${rand}&theme=${29440}&phone=${phone}`, // <-- Post parameters
    });
    this.setState({btn: 'تایید کد احراز هویت', phone: ''});
    this.setState({dialog1: true});
  };
  ConfirmCode = () => {
    const {phone, rand} = this.state;
    const numb = parseInt(phone);
    if (rand !== numb) {
      this.setState({dialog2: true});
    } else {
      this.setState({dialog3: true});
    }
  };
  onSubmit = () => {
    const {btn} = this.state;
    switch (btn) {
      case 'ارسال SMS':
        return this.SendCode();
      case 'تایید کد احراز هویت':
        this.ConfirmCode();
      default:
        break;
    }
  };
  render() {
    const image =
      this.state.ImageSource === null ? (
        <Image
          source={images.global.no_pic}
          style={style.image}
          resizeMode="contain"
        />
      ) : (
        <Image
          source={this.state.ImageSource}
          style={style.image}
          resizeMode="contain"
        />
      );
    const image2 =
      this.state.ImageSource2 === null ? (
        <Image
          source={images.global.no_pic}
          style={style.image}
          resizeMode="contain"
        />
      ) : (
        <Image
          source={this.state.ImageSource2}
          style={style.image}
          resizeMode="contain"
        />
      );
    return (
      <View style={{flex: 1}}>
        <View style={{marginVertical: hp(2), marginHorizontal: wp(5)}}>
          <Text size="norm"> احراز حویت کارت ملی و شماره همراه</Text>
          {/* <AutoHeightWebView
            style={{
              marginVertical: 10,
              width: Dimensions.get('window').width - 70,
              alignSelf: 'center',
            }}
            customStyle={`
                @font-face {font-family: 'IRANSansMobile'; src:url('file:///android_asset/fonts/IRANSansMobile.ttf')}
                body {
                  font-family: IRANSansMobile;
                  font-size: 0.9rem;
                  
                  text-align: justify;
                  direction: rtl;
                }
              `}
            onSizeUpdated={size => console.log('size', size)}
            files={[
              {
                href: 'cssfileaddress',
                type: 'text/css',
                rel: 'stylesheet',
              },
            ]}
            source={{
              html: `
                <body>
                دست نویسی با متن «اینجانب (نام و نام خانوادگی) به کد ملی (کد ملی) ضمن مطالعه و تایید قوانین استفاده از خدمات جیمبو متعهد میگردم حساب کاربری و مدارک خود را در اختیار اشخاص غیر قرار ندهم و در صورت تخلف، مسئولیت آن را بر عهده بگیرم.جهت احراز حویت در سایت جیمبو - تاریخ - امضاء» تهیه کرده و به همراه کارت ملی خود و تصویر خود و دستنویس خود عکسی سلفی بگیرید. توجه داشته باشید که تصویر شما، کارت ملی و دست نویس همگی واضح باشند و در سایت بارگزاری نمایید.s
                </body>`,
            }}
            // scalesPageToFit={true}
            viewportContent={'width=device-width, initial-scale=1.0'}
          /> */}
          <View
            style={{
              marginTop: hp(3),
              flexDirection: 'row-reverse',
              flexWrap: 'nowrap',
              alignItems: 'center',
            }}>
            <View>
              <View style={style.imageView}>{image}</View>
            </View>
            <Button
              TouchableComponent={TouchableOpacity}
              ViewComponent={LinearGradient} // Don't forget this!
              title={this.state.btn2}
              containerStyle={style.shadow}
              buttonStyle={style.btn}
              titleStyle={style.medium}
              linearGradientProps={{
                colors: [styles.color.ColorGreen, styles.color.ColorGreenFos],
                start: {x: 0, y: 0.5},
                end: {x: 1, y: 0.5},
              }}
              onPress={() => this.onSubmit2()}
            />
          </View>
          <View
            style={{
              marginTop: hp(3),
              flexDirection: 'row-reverse',
              flexWrap: 'nowrap',
              alignItems: 'center',
            }}>
            <View>
              <View style={style.imageView}>{image2}</View>
            </View>
            <Button
              TouchableComponent={TouchableOpacity}
              ViewComponent={LinearGradient} // Don't forget this!
              title={this.state.btn3}
              containerStyle={style.shadow}
              buttonStyle={[style.btn]}
              titleStyle={style.medium}
              linearGradientProps={{
                colors: [styles.color.ColorGreen, styles.color.ColorGreenFos],
                start: {x: 0, y: 0.5},
                end: {x: 1, y: 0.5},
              }}
              onPress={() => this.onSubmit3()}
            />
          </View>
          <View style={{marginTop: hp(3)}}>
            <View style={{flexDirection: 'row-reverse', flexWrap: 'nowrap'}}>
              <View
                style={[
                  style.imageView,
                  {
                    justifyContent: 'center',
                    width: wp(40),
                    alignItems: 'center',
                  },
                ]}>
                <Item rounded style={{height: hp(5)}}>
                  <Input
                    style={{fontFamily: 'IRANSansMobile'}}
                    value={this.state.phone}
                    onChangeText={r => this.setState({phone: r})}
                  />
                </Item>
                {/* <Text>{persianNumber(this.state.phone)}</Text> */}
              </View>
              <Button
                TouchableComponent={TouchableOpacity}
                ViewComponent={LinearGradient} // Don't forget this!
                title={this.state.btn}
                containerStyle={style.shadow}
                buttonStyle={style.btn}
                titleStyle={style.medium}
                linearGradientProps={{
                  colors: [styles.color.ColorGreen, styles.color.ColorGreenFos],
                  start: {x: 0, y: 0.5},
                  end: {x: 1, y: 0.5},
                }}
                onPress={() => this.onSubmit()}
              />
            </View>
          </View>
          {/* <View style={{marginTop: hp(4)}}>
            <View style={{alignItems: 'center', marginBottom: hp(1)}}>
              <Text ize="norm" style={{color: styles.color.ColorGreen}}>
                تایید شده
              </Text>
            </View>
           
          </View> */}
        </View>
        <CustomModal
          isVisible={this.state.dialog1}
          onConfirm={() => this.setState({dialog1: false})}
          title="ارسال شد"
          describe="کد احراز حویت با موفقیت ارسال شد"
        />
        <CustomModal
          isVisible={this.state.dialog2}
          onConfirm={() => this.setState({dialog2: false})}
          title="خطا "
          describe="کد احراز حویت ناصحیح می باشد"
        />
        <CustomModal
          isVisible={this.state.dialog2}
          onConfirm={() => this.setState({dialog2: false})}
          title="خطا "
          describe="کد احراز حویت ناصحیح می باشد"
        />
        <CustomModal
          isVisible={this.state.dialog3}
          onConfirm={() => this.setState({dialog3: false})}
          title="انجام شد"
          describe=" احراز حویت شما با موفقیت انجام شد"
        />
      </View>
    );
  }
}
const style = StyleSheet.create({
  btn: {borderRadius: 30, width: wp(45)},
  medium: {fontSize: normalize(16), fontFamily: 'IRANSansMobile'},
  shadow: {
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    borderRadius: 30,
    width: wp(45),
  },
  btnView: {marginHorizontal: wp(30), flex: 1},
  imageView: {
    borderRadius: 20,
    borderColor: 'gray',
    borderWidth: 2,
    marginHorizontal: hp(1),
    paddingHorizontal: 10,
  },
  image: {height: hp(12), width: wp(35), resizeMode: 'cover'},
});
