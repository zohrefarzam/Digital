import {SET_SIGNIN_STATE} from '../api/methods/InsertUser';

const initialState = {
  isLoggedIn: false,
  name: '',
  father: '',
  date: '',
  mail: '',
  phone: '',
  password: '',
};

export default function Auth(state = initialState, action) {
  switch (action.type) {
    case SET_SIGNIN_STATE:
      return {
        ...state,
        ...action.payload, // this is what we expect to get back from API call and login page input
        isLoggedIn: true, // we set this as true on login
      };
    default:
      return state;
  }
}
