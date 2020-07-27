import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Alert,
  Image,
  Linking,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from 'react-native-elements';
import normalize from 'react-native-normalize';
import {Text, numberWithCommas} from '../../utils/Kit';
import styles from '../../config/styles';
import PayCard from '../../components/PayCard';
import Menu, {MenuDivider} from 'react-native-material-menu';
import {TextNumber} from '../../utils/Kit';
import {connect} from 'react-redux';
import {
  FetchPrices,
  FetchSetting,
  FetchDollar,
} from '../../api/methods/FetchPrices';
import images from '../../config/images';
import {persianNumber, latinNumber} from '../../lib/persian';
import {Item, Input} from 'native-base';
import {number} from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';
import RNFetchBlob from 'react-native-fetch-blob';
import CustomModal from '../../components/CustomModal';
class BuyingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dollar: [],
      menu: 1,
      menu2: 10,
      rial: '',
      numb: '',
      name: '',
      id: '',
      phone: '',
      mail: '',
      link: '',
      dialog1:false,
    };
  }
  state = {
    visible: false,
    dialogVisible: false,
  };
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };
  _menu2 = null;

  setMenuRef2 = ref2 => {
    this._menu2 = ref2;
  };

  hideMenu2 = () => {
    this._menu2.hide();
  };

  showMenu2 = () => {
    this._menu2.show();
  };
  async componentWillMount() {
    this.props.dispatch(FetchPrices());
    this.props.dispatch(FetchSetting());
    // this.props.dispatch(FetchDollar());
    fetch('https://api.tgju.online/v1/data/sana/json')
      .then(response => response.json())
      .then(json => {
        this.setState({dollar: json});
      })
      .catch(error => console.error(error));
    const name = await AsyncStorage.getItem('name');
    const id = await AsyncStorage.getItem('id');
    const phone = await AsyncStorage.getItem('phone');
    const mail = await AsyncStorage.getItem('mail');
    this.setState({name: name});
    this.setState({id: id});
    this.setState({phone: phone});
    this.setState({mail: mail});
  }
  renderTitle2 = () => {
    switch (this.state.menu2) {
      case 1:
        return 'بیت کوین';
      case 2:
        return 'بیت کوین کش';
      case 3:
        return 'ریپل';
      case 4:
        return 'ترون';
      case 5:
        return 'لایت کوین ';
      case 6:
        return 'اتریوم';
      case 7:
        return 'دش کوین';
      case 8:
        return 'تتر';
      case 9:
        return 'پرفکت مانی';
      case 10:
        return 'ریال';
    }
  };
  submitBuying = () => {
    const {name, id, phone, mail, link, rial} = this.state;
    const rand = Math.floor(Math.random() * 10000) + 1;
    if (phone === null) {
      this.setState({dialog1: true});
    } else {
      fetch(
        `https://jimbooexchange.com/php_api/idpey_webservice_mob.php?costt=${rial}&usname=${name}&uid=${id}&kind=coin&mail=${mail}&phone=${phone}&order_id=${rand}&value=${this.renderTitle()}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
          },
        },
      )
        .then(function(response) {
          return response.text();
        })
        .then(async function(text) {
          return text;
        })
        .then(text =>
          Linking.canOpenURL(text).then(supported => {
            if (supported) {
              Linking.openURL(text);
            } else {
              console.log("Don't know how to open URI: " + text);
            }
          }),
        )
        .catch(function(error) {
          console.log('Request failed', error);
        });
    }
  };

  renderSubTitle2 = () => {
    const {prices} = this.props;
    switch (this.state.menu2) {
      case 1:
        return prices[0]?.name;
      case 2:
        return prices[4]?.name;
      case 3:
        return prices[3]?.name;
      case 4:
        return prices[16]?.name;
      case 5:
        return prices[7]?.name;
      case 6:
        return prices[1]?.name;
      case 7:
        return prices[25]?.name;
      case 8:
        return prices[2]?.name;
      case 9:
        return 'Perfect Money';
      case 10:
        return 'Rial';
    }
  };
  renderImage2 = () => {
    switch (this.state.menu2) {
      case 1:
        return images.example.bit;
      case 2:
        return images.example.bitcoinC;
      case 3:
        return images.example.xrp;
      case 4:
        return images.example.tron;
      case 5:
        return images.example.litecoin;
      case 6:
        return images.example.ethereum;
      case 7:
        return images.example.dash;
      case 8:
        return images.example.tether;
      case 9:
        return images.example.pm;
      case 10:
        return images.example.Rial;
    }
  };
  renderTitle = () => {
    switch (this.state.menu) {
      case 1:
        return 'بیت کوین';
      case 2:
        return 'بیت کوین کش';
      case 3:
        return 'ریپل';
      case 4:
        return 'ترون';
      case 5:
        return 'لایت کوین ';
      case 6:
        return 'اتریوم';
      case 7:
        return 'دش کوین';
      case 8:
        return 'تتر';
      case 9:
        return 'پرفکت مانی';
      case 10:
        return 'ریال';
    }
  };
  renderSubTitle = () => {
    const {prices} = this.props;
    switch (this.state.menu) {
      case 1:
        return prices[0]?.name;
      case 2:
        return prices[4]?.name;
      case 3:
        return prices[3]?.name;
      case 4:
        return prices[16]?.name;
      case 5:
        return prices[7]?.name;
      case 6:
        return prices[1]?.name;
      case 7:
        return prices[25]?.name;
      case 8:
        return prices[2]?.name;
      case 9:
        return 'Perfect Money';
      case 10:
        return 'Rial';
    }
  };
  renderImage = () => {
    switch (this.state.menu) {
      case 1:
        return images.example.bit;
      case 2:
        return images.example.bitcoinC;
      case 3:
        return images.example.xrp;
      case 4:
        return images.example.tron;
      case 5:
        return images.example.litecoin;
      case 6:
        return images.example.ethereum;
      case 7:
        return images.example.dash;
      case 8:
        return images.example.tether;
      case 9:
        return images.example.pm;
      case 10:
        return images.example.Rial;
    }
  };
  renderCurrent = () => {
    const {prices} = this.props;
    switch (this.state.menu) {
      case 1:
        return prices[0]?.current_price;
      case 2:
        return prices[4]?.current_price;
      case 3:
        return prices[3]?.current_price;
      case 4:
        return prices[16]?.current_price;
      case 5:
        return prices[7]?.current_price;
      case 6:
        return prices[1]?.current_price;
      case 7:
        return prices[25]?.current_price;
      case 8:
        return prices[2]?.current_price;
      case 9:
        return;
      case 10:
        return;
    }
  };
  renderRial = () => {
    const {dollar} = this.state;
    const {prices, setting} = this.props;
    const d = parseInt(setting[0]?.Defrent);
    const p = parseInt(dollar?.sana_buy_usd?.p);
    const def = Math.abs(d + p);
    switch (this.state.menu) {
      case 1:
        return Math.abs(prices[0]?.current_price * def);
      case 2:
        return Math.abs(prices[4]?.current_price * def);
      case 3:
        return Math.abs(prices[3]?.current_price * def);
      case 4:
        return Math.abs(prices[17]?.current_price * def);
      case 5:
        return Math.abs(prices[7]?.current_price * def);
      case 6:
        return Math.abs(prices[1]?.current_price * def);
      case 7:
        return Math.abs(prices[25]?.current_price * def);
      case 8:
        return Math.abs(prices[2]?.current_price * def);
      case 9:
        return;
      case 10:
        return;
    }
  };
  renderSymbol = () => {
    switch (this.state.menu) {
      case 1:
        return 'BTC';
      case 2:
        return 'BCH';
      case 3:
        return 'XRP';
      case 4:
        return 'TRX';
      case 5:
        return 'LTC';
      case 6:
        return 'ETH';
      case 7:
        return 'DASH';
      case 8:
        return 'USDT';
      case 9:
        return '$';
    }
  };
  render() {
    const {dollar} = this.state;
    const {loading, prices, setting} = this.props;
    const d = parseInt(setting[0]?.Defrent);
    const p = parseInt(dollar?.sana_buy_usd?.p);
    const def = Math.abs(d + p);
    return (
      <View style={style.main}>
        <StatusBar hidden={true} />
        <View style={style.logoCon}>
          <Image
            source={images.global.logo}
            style={{height: hp(25), width: wp(35)}}
            resizeMode="contain"
          />
        </View>
        <View>
          <View>
            <View style={style2.main}>
              <View style={style2.card}>
                <View style={style2.titleView}>
                  <Text style={style2.title}>پرداخت میکنید</Text>
                </View>
                {/**
                 * 
                 paying
                 */}
                <View style={style2.js}>
                  <View style={style2.right}>
                    <Input
                      style={[style.input, {width: wp(32)}]}
                      value={persianNumber(this.state.rial)}
                      onChangeText={t => {
                        this.setState({
                          rial: latinNumber(t),
                        });
                      }}
                      multiline={true}
                      keyboardType="numeric"
                    />
                  </View>
                  <View style={[style2.subView]}>
                    <TouchableOpacity>
                      <Image
                        resizeMode="contain"
                        source={this.renderImage2()}
                        style={{width: wp(6), height: hp(6)}}
                      />
                    </TouchableOpacity>
                    <View style={{marginRight: wp(3), marginLeft: wp(3)}}>
                      <Text style={[style2.grayTxt, {marginRight: wp(2)}]}>
                        {this.renderTitle2()}
                      </Text>
                      <Text style={style2.grayTxt}>
                        {this.renderSubTitle2()}
                      </Text>
                    </View>
                    <Menu
                      ref={this.setMenuRef2}
                      button={
                        <TouchableOpacity onPress={this.showMenu2}>
                          <Image
                            resizeMode="contain"
                            source={images.global.arrow_down}
                            style={{width: wp(3), height: hp(3)}}
                          />
                        </TouchableOpacity>
                      }>
                      <MenuDivider />
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({menu2: 1});
                          this.hideMenu2();
                        }}
                        style={style.menuItem}>
                        <View>
                          <Text style={style.menuTxt}>بیت کوین</Text>
                        </View>
                        <Image
                          source={images.example.bit}
                          style={style.imageMenu}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                      <MenuDivider />
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({menu2: 2});
                          this.hideMenu2();
                        }}
                        style={style.menuItem}>
                        <View>
                          <Text style={style.menuTxt}>بیت کوین کش</Text>
                        </View>
                        <Image
                          source={images.example.bitcoinC}
                          style={style.imageMenu}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                      <MenuDivider />
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({menu2: 3});
                          this.hideMenu2();
                        }}
                        style={style.menuItem}>
                        <View>
                          <Text style={style.menuTxt}>ریپل</Text>
                        </View>
                        <Image
                          source={images.example.xrp}
                          style={style.imageMenu}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                      <MenuDivider />
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({menu2: 4});
                          this.hideMenu2();
                        }}
                        style={style.menuItem}>
                        <View>
                          <Text style={style.menuTxt}>ترون</Text>
                        </View>
                        <Image
                          source={images.example.tron}
                          style={style.imageMenu}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                      <MenuDivider />
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({menu2: 5});
                          this.hideMenu2();
                        }}
                        style={style.menuItem}>
                        <View>
                          <Text style={style.menuTxt}>لایت کوین</Text>
                        </View>
                        <Image
                          source={images.example.litecoin}
                          style={style.imageMenu}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                      <MenuDivider />
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({menu2: 6});
                          this.hideMenu2();
                        }}
                        style={style.menuItem}>
                        <View>
                          <Text style={style.menuTxt}>اتریوم</Text>
                        </View>
                        <Image
                          source={images.example.ethereum}
                          style={style.imageMenu}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                      <MenuDivider />
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({menu2: 7});
                          this.hideMenu2();
                        }}
                        style={style.menuItem}>
                        <View>
                          <Text style={style.menuTxt}>دش کوین</Text>
                        </View>
                        <Image
                          source={images.example.dash}
                          style={style.imageMenu}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                      <MenuDivider />
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({menu2: 8});
                          this.hideMenu2();
                        }}
                        style={style.menuItem}>
                        <View>
                          <Text style={style.menuTxt}>تتر</Text>
                        </View>
                        <Image
                          source={images.example.tether}
                          style={style.imageMenu}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                      <MenuDivider />
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({menu2: 9});
                          this.hideMenu2();
                        }}
                        style={style.menuItem}>
                        <View>
                          <Text style={style.menuTxt}>پرفکت مانی</Text>
                        </View>
                        <Image
                          source={images.example.pm}
                          style={style.imageMenu}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                      <MenuDivider />
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({menu2: 10});
                          this.hideMenu2();
                        }}
                        style={style.menuItem}>
                        <View>
                          <Text style={style.menuTxt}>ریال</Text>
                        </View>
                        <Image
                          source={images.example.Rial}
                          style={style.imageMenu}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                    </Menu>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={style.txtView}>
          <Text style={[style.grayTxt, style.normal]}>
            <TextNumber black>{this.renderCurrent()}</TextNumber>
            <Text style={style.black}>دلار </Text>
            <Text>نرخ بین المللی ارز </Text>
            <TextNumber black>{def}</TextNumber>
            <Text style={style.black}>ریال </Text>
            هزینه انتقال
          </Text>
        </View>
        <View>
          <View style={style2.main}>
            <View style={style2.card}>
              <View style={style2.titleView}>
                <Text style={style2.title}>دریافت میکنید</Text>
              </View>
              <View style={style2.js}>
                <View style={style2.right}>
                  <Input
                    style={[style.input, {width: wp(32)}]}
                    value={persianNumber(
                      numberWithCommas(
                        Math.abs(this.state.rial / this.renderRial()),
                      ),
                    )}
                    multiline={true}
                    keyboardType="numeric"
                  />
                </View>
                <View style={style2.subView}>
                  <TouchableOpacity>
                    <Image
                      resizeMode="contain"
                      source={this.renderImage()}
                      style={{width: wp(6), height: hp(6)}}
                    />
                  </TouchableOpacity>
                  <View style={{marginRight: wp(3), marginLeft: wp(3)}}>
                    <Text style={[style2.grayTxt, {marginRight: wp(2)}]}>
                      {this.renderTitle()}
                    </Text>
                    <Text style={style2.grayTxt}>{this.renderSubTitle()}</Text>
                  </View>
                  <Menu
                    ref={this.setMenuRef}
                    button={
                      <TouchableOpacity onPress={this.showMenu}>
                        <Image
                          resizeMode="contain"
                          source={images.global.arrow_down}
                          style={{width: wp(3), height: hp(3)}}
                        />
                      </TouchableOpacity>
                    }>
                    <MenuDivider />
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({menu: 1});
                        this.hideMenu();
                      }}
                      style={style.menuItem}>
                      <View>
                        <Text style={style.menuTxt}>بیت کوین</Text>
                      </View>
                      <Image
                        source={images.example.bit}
                        style={style.imageMenu}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                    <MenuDivider />
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({menu: 2});
                        this.hideMenu();
                      }}
                      style={style.menuItem}>
                      <View>
                        <Text style={style.menuTxt}>بیت کوین کش</Text>
                      </View>
                      <Image
                        source={images.example.bitcoinC}
                        style={style.imageMenu}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                    <MenuDivider />
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({menu: 3});
                        this.hideMenu();
                      }}
                      style={style.menuItem}>
                      <View>
                        <Text style={style.menuTxt}>ریپل</Text>
                      </View>
                      <Image
                        source={images.example.xrp}
                        style={style.imageMenu}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                    <MenuDivider />
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({menu: 4});
                        this.hideMenu();
                      }}
                      style={style.menuItem}>
                      <View>
                        <Text style={style.menuTxt}>ترون</Text>
                      </View>
                      <Image
                        source={images.example.tron}
                        style={style.imageMenu}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                    <MenuDivider />
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({menu: 5});
                        this.hideMenu();
                      }}
                      style={style.menuItem}>
                      <View>
                        <Text style={style.menuTxt}>لایت کوین</Text>
                      </View>
                      <Image
                        source={images.example.litecoin}
                        style={style.imageMenu}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                    <MenuDivider />
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({menu: 6});
                        this.hideMenu();
                      }}
                      style={style.menuItem}>
                      <View>
                        <Text style={style.menuTxt}>اتریوم</Text>
                      </View>
                      <Image
                        source={images.example.ethereum}
                        style={style.imageMenu}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                    <MenuDivider />
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({menu: 7});
                        this.hideMenu();
                      }}
                      style={style.menuItem}>
                      <View>
                        <Text style={style.menuTxt}>دش کوین</Text>
                      </View>
                      <Image
                        source={images.example.dash}
                        style={style.imageMenu}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                    <MenuDivider />
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({menu: 8});
                        this.hideMenu();
                      }}
                      style={style.menuItem}>
                      <View>
                        <Text style={style.menuTxt}>تتر</Text>
                      </View>
                      <Image
                        source={images.example.tether}
                        style={style.imageMenu}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                    <MenuDivider />
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({menu: 9});
                        this.hideMenu();
                      }}
                      style={style.menuItem}>
                      <View>
                        <Text style={style.menuTxt}>پرفکت مانی</Text>
                      </View>
                      <Image
                        source={images.example.pm}
                        style={style.imageMenu}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                    <MenuDivider />
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({menu: 10});
                        this.hideMenu();
                      }}
                      style={style.menuItem}>
                      <View>
                        <Text style={style.menuTxt}>ریال</Text>
                      </View>
                      <Image
                        source={images.example.Rial}
                        style={style.imageMenu}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                  </Menu>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={style.center}>
          <View style={style.center}>
            <Text style={[style.grayTxt, style.normal, {paddingBottom: hp(1)}]}>
              قیمت هر واحد
            </Text>
          </View>
          <View style={style.rowRev}>
            <Text style={style.normal}>{this.renderSymbol()}1 = </Text>
            <TextNumber style={style.normal}>{this.renderRial()}</TextNumber>
            <Text style={style.normal}>ریال{'  '}</Text>
          </View>
        </View>
        <View style={style.btnView}>
          <Button
            TouchableComponent={TouchableOpacity}
            ViewComponent={LinearGradient} // Don't forget this!
            title="ثبت درخواست"
            containerStyle={style.shadow}
            buttonStyle={style.btn}
            titleStyle={style.medium}
            linearGradientProps={{
              colors: [styles.color.ColorGreen, styles.color.ColorGreenFos],
              start: {x: 0, y: 0.5},
              end: {x: 1, y: 0.5},
            }}
            onPress={() => this.submitBuying()}
          />
        </View>
        <CustomModal
          isVisible={this.state.dialog1}
          title="خطا در ورود اطلاعات"
          describe="ابتدا وارد شوید"
          onConfirm={() => {
            this.setState({dialog1: false});
          }}
        />
      </View>
    );
  }
}
const mapStateToProps = state => ({
  prices: state.prices.items,
  setting: state.setting.items,
  //dollar: state.dollar.items,
  loading: state.prices.loading,
  error: state.prices.error,
});

export default connect(mapStateToProps)(BuyingScreen);
const style = StyleSheet.create({
  input: {
    fontSize: 16,
    fontFamily: 'iranSans',
    marginRight: wp(5),
  },
  main: {flex: 1, backgroundColor: 'white'},
  logoCon: {alignItems: 'center'},
  title: {color: styles.color.colorText_GrAY, fontSize: normalize(45)},
  grayTxt: {color: styles.color.colorText_GrAY},
  //normal: {fontSize: 16},
  txtView: {marginRight: wp(17), marginVertical: normalize(1, 'height')},
  black: {color: 'black'},
  center: {alignSelf: 'center'},
  rowRev: {flexDirection: 'row-reverse', flexWrap: 'nowrap'},
  btn: {borderRadius: normalize(25), paddingVertical: hp(1)},
  medium: {fontSize: normalize(20), fontFamily: 'IRANSansMobile'},
  shadow: {
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  btnView: {marginHorizontal: wp(10), marginTop: normalize(20, 'height')},
  menuItem: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    paddingHorizontal: wp(10),
    justifyContent: 'space-between',
  },
  imageMenu: {width: wp(5), height: hp(5)},
});
const style2 = StyleSheet.create({
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

    marginTop: -normalize(15, 'height'),
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
  number: {margin: 20, fontSize: normalize(25), marginVertical: hp(2)},
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
