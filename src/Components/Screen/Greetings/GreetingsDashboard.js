import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TopHeader from '../../ReusableCom/TopHeader';
import GreetingsIcon from '../../../Assets/images/dashboard/Untitled-9.png';
import GreetingsButton from '../../ReusableCom/Greetings/GreetingsButton';
import {Colors} from '../../style';

const GreetingsDashboard = ({navigation}) => {
  function handleNavigate(screenName) {
    navigation.navigate(screenName);
  }
  return (
    <View style={{flex: 1, backgroundColor: Colors.tnBgColor}}>
      <TopHeader
        moduleIcons={GreetingsIcon}
        moduleName="Greetings"
        moduleTotalCoins="100"
      />
      <GreetingsButton
        btnTitle=" All Greetings"
        iconName="folder-open"
        onPress={() => handleNavigate('AllGreetings')}
      />
      <GreetingsButton
        btnTitle=" Create Greetings"
        iconName="plus-square"
        onPress={() => handleNavigate('CreateGreetings')}
      />
    </View>
  );
};

export default GreetingsDashboard;

const styles = StyleSheet.create({});
