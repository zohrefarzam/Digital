import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Text} from '../utils/Kit';
import styles from '../config/styles';
import {TextNumber} from '../utils/Kit';
import images from '../config/images';

export default class PriceCard1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={style.view1}>
        <Text style={style.txt}>
          <TextNumber percent colored>
            1234
          </TextNumber>
        </Text>
        <Text style={style.txt}>
          <TextNumber dollor>1234</TextNumber>
        </Text>
        <Text style={style.txt}>
          <TextNumber rial>1234</TextNumber>
        </Text>
        <Text style={[style.txt, {flex: 0.5}]}>BTC</Text>
        <Text style={[style.txt, {flex: 0.8}]}>بیت کوین</Text>
        <Image
          source={images.example.pm}
          style={style.img}
          resizeMode="contain"
        />
      </View>
    );
  }
}
const style = StyleSheet.create({
  view1: {
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 25,
    height: hp(6.5),
    marginBottom: hp(2),
    flexDirection: 'row-reverse',
    flexWrap: 'nowrap',
    alignItems: 'center',
    paddingHorizontal: wp(2),
  },
  txt: {
    color: styles.color.colorText_GrAY,
    flex: 1,
  },
  img: {height: hp(9), width: wp(9)},
});
