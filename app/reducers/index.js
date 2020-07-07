import {combineReducers} from 'redux';
import prices from './PricesReducer';
import setting from './SettingReducer';
import dollar from './DollarReducer';
export default combineReducers({
  prices,
  setting,
  dollar,
});
