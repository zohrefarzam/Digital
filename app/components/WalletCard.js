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
import {persianNumber} from '../lib/persian';
export default class WalletCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={style.view1}>
        <Image
          source={images.example.bit}
          style={style.img}
          resizeMode="contain"
        />
        <Text size="large" style={[style.txt, {paddingRight: 10}]}>
          <Text size="norm">آدرس : {persianNumber('Ox5168****FR3165')}</Text>
        </Text>

        <Image
          source={images.global.delete}
          style={style.img}
          resizeMode="contain"
        />
      </View>
    );
  }
}
const style = StyleSheet.create({
  view1: {
    backgroundColor: 'white',
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
    //color: styles.color.colorText_GrAY,
    flex: 1.2,
  },
  img: {height: hp(3), width: wp(3), flex: 0.3},
});
