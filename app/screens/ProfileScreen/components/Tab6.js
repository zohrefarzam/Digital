import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
import AsyncStorage from '@react-native-community/async-storage';
import {Button} from 'react-native-elements';
import {Text} from '../../../utils/Kit';
import {persianNumber} from '../../../lib/persian';
import {Content} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import normalize from 'react-native-normalize';
import styles from '../../../config/styles';
export default class Tab6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      btn: 'ثبت شناسه تراکنش',
      loading: true,
      name: '',
      id: '',
      phone: '',
      mail: '',
      dialog1: false,
      number: '',
      code: '',
      data: {},
    };
  }
  async componentWillMount() {
    const name = await AsyncStorage.getItem('name');
    const id = await AsyncStorage.getItem('id');
    this.setState({name: name});
    this.setState({id: id});
    fetch(
      'https://jimbooexchange.com/php_api/get_transaction_by_user_id_and_user_name.php',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
        },
        body: `Id=${id}&User_Name=${name}`, // <-- Post parameters
      },
    )
      .then(res => res.json())
      .then(json => {
        this.setState({data: json.data});
        this.setState({loading: false});
      })
      .catch(error => console.error(error));
  }
  render() {
    return (
      <View style={styles.container}>
        <View
          style={[
            style.view2,
            {
              borderColor: styles.color.COLOR_DARK_SEPERATOR,
            },
          ]}>
          <Text style={[style.txt, {flex: 0.12}]}>ردیف</Text>
          <Text style={[style.txt, {flex: 0.3}]}>مبلغ تراکنش</Text>
          <Text style={[style.txt, {flex: 0.3}]}>شماره پیگیری</Text>
          <Text style={[style.txt, {flex: 0.4}]}>تاریخ وساعت</Text>
          <Text style={[style.txt, {flex: 0.4}]}>بابت</Text>
        </View>
        <Content style={{marginTop: hp(1)}}>
          {this.state.loading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={this.state.data}
              keyExtractor={({id}, index) => id}
              renderItem={({item, index}) => (
                <View
                  style={[
                    style.view1,
                    {
                      borderColor:
                        index % 2 === 0
                          ? styles.color.colorText_GrAY
                          : styles.color.COLOR_DARK_SEPERATOR,
                    },
                  ]}>
                  <Text style={[style.txt, {flex: 0.3}]} size="norm">
                    {persianNumber(index + 1)}
                  </Text>

                  <Text
                    style={[style.txt, {fontSize: normalize(12), flex: 0.5}]}
                    size="norm">
                    {persianNumber(item.Cost)}
                  </Text>

                  <Text size="norm" style={[style.txt, {flex: 0.5}]}>
                    {item.Code}
                  </Text>
                  <Text size="norm" style={[style.txt, {flex: 0.5}]}>
                    {item.Time}
                  </Text>
                  <Text style={[style.txt, {flex: 1}]}>{item.Reason}</Text>
                </View>
              )}
            />
          )}
        </Content>
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
  view1: {
    backgroundColor: 'white',
    borderWidth: 2,
    // borderColor: 'gray',
    borderRadius: 25,
    height: hp(16),
    marginBottom: hp(2),
    flexDirection: 'row-reverse',
    flexWrap: 'nowrap',
    alignItems: 'center',
    paddingHorizontal: wp(2),
    marginHorizontal: wp(3),
  },
  view2: {
    backgroundColor: 'white',
    borderWidth: 2,
    // borderColor: 'gray',
    borderRadius: 25,
    height: hp(6.5),
    marginBottom: hp(2),
    flexDirection: 'row-reverse',
    flexWrap: 'nowrap',
    alignItems: 'center',
    paddingHorizontal: wp(2),
    marginHorizontal: wp(3),
  },
  txt: {
    //color: styles.color.colorText_GrAY,
    fontSize: normalize(13),
  },
  img: {height: hp(3), width: wp(3), flex: 0.3},
});
