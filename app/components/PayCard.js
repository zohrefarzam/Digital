import React, {Component} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Text, TextNumber} from 'app/utils/Kit';
import styles from 'app/config/styles';
import images from 'app/config/images';
import {persianNumber} from 'app/lib/persian';
import {normalize} from 'react-native-elements';
export default class PayCard extends Component {
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
              <Text style={style.title}>پرداخت میکنید</Text>
            </View>
            <View style={style.js}>
              <View style={style.right}>
                <Text black style={style.number}>
                  {persianNumber('0/03')}
                </Text>
              </View>
              <View style={style.subView}>
                <TouchableOpacity>
                  <Image
                    resizeMode="contain"
                    source={images.example.bit}
                    style={{width: wp(6), height: hp(6)}}
                  />
                </TouchableOpacity>
                <View style={{marginRight: wp(4), marginLeft: wp(8)}}>
                  <Text style={[style.grayTxt]}>بیت کوین</Text>
                  <Text style={[style.grayTxt, {marginRight: wp(0.5)}]}>
                    Bitcoin
                  </Text>
                </View>
                <TouchableOpacity>
                  <Image
                    resizeMode="contain"
                    source={images.global.arrow_down}
                    style={{width: wp(3), height: hp(3)}}
                  />
                </TouchableOpacity>
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
<<<<<<< HEAD

    bottom: hp(8.5),
=======
    marginTop: -normalize(15, 'height'),
>>>>>>> fd9b092f822b250d16c21ce69af351420213358f
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
  number: {
    margin: 20,
    fontSize: normalize(25),
    marginVertical: hp(2),
    // color: styles.color.colorText_GrAY,
  },
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
