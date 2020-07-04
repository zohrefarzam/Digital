import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {persianNumber} from '../../lib/persian';
import {Text} from '../../utils/Kit';
import {Form, Item, Input, Container, Content} from 'native-base';
export default class WeblogDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weblog: null,
    };
  }
  componentWillMount = () => {
    this.setState({
      weblog: this.props.navigation.getParam('weblog'),
    });
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
});
