import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import DashboardCard from '../ReusableCom/DashboardCard';
import oddBg from '../../Assets/images/dashboard/gradientCardBg.png';
import evenBg from '../../Assets/images/dashboard/blueCard-01.png';

import GreetingsIcon from '../../Assets/images/dashboard/Untitled-9.png';
import MeetupIcon from '../../Assets/images/dashboard/meet-up.png';
import qaIcon from '../../Assets/images/dashboard/Untitled-5.png';
import paidPostIcon from '../../Assets/images/dashboard/Untitled-11.png';
import liveChatIcon from '../../Assets/images/dashboard/Untitled-6.png';
import eShowcaseIcon from '../../Assets/images/dashboard/Untitled-10.png';
import learningSessionIcon from '../../Assets/images/dashboard/Untitled-8.png';
import auditionIcon from '../../Assets/images/dashboard/Untitled-12.png';
import topBgImg from '../../Assets/images/dashboard/coin.png';
import profilePic from '../../Assets/images/dashboard/profile.png';
import coinPic from '../../Assets/images/dashboard/coin.png';

import {Colors} from '../style';
import IconCom from '../ReusableCom/IconCom';

const Dashboard = () => {
  const [name, setName] = useState('Shakib Al Hasan');
  const [userType, setUserType] = useState('Super Star');
  const [totalCoins, setTotalCoins] = useState(100);
  return (
    <View style={{flex: 1, backgroundColor: Colors.grayBlack}}>
      <View
        style={{
          backgroundColor: Colors.lightYellow,
          height: 250,
          width: '100%',
          borderBottomEndRadius: 50,
          borderBottomStartRadius: 50,
        }}>
        <View
          style={{
            flex: 0.7,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '50%',
              marginLeft: 5,
            }}>
            <Image source={profilePic} style={styles.profileStyle} />
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
        </View>
        <View style={styles.buttomContainer}>
          <View style={styles.cardBandle}>
            <DashboardCard
              cardImgBack={oddBg}
              cardIcon={GreetingsIcon}
              cardTitle="Greetings"
              screenName="GreetingsDashboard"
            />
            <DashboardCard
              cardImgBack={evenBg}
              cardIcon={MeetupIcon}
              cardTitle="Meet Up"
            />
          </View>
          <View style={styles.cardBandle}>
            <DashboardCard
              cardImgBack={evenBg}
              cardIcon={qaIcon}
              cardTitle="Q&A"
            />
            <DashboardCard
              cardImgBack={oddBg}
              cardIcon={paidPostIcon}
              cardTitle="Paid Post"
            />
          </View>
          <View style={styles.cardBandle}>
            <DashboardCard
              cardImgBack={oddBg}
              cardIcon={liveChatIcon}
              cardTitle="Live Chat"
            />
            <DashboardCard
              cardImgBack={evenBg}
              cardIcon={eShowcaseIcon}
              cardTitle="E-Showcase"
            />
          </View>
          <View style={styles.cardBandle}>
            <DashboardCard
              cardImgBack={evenBg}
              cardIcon={learningSessionIcon}
              cardTitle="Learning Session"
            />
            <DashboardCard
              cardImgBack={oddBg}
              cardIcon={auditionIcon}
              cardTitle="Audition"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  topContainer: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImageStyle: {
    height: 700,
    width: 600,
    top: -250,
    right: 100,
  },
  innerContainer: {},
  topBgImg: {
    height: height,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    overflow: 'hidden',
    marginHorizontal: 5,
  },
  profileStyle: {
    borderColor: Colors.BLACK,
    borderWidth: 2,
    borderRadius: 100,
    height: 60,
    width: 60,
  },
  buttomContainer: {
    flex: 1.7,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -420,
  },
  cardBandle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 6,
  },
});

{
  <View style={styles.buttomContainer}>
    <View style={styles.cardBandle}>
      <DashboardCard
        cardImgBack={oddBg}
        cardIcon={GreetingsIcon}
        cardTitle="Greetings"
      />
      <DashboardCard
        cardImgBack={evenBg}
        cardIcon={MeetupIcon}
        cardTitle="Meet Up"
      />
    </View>
    <View style={styles.cardBandle}>
      <DashboardCard cardImgBack={evenBg} cardIcon={qaIcon} cardTitle="Q&A" />
      <DashboardCard
        cardImgBack={oddBg}
        cardIcon={paidPostIcon}
        cardTitle="Paid Post"
      />
    </View>
    <View style={styles.cardBandle}>
      <DashboardCard
        cardImgBack={oddBg}
        cardIcon={liveChatIcon}
        cardTitle="Live Chat"
      />
      <DashboardCard
        cardImgBack={evenBg}
        cardIcon={eShowcaseIcon}
        cardTitle="E-Showcase"
      />
    </View>
    <View style={styles.cardBandle}>
      <DashboardCard
        cardImgBack={evenBg}
        cardIcon={learningSessionIcon}
        cardTitle="Learning Session"
      />
      <DashboardCard
        cardImgBack={oddBg}
        cardIcon={auditionIcon}
        cardTitle="Audition"
      />
    </View>
  </View>;
}
