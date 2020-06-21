import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../../../config/styles';
import {Text} from '../../../utils/Kit';
import normalize from 'react-native-normalize';
export default class Tab3 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{marginVertical: hp(2), marginHorizontal: wp(5)}}>
          <Text size="norm">
            {' '}
            برای احراز هویت باید عکس کارت ملی خود را آپلود نمایید.
          </Text>
          <View style={{marginTop: hp(3), marginHorizontal: wp(25)}}>
            <Button
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
          <View style={{marginTop: hp(4)}}>
            <View style={{alignItems: 'center', marginBottom: hp(1)}}>
              <Text ize="norm" style={{color: styles.color.ColorGreen}}>
                تایید شده
              </Text>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 20,
                borderColor: 'gray',
                borderWidth: 2,
                height: hp(25),
                marginHorizontal: hp(1),
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  btn: {borderRadius: 30},
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
  },
  btnView: {marginHorizontal: wp(30), flex: 1},
});
