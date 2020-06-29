import React from 'react';
import {Image} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Buying, Prices, Profile, Weblog, Login, Splash} from '../screens';
import navigationStyle from './navigationStyle';
import images from '../config/images';
import styles from '../config/styles';
import normalize from 'react-native-normalize';
const SplashScreen = createStackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: {
      headerShown: false,
    },
  },
});
const Auth = createStackNavigator({
  Auth: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
});
const Home = createBottomTabNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'پروفایل',
      },
    },
    Weblog: {
      screen: Weblog,
      navigationOptions: {
        tabBarLabel: 'وبلاگ',
      },
    },
    Prices: {
      screen: Prices,
      navigationOptions: {
        tabBarLabel: 'قیمت ها',
      },
    },
    Buying: {
      screen: Buying,
      navigationOptions: {
        tabBarLabel: 'خرید و فروش',
      },
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        // let IconComponent = Ionicons;
        let source;
        // if (routeName === 'Home') {
        //   iconName = focused
        //     ? 'ios-information-circle'
        //     : 'ios-information-circle-outline';
        //   // Sometimes we want to add badges to some icons.
        //   // You can check the implementation below.
        //   // IconComponent = HomeIconWithBadge;
        // } else if (routeName === 'Settings') {
        //   iconName = focused ? 'ios-list-box' : 'ios-list';
        // }

        switch (routeName) {
          case 'Profile':
            // source = focused ? images.Main.home : '';
            source = images.tab.profile;
            break;
          case 'Weblog':
            // source = focused ? images.Main.view : '';
            source = images.tab.weblog;
            break;
          case 'Prices':
            // source = focused ? images.Main.stock : '';
            source = images.tab.bars;
            break;
          case 'Buying':
            // source = focused ? images.Main.news : '';
            source = images.tab.transfer;
            break;
        }

        // You can return any component that you like here!
        return (
          <Image
            tintColor={tintColor}
            source={source}
            resizeMode="contain"
            style={[navigationStyle.imageIcon, {tintColor: tintColor}]}
          />
        );
      },
    }),
    initialRouteName: 'Buying',
    barStyle: navigationStyle.bar,
    resetOnBlur: true,
    tabBarOptions: {
      // showIcon: true, // <--- this is better left as false to avoid
      // cutting off your tab labels
      // showLabel: true,
      inactiveTintColor: styles.color.colorText_GrAY,
      activeTintColor: styles.color.ColorGreen,
      labelStyle: navigationStyle.lable,
      style: {
        backgroundColor: styles.color.COLOR_WHITE,
        height: hp(8.5),
        paddingTop: normalize(15, 'height'),
        elevation: 15,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
      },
    },
  },
);

const RNApp = createSwitchNavigator({
  SplashScreen,
  Auth,
  Home: {
    screen: Home,
  },
});

export default createAppContainer(RNApp);
