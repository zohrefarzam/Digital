import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Picker} from 'native-base';
import Dialog from 'react-native-dialog';
import {Text} from 'app/utils/Kit';
import {persianNumber} from '../lib/persian';
import Selector from '../components/Selector';
import styles from '../config/styles';
export default function CustomModal({
  title,
  describe,
  cancleTitle = 'انصراف',
  confirmTitle = 'باشه',
  onCancle,
  onConfirm,
  onGallery,
  onCamera,
  input,
  picker,
  onChangeText,
  isVisible = false,
}) {
  const [selected, setSelected] = useState('');
  // const onValueChange = value => {
  //   setSelected(value);
  // };
  return (
    <Dialog.Container visible={isVisible} contentStyle={style.radius}>
      {title && (
        <Dialog.Title style={style.title}>
          <Text type="bold" color="green">
            {persianNumber(title)}
          </Text>
        </Dialog.Title>
      )}
      {describe && (
        <Dialog.Description>
          <Text color="gray">{persianNumber(describe)}</Text>
        </Dialog.Description>
      )}
      {input && <Dialog.Input onChangeText={onChangeText} />}
      {picker && <Selector />}
      <View style={style.btnView}>
        {!!onCancle && (
          <Dialog.Button
            style={style.redTxt}
            label={cancleTitle}
            onPress={onCancle}
          />
        )}
        {!!onConfirm && (
          <Dialog.Button
            style={style.redTxt}
            label={confirmTitle}
            onPress={onConfirm}
          />
        )}
        {!!onCamera && (
          <Dialog.Button
            style={style.blueTxt}
            label="دوربین"
            onPress={onCamera}
          />
        )}
        {!!onGallery && (
          <Dialog.Button
            style={style.blueTxt}
            label="گالری"
            onPress={onGallery}
          />
        )}
      </View>
    </Dialog.Container>
  );
}

const style = StyleSheet.create({
  radius: {
    borderRadius: 25,
    backgroundColor: styles.color.colorBackground_Gray,
    paddingVertical: 20,
  },
  btnView: {flexDirection: 'row', flexWrap: 'nowrap'},
  redTxt: {color: styles.color.ColorRed},
  blueTxt: {color: styles.color.ColorDarkBlue},
});
