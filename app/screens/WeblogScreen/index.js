import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Content} from 'native-base';
import {Text} from '../../utils/Kit';
import styles from '../../config/styles';
import normalize from 'react-native-normalize';
import images from '../../config/images';
import WebCard1 from '../../components/WebCard1';
export default class WeblogScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={style.main}>
        <View style={style.titleView}>
          <Text style={style.title}> لوگو</Text>
          <Image
            source={images.global.search}
            style={style.img}
            resizeMode="contain"
          />
        </View>
        <Content>
          <WebCard1 />
        </Content>
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
  },
  titleView: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: wp(10),
    marginLeft: wp(45),
    marginVertical: hp(3),
  },

  img: {height: hp(6), width: wp(6)},
  txt: {
    color: styles.color.colorText_GrAY,
    paddingHorizontal: wp(2.5),
  },
});
