/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../../style';
import IconCom from '../IconCom';

const GreetingsButton = ({onPress, btnTitle, iconName}) => {
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity onPress={onPress} style={styles.btnRes}>
        <IconCom name={iconName} />
        <Text style={styles.btnText}>{btnTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    marginHorizontal: 5,
    marginTop: 5,
    alignItems: 'center',
  },
  btnRes: {
    alignItems: 'center',
    flexL: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Colors.activeBtnBgColor,
    paddingVertical: 7,
    borderColor: 'black',
    borderRadius: 12,
    borderWidth: 1,
    height: 60,
    width: '85%',
  },
  btnText: {
    fontSize: 20,
    color: Colors.darkBlue,
    textAlign: 'center',
    fontFamily: 'Aladin-Regular',
    paddingLeft: 5,
  },
});

export default GreetingsButton;
