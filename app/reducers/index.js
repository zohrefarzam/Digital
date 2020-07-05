import {combineReducers} from 'redux';
import prices from './PricesReducer';
import setting from './SettingReducer';
export default combineReducers({
  prices,
  setting,
});
