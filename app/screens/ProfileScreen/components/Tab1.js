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
import RNFetchBlob from 'rn-fetch-blob';
export default class Tab3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      ImageSource: null,
      name: '',
      id: '',
      data: null,
    };
  }
  async componentWillMount() {
    const name = await AsyncStorage.getItem('name');
    const id = await AsyncStorage.getItem('id');
    this.setState({name: name});
    this.setState({id: id});
    this.loadingData();
  }
  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.uri};

        this.setState({
          ImageSource: source,
          data: response.data,
        });
      }
    });
  }
  uploadImageToServer = () => {
    const {name, id} = this.state;
    RNFetchBlob.fetch(
      'POST',
      'https://jimbooexchange.com/php_api/insert_meli.php',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
        },
        body: `Time =${1234}&Pic_Link=${
          this.state.ImageSource
        }&User_Name=${name}&User_Id=${id}`, // <-- Post parameters
      },
    )
      .then(resp => {
        var tempMSG = resp.data;

        tempMSG = tempMSG.replace(/^"|"$/g, '');

        Alert.alert(tempMSG);
      })
      .catch(err => {
        // ...
      });
  };

  async componentWillMount() {
    const phone = await AsyncStorage.getItem('phone');
    this.setState({phone: phone});
  }
  render() {
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
          <View style={{marginTop: hp(3)}}>
            <View style={{flexDirection: 'row-reverse', flexWrap: 'nowrap'}}>
              <View style={style.imageView}>
                <Image
                  source={images.global.no_pic}
                  style={style.image}
                  resizeMode="contain"
                />
              </View>
              <Button
                TouchableComponent={TouchableOpacity}
                ViewComponent={LinearGradient} // Don't forget this!
                title="ارسال عکس کارت ملی"
                containerStyle={style.shadow}
                buttonStyle={style.btn}
                titleStyle={style.medium}
                linearGradientProps={{
                  colors: [styles.color.ColorGreen, styles.color.ColorGreenFos],
                  start: {x: 0, y: 0.5},
                  end: {x: 1, y: 0.5},
                }}
              />
            </View>
          </View>
          <View style={{marginTop: hp(3)}}>
            <View style={{flexDirection: 'row-reverse', flexWrap: 'nowrap'}}>
              <View style={style.imageView}>
                <Image
                  source={images.global.no_pic}
                  style={style.image}
                  resizeMode="contain"
                />
              </View>
              <Button
                TouchableComponent={TouchableOpacity}
                ViewComponent={LinearGradient} // Don't forget this!
                title="ارسال عکس سلفی"
                containerStyle={style.shadow}
                buttonStyle={[style.btn]}
                titleStyle={style.medium}
                linearGradientProps={{
                  colors: [styles.color.ColorGreen, styles.color.ColorGreenFos],
                  start: {x: 0, y: 0.5},
                  end: {x: 1, y: 0.5},
                }}
              />
            </View>
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
                <Text>{persianNumber(this.state.phone)}</Text>
              </View>
              <Button
                TouchableComponent={TouchableOpacity}
                ViewComponent={LinearGradient} // Don't forget this!
                title="ارسال SMS"
                containerStyle={style.shadow}
                buttonStyle={style.btn}
                titleStyle={style.medium}
                linearGradientProps={{
                  colors: [styles.color.ColorGreen, styles.color.ColorGreenFos],
                  start: {x: 0, y: 0.5},
                  end: {x: 1, y: 0.5},
                }}
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
  },
  image: {height: hp(5), width: wp(40)},
});
