import React, {Component} from 'react';
import {View, StyleSheet, StatusBar, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Item, Input} from 'native-base';
import normalize from 'react-native-normalize';
import {Text} from 'app/utils/Kit';
import styles from 'app/config/styles';
import {TextNumber} from '../../utils/Kit';
import {Button, Icon} from 'react-native-elements';
import images from 'app/config/images';
import PriceCard1 from 'app/components/PriceCard1';
import PriceCard2 from 'app/components/PriceCard2';
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
              style={style.img}
              resizeMode="contain"
              tintColor={styles.color.ColorGreen}
            />
          </Item>
          <View style={style.view1}>
            <View style={style.view2}>
              <Text style={style.txt}>تغییرات</Text>
              <Text style={style.txt}>قیمت به دلار</Text>
              <Text style={style.txt}>قیمت به ریال</Text>
              <Text style={style.txt}>نماد ارز</Text>
              <Text style={style.txt}>نام ارز</Text>
              <Text style={style.txt}>تصویر</Text>
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
    marginTop: hp(3),
    marginBottom: hp(2),
  },
  mh: {marginHorizontal: wp(2)},
  view1: {
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 25,
    height: hp(6.5),
    marginVertical: hp(2),
  },
  view2: {
    borderRadius: 25,
    backgroundColor: styles.color.ColorGray,
    height: hp(4.7),
    margin: 5,
    marginBottom: 10,
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
    paddingHorizontal: wp(2.5),
    fontSize: normalize(13),
  },
});
