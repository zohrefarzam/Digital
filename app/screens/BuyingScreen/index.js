import React, {Component} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from 'react-native-elements';
import normalize from 'react-native-normalize';
import {Text} from '../../utils/Kit';
import styles from '../../config/styles';
import PayCard from '../../components/PayCard';
import RecieveCard from '../../components/RecieveCard';
import {TextNumber} from '../../utils/Kit';

export default class BuyingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={style.main}>
        <StatusBar hidden={true} />
        <View style={style.logoCon}>
          <Text style={style.title}>لوگو </Text>
        </View>
        <View>
          <PayCard />
        </View>
        <View style={style.txtView}>
          <Text size="large" style={[style.grayTxt, style.normal]}>
            <TextNumber black>923.6</TextNumber>
            <Text style={style.black}>دلار </Text>
            <Text>نرخ بین المللی ارز </Text>
            <TextNumber black>22500</TextNumber>
            <Text style={style.black}>ریال </Text>
            هزینه انتقال
          </Text>
        </View>
        <View>
          <RecieveCard />
        </View>
        <View style={style.center}>
          <Text
            style={[
              style.grayTxt,
              style.normal,
              {paddingRight: wp(8), paddingBottom: hp(1)},
            ]}>
            قیمت هر واحد
          </Text>
          <View style={style.rowRev}>
            <Text style={style.normal}>BTC1 = </Text>
            <TextNumber style={style.normal}>1400000000</TextNumber>
            <Text style={style.normal}>ریال{'  '}</Text>
          </View>
        </View>
        <View style={style.btnView}>
          <Button
            ViewComponent={LinearGradient} // Don't forget this!
            title="ثبت درخواست"
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
    );
  }
}
const style = StyleSheet.create({
  main: {flex: 1, backgroundColor: 'white'},
  logoCon: {alignItems: 'center', marginVertical: normalize(50, 'height')},
  title: {color: styles.color.colorText_GrAY, fontSize: normalize(45)},
  grayTxt: {color: styles.color.colorText_GrAY},
  //normal: {fontSize: 16},
  txtView: {marginRight: wp(17), marginVertical: normalize(1, 'height')},
  black: {color: 'black'},
  center: {alignSelf: 'center'},
  rowRev: {flexDirection: 'row-reverse', flexWrap: 'nowrap'},
  btn: {borderRadius: normalize(25), paddingVertical: hp(1)},
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
  btnView: {marginHorizontal: wp(10), marginTop: normalize(20, 'height')},
});
