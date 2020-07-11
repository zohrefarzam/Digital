import {Alert} from 'react-native';

export const SET_SIGNIN_STATE = 'SET_SIGNIN_STATE';
export const setSignIn = signInData => ({
  type: SET_SIGNIN_STATE,
  payload: signInData,
});
export const SignIn = SignInInput => {
  const {Name, Father_Name, Bourning_Time, Mail, Phone, Password} = SignInInput;
  return dispatch => {
    // don't forget to use dispatch here!
    return fetch('https://jimbooexchange.com/php_api/insert_user.php', {
      method: 'POST',
      headers: {
        // these could be different for your API call
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(SignInInput),
    })
      .then(response => response.json())
      .then(json => {
        if (json.msg === 'success') {
          // response success checking logic could differ
          dispatch(
            setSignIn({
              ...json,
              name: Name,
              father: Father_Name,
              date: Bourning_Time,
              mail: Mail,
              phone: Phone,
              password: Password,
            }),
            alert(SignInInput),
          ); // our action is called here
        } else {
          Alert.alert('Login Failed', 'Username or Password is incorrect');
        }
      })
      .catch(err => {
        Alert.alert('Login Failed', 'Some error occured, please retry');
        console.log(err);
      });
  };
};
