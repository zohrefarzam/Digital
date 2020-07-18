import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Button} from 'react-native-elements';
import normalize from 'react-native-normalize';
import styles from '../../../config/styles';
import {Text} from '../../../utils/Kit';
import ShabaCard from '../../../components/ShabaCard';
import LinearGradient from 'react-native-linear-gradient';
import CustomModal from '../../../components/CustomModal';
export default class Tab3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialog1: false,
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{marginVertical: hp(2), marginHorizontal: wp(5)}}>
          <Text size="norm">
            {' '}
            برای فروش ارز باید یک شماره شبا به نام خودتان ثبت نمایید.
          </Text>
          <View style={{marginTop: hp(3), marginHorizontal: wp(25)}}>
            <Button
              TouchableComponent={TouchableOpacity}
              ViewComponent={LinearGradient} // Don't forget this!
              title="ثبت شبا جدید"
              containerStyle={style.shadow}
              buttonStyle={style.btn}
              titleStyle={style.medium}
              linearGradientProps={{
                colors: [styles.color.ColorGreen, styles.color.ColorGreenFos],
                start: {x: 0, y: 0.5},
                end: {x: 1, y: 0.5},
              }}
              onPress={() => this.setState({dialog1: true})}
            />
          </View>
          <View style={{marginTop: hp(7)}}>
            <ShabaCard />
          </View>
        </View>
        <CustomModal isVisible={this.state.dialog1} picker />
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
