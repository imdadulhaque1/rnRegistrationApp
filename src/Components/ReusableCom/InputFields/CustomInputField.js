import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../style';
import IconCom from '../IconCom';

const CustomInputField = ({
  placeholderText,
  placeholderTextColor,
  value,
  onChangeText,
}) => {
  return (
    <>
      <View style={styles.inputContainerStyle}>
        <IconCom name="user" />
        <TextInput
          style={styles.inputStyle}
          placeholder={placeholderText}
          placeholderTextColor={placeholderTextColor}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </>
  );
};

export default CustomInputField;

const styles = StyleSheet.create({
  inputContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.btnBorderColor,
    backgroundColor: Colors.grayColor,
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  inputStyle: {},
});
