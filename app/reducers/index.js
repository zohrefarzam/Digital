import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import prices from './PricesReducer';
import setting from './SettingReducer';
import dollar from './DollarReducer';
import Auth from './AuthReducer';
export default combineReducers({
  prices,
  setting,
  form: formReducer,
  dollar,
  Auth,
});
