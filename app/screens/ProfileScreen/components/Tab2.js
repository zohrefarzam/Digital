import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Button} from 'react-native-elements';
import normalize from 'react-native-normalize';
import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../../../config/styles';
import {Text} from '../../../utils/Kit';
import WalletCard from '../../../components/WalletCard';
import CustomModal from '../../../components/CustomModal';
let data = [
  {
    value: 'بیت کوین',
  },
  {
    value: 'بیت کوین کش',
  },
  {
    value: 'زد کش',
  },
  {
    value: 'ریبل',
  },
  {
    value: 'استالر',
  },
  {
    value: 'ترون',
  },
  {
    value: 'مونرو',
  },
  {
    value: 'لایت کوین',
  },
  {
    value: 'اتریوم',
  },
  {
    value: 'دوج کوین',
  },
  {
    value: 'دش کوین',
  },
  {
    value: 'تتر',
  },
];

export default class Tab2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialog1: false,
      dialog2: false,
      wallet: '',
      code: '',
      digital: '',
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
  renderWallet = () => {
    const {digital} = this.state;
    switch (digital) {
      case 'بیت کوین':
        return 'btc';
      case 'بیت کوین کش':
        return 'bch';
      case 'زد کش':
        return 'zec';
      case 'ریبل':
        return 'xrp';
      case 'استالر':
        return 'xlm';
      case 'ترون':
        return 'trx';
      case 'مونرو':
        return 'xmr';
      case 'لایت کوین':
        return 'ltc';
      case 'اتریوم':
        return 'eth';
      case 'دوج کوین':
        return 'doge';
      case 'دش کوین':
        return 'dash';
      case 'تتر':
        return 'usdt';
      default:
        break;
    }
  };
  updateDigital = digital => this.setState({digital: digital.value});
  Add = () => {
    const {wallet, code, digital, name, id} = this.state;
    if (wallet.length === 0 || code.length === 0) {
      this.setState({dialog2: true});
    } else {
      fetch('https://jimbooexchange.com/php_api/insert_wallet.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
        },
        body: `Wallet_Name=${digital}&Wallet_Coin=${this.renderWallet()}&Wallet_Lable=${wallet}&Wallet_Code=${code}&User_Name=${name}&User_Id=${id}`, // <-- Post parameters
      });
    }
    this.setState({dialog1: false});
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{marginVertical: hp(2), marginHorizontal: wp(5)}}>
          <Text size="norm">
            برای خرید ارز باید آدرس کیف پول خود را ثبت نمایید.
          </Text>
          <View style={{marginTop: hp(3), marginHorizontal: wp(25)}}>
            <Button
              TouchableComponent={TouchableOpacity}
              ViewComponent={LinearGradient} // Don't forget this!
              title="ثبت کیف پول جدید"
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
            <WalletCard />
          </View>
        </View>
        <CustomModal
          isVisible={this.state.dialog1}
          onConfirm={() => this.Add()}
          title="افزودن کیف پول"
          picker
          data={data}
          value={this.state.digital}
          onChangeSelect={this.updateDigital}
          input
          input2
          place1="نام کیف پول را اینجا وارد کنید"
          place2="کد کیف پول را اینجا وارد کنید"
          onChangeText={r => this.setState({wallet: r})}
          onChangeText2={r => this.setState({code: r})}
        />
        <CustomModal
          isVisible={this.state.dialog2}
          onConfirm={() => this.setState({dialog2: false})}
          title="خطا در وارد کردن اطلاعات"
        />
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
