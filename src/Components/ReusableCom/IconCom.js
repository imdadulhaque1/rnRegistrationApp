import {View, Text} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Colors} from '../style';

const IconCom = props => {
  return <FontAwesome5 name={props.name} size={18} color={Colors.BLACK} />;
};
export default IconCom;
