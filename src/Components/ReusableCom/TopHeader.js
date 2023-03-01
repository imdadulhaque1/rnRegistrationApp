import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import coinPic from '../../Assets/images/dashboard/coin.png';
import profilePic from '../../Assets/images/dashboard/profile.png';
import IconCom from './IconCom';
import {Colors} from '../style';

const TopHeader = ({moduleIcons, moduleName, moduleTotalCoins}) => {
  const [name, setName] = useState('Greetings');
  const [userType, setUserType] = useState('Super Star');
  const [totalCoins, setTotalCoins] = useState('100');

  return (
    <View>
      <View
        style={{
          backgroundColor: Colors.lightOrange,
          height: 250,
          width: '100%',
          borderBottomEndRadius: 50,
          borderBottomStartRadius: 50,
          flexDirection: 'row',
        }}>
        <View
          style={{
            justifyContent: 'space-between',
            width: '30%',
            flexDirection: 'row',
            height: '100%',
            alignItems: 'center',
          }}>
          <Image source={moduleIcons} style={styles.profileStyle} />
          <View
            style={{
              borderLeftColor: 'black',
              borderLeftWidth: 2,
              height: '100%',
              marginVertical: 10,
            }}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            width: '70%',
            flexDirection: 'column',
            height: '100%',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 30,
              color: Colors.BLACK,
              fontFamily: 'Aladin-Regular',
            }}>
            {moduleName}
          </Text>
          <View style={styles.dolarStyle}>
            <IconCom name="dollar-sign" />
            <Text
              style={{
                fontSize: 20,
                color: Colors.BLACK,
                fontFamily: 'Aladin-Regular',
                marginLeft: 8,
              }}>
              {moduleTotalCoins}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TopHeader;

const styles = StyleSheet.create({
  profileStyle: {
    // borderColor: Colors.BLACK,
    // borderWidth: 2,
    // borderRadius: 100,
    height: 150,
    width: 150,
  },
  dolarStyle: {
    backgroundColor: Colors.grayColor,
    borderColor: Colors.BLACK,
    borderWidth: 1,
    borderRadius: 100,
    flexDirection: 'row',
    padding: 10,
  },
});

{
  /* <View
          style={{
            flex: 0.4,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '50%',
              marginLeft: 5,
            }}>
            <Image source={GreetingsIcon} style={styles.profileStyle} />
            <View style={{marginLeft: 10}}>
              <Text
                style={{
                  fontSize: 20,
                  color: Colors.BLACK,
                  fontFamily: 'Aladin-Regular',
                }}>
                {name}
              </Text>
              <Text style={{fontSize: 14, color: 'gray'}}>{userType}</Text>
              <View style={{flexDirection: 'row', marginVertical: 10}}>
                <TouchableOpacity
                  style={{
                    marginRight: 10,
                    borderColor: Colors.BLACK,
                    borderWidth: 1,
                    padding: 3,
                    borderRadius: 90,
                  }}>
                  <IconCom name="cog" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    marginRight: 10,
                    borderColor: Colors.BLACK,
                    borderWidth: 1,
                    padding: 3,
                    borderRadius: 90,
                  }}>
                  <IconCom name="bell" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              top: 30,
              borderLeftColor: 'black',
              borderLeftWidth: 2,
              height: '100%',
              marginVertical: 10,
            }}
          />
          <View style={{width: '50%'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Colors.grayBlack,
                borderRadius: 20,
                width: '80%',
                marginLeft: 20,
              }}>
              <Text
                style={{
                  fontFamily: 'Aladin-Regular',
                  fontSize: 18,
                  color: Colors.WHITE,
                }}>
                {totalCoins}
              </Text>
              <Image source={coinPic} style={{height: 22, width: 22}} />
            </View>
          </View>
        </View> */
}
