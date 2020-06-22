import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Text, TextNumber} from '../utils/Kit';
import styles from '../config/styles';
import images from '../config/images';
import {persianNumber} from '../lib/persian';
import normalize from 'react-native-normalize';
export default class RecieveCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <View style={style.main}>
          <View style={style.card}>
            <View style={style.titleView}>
              <Text style={style.title}>دریافت میکنید</Text>
            </View>
            <View style={style.js}>
              <View style={style.right}>
                <Text style={style.number}>{persianNumber('0/05')}</Text>
              </View>
              <View style={style.subView}>
                <Image
                  resizeMode="contain"
                  source={images.example.pm}
                  style={{width: wp(6), height: hp(6)}}
                />
                <View style={{marginRight: wp(3), marginLeft: wp(3)}}>
                  <Text style={[style.grayTxt, {marginRight: wp(2)}]}>
                    پرفکت مانی
                  </Text>
                  <Text style={style.grayTxt}>Perfectmoney</Text>
                </View>
                <Image
                  resizeMode="contain"
                  source={images.global.arrow_down}
                  style={{width: wp(3), height: hp(3)}}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  main: {marginHorizontal: '5%', padding: 20},
  card: {
    borderColor: styles.color.COLOR_DARK_SEPERATOR,
    borderWidth: 2,
    borderRadius: 10,
  },
  titleView: {
    position: 'absolute',
    zIndex: -1,
    right: wp(2),

    marginTop: -normalize(15, 'height'),
    backgroundColor: 'white',
    paddingHorizontal: 5,
    paddingLeft: 10,
  },
  title: {
    color: styles.color.colorText_GrAY,
    backgroundColor: 'white',
    fontSize: normalize(14),
  },
  js: {
    flexDirection: 'row-reverse',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
  },
  right: {alignItems: 'flex-end'},
  number: {margin: 20, fontSize: normalize(25), marginVertical: hp(2)},
  subView: {
    flexDirection: 'row-reverse',
    flexWrap: 'nowrap',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp(2),
  },
  grayTxt: {
    color: styles.color.colorText_GrAY,
    fontSize: normalize(12),
  },
});
