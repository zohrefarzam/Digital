import React, {Component} from 'react';
import {View, StyleSheet, StatusBar, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Item, Input} from 'native-base';
import normalize from 'react-native-normalize';
import {Text} from '../../utils/Kit';
import styles from '../../config/styles';
import images from '../../config/images';
import PriceCard1 from '../../components/PriceCard1';
export default class PricesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={style.main}>
        <Text style={style.title}> لوگو</Text>
        <View style={style.mh}>
          <Item rounded style={style.item}>
            <Input
              placeholderTextColor={styles.color.COLOR_DARK_SEPERATOR}
              placeholder="جستجو بر اساس نام یا نماد ارز"
              multiline={false}
              numberOfLines={1}
              maxLength={11}
              style={style.input}
            />
            <Image
              source={images.global.search}
              style={[style.img, {tintColor: styles.color.ColorGreen}]}
              resizeMode="contain"
              tintColor={styles.color.ColorGreen}
            />
          </Item>
          <View style={style.view1}>
            <View style={style.view2}>
              <Text style={[style.txt, {flex: 1.3}]}>تغییرات</Text>
              <Text style={[style.txt, {flex: 1.6}]}>قیمت به دلار</Text>
              <Text style={[style.txt, {flex: 1.7}]}>قیمت به ریال</Text>
              <Text style={style.txt}>نماد ارز</Text>
              <Text style={style.txt}>نام ارز</Text>
              <Text style={[style.txt, {flex: 0.7}]}>تصویر</Text>
            </View>
          </View>
          <PriceCard1 />
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  main: {backgroundColor: 'white', flex: 1},
  title: {
    color: styles.color.colorText_GrAY,
    fontSize: normalize(30),
    alignSelf: 'center',
    marginTop: hp(2),
    marginBottom: hp(3),
  },
  mh: {marginHorizontal: wp(2)},
  view1: {
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 25,
    height: hp(6.5),
    marginVertical: hp(2),
    justifyContent: 'center',
    paddingHorizontal: wp(1),
  },
  view2: {
    borderRadius: 25,
    backgroundColor: styles.color.ColorGray,
    height: hp(4.7),
    paddingHorizontal: wp(2),
    //margin: 5,
    //marginBottom:normalize(15,'height') ,
    flexDirection: 'row-reverse',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  item: {
    backgroundColor: 'white',
    height: hp(6.5),
    paddingRight: wp(5),
    borderColor: styles.color.COLOR_DARK_SEPERATOR,
    borderWidth: 2,
    elevation: 1,
  },
  input: {fontFamily: 'IRANSansMobile', fontSize: normalize(14)},
  img: {height: hp(6), width: wp(6)},
  txt: {
    color: styles.color.colorText_GrAY,
    // paddingHorizontal: normalize(10),
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    fontSize: normalize(14),
  },
});
