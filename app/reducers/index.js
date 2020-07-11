import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import prices from './PricesReducer';
import setting from './SettingReducer';
export default combineReducers({
  prices,
  setting,
  form: formReducer,
});
