import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from 'react-native-elements';
import normalize from 'react-native-normalize';
import {Text} from '../../utils/Kit';
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
import {persianNumber} from '../../lib/persian';

class BuyingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {dollar: [], menu: 1};
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

  componentWillMount() {
    this.props.dispatch(FetchPrices());
    this.props.dispatch(FetchSetting());
    // this.props.dispatch(FetchDollar());
    fetch('https://api.tgju.online/v1/data/sana/json')
      .then(response => response.json())
      .then(json => {
        this.setState({dollar: json});
      })
      .catch(error => console.error(error));
  }
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
    const {prices} = this.props;
    switch (this.state.menu) {
      case 1:
        return prices[0]?.image;
      case 2:
        return prices[4]?.image;
      case 3:
        return prices[3]?.image;
      case 4:
        return prices[16]?.image;
      case 5:
        return prices[7]?.image;
      case 6:
        return prices[1]?.image;
      case 7:
        return prices[25]?.image;
      case 8:
        return prices[2]?.image;
      case 9:
        return prices[2]?.image;
      case 10:
        return prices[2]?.image;
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
        return Math.abs(prices[16]?.current_price * def);
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
          <Text style={style.title}>لوگو </Text>
        </View>
        <View>
          <PayCard />
        </View>
        <View style={style.txtView}>
          <Text  style={[style.grayTxt, style.normal]}>
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
                  <Text style={style2.number}>{persianNumber('0/05')}</Text>
                </View>
                <View style={style2.subView}>
                  <TouchableOpacity>
                    <Image
                      resizeMode="contain"
                      source={{uri: this.renderImage()}}
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
                        source={{uri: prices[0]?.image}}
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
                        source={{uri: prices[4]?.image}}
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
                        source={{uri: prices[3]?.image}}
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
                        source={{uri: prices[16]?.image}}
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
                        source={{uri: prices[7]?.image}}
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
                        source={{uri: prices[1]?.image}}
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
                        source={{uri: prices[25]?.image}}
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
                        source={{uri: prices[2]?.image}}
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
                  </Menu>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={style.center}>
          <Text
            style={[
              style.grayTxt,
              style.normal,
              {paddingRight: wp(8), paddingBottom: hp(1)},
            ]}>
            قیمت هر واحد
          </Text>
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
          />
        </View>
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
  main: {flex: 1, backgroundColor: 'white'},
  logoCon: {alignItems: 'center', marginVertical: normalize(50, 'height')},
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
