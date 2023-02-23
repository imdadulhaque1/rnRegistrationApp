import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import GradientCard from '../../Assets/images/dashboard/gradientCardBg.png';
import Untitled5 from '../../Assets/images/dashboard/Untitled-5.png';

const DashboardCard = ({cardImgBack, cardIcon, cardTitle}) => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground source={cardImgBack} style={styles.cardBgStyle}>
        <Image source={cardIcon} style={styles.cardImageStyle} />
        <TouchableOpacity>
          <Text style={styles.cardTitle}>{cardTitle}</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default DashboardCard;
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 20,
    width: width - 186,
  },
  cardBgStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    overflow: 'hidden',
    marginHorizontal: 5,
  },
  cardImageStyle: {
    marginTop: 5,
    marginBottom: 5,
    height: 65,
    width: 90,
  },
  cardTitle: {
    fontSize: 20,
    fontFamily: 'Aladin-Regular',
    marginBottom: 5,
  },
});
