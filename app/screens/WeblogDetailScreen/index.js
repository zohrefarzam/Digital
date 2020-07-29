import React, {Component} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {persianNumber} from '../../lib/persian';
import {Text} from '../../utils/Kit';
import {Form, Item, Input, Container, Content} from 'native-base';
import styles from '../../config/styles';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from 'react-native-elements';
import moment from 'moment-jalaali';
import CustomModal from '../../components/CustomModal';
import normalize from 'react-native-normalize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default class WeblogDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weblog: null,
      name: '',
      mail: '',
      text: '',
      dialog1: false,
    };
  }
  componentWillMount = () => {
    this.setState({
      weblog: this.props.navigation.getParam('weblog'),
    });
  };
  onSend = () => {
    const {name, mail, text, weblog} = this.state;
    const date = persianNumber(moment().format('jYYYY/jM/jD hh:mm:ss '));
    fetch('https://jimbooexchange.com/php_api/insert_comment.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
      },
      body: `Name=${name}&Time=${date}&Post_Title=${
        weblog.Mini_Text
      }&Mail=${mail}&Post_Id=${weblog.Id}&Text=${text}`, // <-- Post parameters
    });
    this.setState({dialog1: true});
  };
  render() {
    const {weblog} = this.state;
    return (
      <View>
        <View>
          <Image
            source={{uri: `${weblog.Pic}`}}
            style={{height: heightPercentageToDP(30), width: '100%'}}
          />
          <View style={{margin: 15}}>
            <Text>
              منتشر شده در :
              <Text style={{color: 'gray'}}> {persianNumber(weblog.Time)}</Text>
            </Text>
            <Text>{weblog.Mini_Text}</Text>
          </View>
        </View>
        <View />
        <View />

        <Form>
          <View style={{margin: 15}}>
            <Text style={{fontSize: 18}}>اولین دیدگاه خود را ثبت کنید</Text>
          </View>
          <Item style={{margin: 15}}>
            <Input
              style={style.inputStyle}
              placeholder="متن دیدگاه"
              placeholderTextColor="#adb4bc"
              multiline={true}
              numberOfLines={5}
              keyboardType="phone-pad"
              autoFocus
              blurOnSubmit
            />
          </Item>
          <View>
            <Item style={{margin: 15}}>
              <Input
                style={style.inputStyle}
                placeholder="پست الکترونیک"
                placeholderTextColor="#adb4bc"
                multiline={false}
                numberOfLines={1}
                autoFocus
                blurOnSubmit
              />
            </Item>
            <Item style={{margin: 15}}>
              <Input
                style={style.inputStyle}
                placeholder="نام و نام خانوادگی"
                placeholderTextColor="#adb4bc"
                multiline={false}
                numberOfLines={1}
                autoFocus
                blurOnSubmit
              />
            </Item>
          </View>
        </Form>
        <Button
          TouchableComponent={TouchableOpacity}
          ViewComponent={LinearGradient} // Don't forget this!
          title="ارسال دیدگاه"
          containerStyle={style.shadow}
          buttonStyle={style.btn}
          titleStyle={style.medium}
          linearGradientProps={{
            colors: [styles.color.ColorGreen, styles.color.ColorGreenFos],
            start: {x: 0, y: 0.5},
            end: {x: 1, y: 0.5},
          }}
          onPress={() => this.onSend()}
        />
        <CustomModal
          isVisible={this.state.dialog1}
          onConfirm={() => this.setState({dialog1: false})}
          title="ارسال شد"
          describe="دیدگاه شما با موفقیت ارسال شد"
        />
      </View>
    );
  }
}
const style = StyleSheet.create({
  inputStyle: {
    fontFamily: 'IRANSansMobile',
    textAlign: 'right',
    paddingRight: 15,
  },
  btn: {borderRadius: 30, width: wp(45)},
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
    borderRadius: 30,
    width: wp(45),
  },
  btnView: {marginHorizontal: wp(30), flex: 1},
});
