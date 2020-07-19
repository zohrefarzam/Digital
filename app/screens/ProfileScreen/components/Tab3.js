import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Button } from 'react-native-elements';
import normalize from 'react-native-normalize';
import AsyncStorage from '@react-native-community/async-storage';
import styles from '../../../config/styles';
import { Text } from '../../../utils/Kit';
import ShabaCard from '../../../components/ShabaCard';
import LinearGradient from 'react-native-linear-gradient';
import CustomModal from '../../../components/CustomModal';
let data = [
  {
    value: 'بانک ملی ایران',
  },
  {
    value: 'بانک سپه',
  },
  {
    value: 'بانک توسعه صادرات',
  },
  {
    value: 'بانک صنعت و معدن',
  },
  {
    value: 'بانک کشاورزی',
  },
  {
    value: 'بانک مسکن',
  },
  {
    value: 'پست بانک ایران',
  },
  {
    value: 'بانک توسعه تعاون',
  },
  {
    value: 'بانک اقتصاد نوین',
  },
  {
    value: 'ملّی ایران',
  },
  {
    value: 'بانک پارسیان',
  },
  {
    value: 'بانک پاسارگاد',
  },
  {
    value: 'بانک کارآفرین',
  },
  {
    value: 'بانک سامان',
  },
  {
    value: 'بانک سینا',
  },
  {
    value: 'بانک سرمایه',
  },
  {
    value: 'بانک تات',
  },
  {
    value: 'بانک شهر',
  },
  {
    value: 'بانک دی',
  },
  {
    value: 'بانک صادرات',
  },
  {
    value: 'بانک ملت',
  },
  {
    value: 'بانک تجارت',
  },
  {
    value: 'بانک رفاه',
  },
  {
    value: 'بانک انصار',
  },
  {
    value: 'بانک مهر اقتصاد',
  },
]

export default class Tab3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialog1: false,
      dialog2: false,
      Bank: '',
      ShabaNum: '',
      name:'',
      id:'',
    };
  }
  async componentWillMount() {
    const name = await AsyncStorage.getItem('name');
    const id = await AsyncStorage.getItem('id');
    this.setState({name: name});
    this.setState({id: id});
  }
  updateBank = Bank => this.setState({ Bank: Bank.value });
  Add = () => {
    const { Bank, ShabaNum ,name,id} = this.state
    alert(id+"")

    if (!/[IR]/g.test(ShabaNum) || /[d d]/g.test(ShabaNum)) {
      this.setState({ dialog2: true });
    }
    else{
      fetch('https://jimbooexchange.com/php_api/insert_shaba.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
        },
        body: `Bank_Name=${Bank}&Shaba_Num =${
          ShabaNum
        }&User_Name=${name}&User_Id=${id}&Bank_Id=${id}`, // <-- Post parameters
      });
    }
    this.setState({ dialog1: false });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ marginVertical: hp(2), marginHorizontal: wp(5) }}>
          <Text size="norm">
            {' '}
            برای فروش ارز باید یک شماره شبا به نام خودتان ثبت نمایید.
          </Text>
          <View style={{ marginTop: hp(3), marginHorizontal: wp(25) }}>
            <Button
              TouchableComponent={TouchableOpacity}
              ViewComponent={LinearGradient} // Don't forget this!
              title="ثبت شبا جدید"
              containerStyle={style.shadow}
              buttonStyle={style.btn}
              titleStyle={style.medium}
              linearGradientProps={{
                colors: [styles.color.ColorGreen, styles.color.ColorGreenFos],
                start: { x: 0, y: 0.5 },
                end: { x: 1, y: 0.5 },
              }}
              onPress={() => this.setState({ dialog1: true })}
            />
          </View>
          <View style={{ marginTop: hp(7) }}>
            <ShabaCard />
          </View>
        </View>
        <CustomModal isVisible={this.state.dialog1} onConfirm={() => this.Add()} title='افزودن شماره شبای جدید' picker data={data} value={this.state.Bank} onChangeSelect={this.updateBank} input onChangeText={r => this.setState({ ShabaNum: r })} />
        <CustomModal isVisible={this.state.dialog2} onConfirm={() => this.setState({ dialog2: false })} title='خطا در وارد کردن اطلاعات' describe='شماره شبا را به همراه IR و بدون فاصله وارد نمایید' />
      </View>
    );
  }
}
const style = StyleSheet.create({
  btn: { borderRadius: 30 },
  medium: { fontSize: normalize(16), fontFamily: 'IRANSansMobile' },
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
  btnView: { marginHorizontal: wp(30), flex: 1 },
});
