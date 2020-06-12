import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import {Text} from 'app/utils/Kit';
import styles from 'app/config/styles';
import {TextNumber} from 'app/utils/Kit';
import images from 'app/config/images';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {persianNumber} from 'app/lib/persian';
import {Thumbnail} from 'native-base';
import {normalize} from 'react-native-elements';
export default class PriceCard1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={style.view1}>
        <View style={style.view2}>
          <View>
            <Text style={style.title}>خطرات امنیتی برای تغییر صاحبان</Text>

            <View style={style.fe}>
              <Text style={style.greenTxt}>بیشتر بدانید</Text>
              <TouchableOpacity>
                <Image
                  source={images.global.arrow_back}
                  style={style.img2}
                  tintColor={styles.color.ColorGreen}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>

          <Thumbnail
            source={images.example.web2}
            style={style.thumb}
            resizeMode="contain"
          />
        </View>
        <View style={style.position}>
          <LinearGradient
            colors={[styles.color.ColorOrange, styles.color.ColorPink]}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            style={style.radius}>
            <View style={style.view3}>
              <Image
                source={images.global.calender}
                style={style.img}
                resizeMode="contain"
              />
              <Text style={style.date}>
                مهر <Text style={style.date}>{persianNumber(1398)}</Text>,
                <TextNumber>15</TextNumber>
              </Text>
            </View>
          </LinearGradient>
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  view1: {
    marginHorizontal: wp(2),
    borderWidth: 1,
    borderColor: styles.color.colorText_GrAY,
    borderRadius: 20,
    marginBottom: hp(2),
    paddingHorizontal: wp(2),
  },
  txt: {
    color: styles.color.colorText_GrAY,
    flex: 1,
    fontSize: normalize(13),
  },
  title: {
    fontSize: normalize(14),
    color: styles.color.colorText_GrAY,
    marginBottom: hp(4),
  },
  view2: {
    flexDirection: 'row-reverse',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  greenTxt: {
    color: styles.color.ColorGreen,
    fontSize: normalize(14),
    marginLeft: 5,
  },
  fe: {
    flexDirection: 'row-reverse',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  position: {position: 'absolute', bottom: -hp(2), right: 20},
  radius: {borderRadius: 40},
  img: {width: wp(3), height: hp(3)},
  view3: {
    flexDirection: 'row-reverse',
    flexWrap: 'nowrap',
    paddingHorizontal: wp(5),
    alignItems: 'center',
    paddingVertical: hp(0.8),
  },
  date: {color: 'white', fontSize: normalize(14), marginRight: 5},
  thumb: {width: wp(30), height: hp(20)},
  img2: {width: wp(3), height: hp(3)},
});
