import {combineReducers} from 'redux';
import prices from './PricesReducer';
import setting from './SettingReducer';
import dollar from './DollarReducer';
import Auth from './AuthReducer';
export default combineReducers({
  prices,
  setting,
  dollar,
  Auth,
});
