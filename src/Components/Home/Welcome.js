import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import HSS from '../../Assets/images/logo.png';
import IconCom from '../ReusableCom/IconCom';
import {Colors, Fonts} from '../style';

const Welcome = ({navigation}) => {
  function handleNavigate(screenName) {
    navigation.navigate(screenName);
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconContainerStyle}
        onPress={() => handleNavigate('Login')}>
        <Image source={HSS} style={styles.iconStyle} />
      </TouchableOpacity>

      <View>
        <TouchableOpacity style={styles.vtStyle}>
          <IconCom name="play-circle" />
          <Text style={styles.vtTextStyle}>Virtual Tour</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.grayBlack,
  },
  iconContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
  },
  iconStyle: {
    height: '40%',
    width: '35%',
  },
  vtStyle: {
    flexDirection: 'row',
    backgroundColor: Colors.activeBtnBgColor,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  vtTextStyle: {
    marginHorizontal: 5,
    fontFamily: Fonts.LobsterRegular,
    fontSize: 17,
  },
});
