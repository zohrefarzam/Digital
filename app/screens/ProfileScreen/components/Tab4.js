import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../../../config/styles';
import {Text} from '../../../utils/Kit';
import BankCard from '../../../components/BankCard';
import normalize from 'react-native-normalize';
import CustomModal from '../../../components/CustomModal';
import {persianNumber} from '../../../lib/persian';
import AsyncStorage from '@react-native-community/async-storage';
export default class Tab4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialog1: false,
      bankNum: '',
      bankName: '',
      name: '',
      id: '',
    };
  }
  async componentWillMount() {
    const name = await AsyncStorage.getItem('name');
    const id = await AsyncStorage.getItem('id');
    this.setState({name: name});
    this.setState({id: id});
  }
  renderBankName = () => {
    const {bankNum} = this.state;
    const Six = Math.abs(bankNum.slice(0, 6));
    switch (Six) {
      case 603799:
        return 'بانک ملی ایران';
      case 589210:
        return 'بانک سپه';
      case 627648:
        return 'بانک توسعه صادرات';
      case 627961:
        return 'بانک صنعت و معدن';
      case 603770:
        return 'بانک کشاورزی';
      case 628023:
        return 'بانک مسکن';
      case 627760:
        return 'پست بانک ایران';
      case 502908:
        return 'بانک توسعه تعاون';
      case 627412:
        return 'بانک اقتصاد نوین';
      case 622106:
        return 'بانک پارسیان';
      case 502229:
        return 'بانک پاسارگاد';
      case 627488:
        return 'بانک کارآفرین';
      case 621986:
        return 'بانک سامان';
      case 639346:
        return 'بانک سینا';
      case 639607:
        return 'بانک سرمایه';
      case 636214:
        return 'بانک تات';
      case 502806:
        return 'بانک شهر';
      case 502938:
        return 'بانک دی';
      case 603769:
        return 'بانک صادرات';
      case 610433:
        return 'بانک ملت';
      case 627353:
        return 'بانک تجارت';
      case 589463:
        return 'بانک رفاه';
      case 627381:
        return 'بانک انصار';
      case 639370:
        return 'بانک مهر اقتصاد';
      default:
        break;
    }
  };
  Add = () => {
    fetch('https://jimbooexchange.com/php_api/insert_creadit_card.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
      },
      body: `Bank_Name=${this.renderBankName()}&Card_Num=${
        this.state.bankNum
      }&User_Name=${this.state.name}&User_Id=${this.state.id}`, // <-- Post parameters
    });
    this.setState({dialog1: false});
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{marginVertical: hp(2), marginHorizontal: wp(5)}}>
          <Text size="norm">
            {' '}
            برای خرید ارز باید یک کارت بانکی به نام خودتان ثبت کنید.{' '}
          </Text>
          <View style={{marginTop: hp(3), marginHorizontal: wp(25)}}>
            <Button
              TouchableComponent={TouchableOpacity}
              ViewComponent={LinearGradient} // Don't forget this!
              title="ثبت کارت جدید"
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
            <BankCard />
          </View>
          <CustomModal
            isVisible={this.state.dialog1}
            title="وارد کردن شماره کارت"
            input
            onChangeText={t => this.setState({bankNum: t})}
            onConfirm={() => this.Add()}
          />
          <Text>{this.renderBankName()}</Text>
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
