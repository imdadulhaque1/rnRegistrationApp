import {
  Alert,
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import IconCom from '../Components/ReusableCom/IconCom';
import HSS from '../Assets/images/logo.png';
import {Colors} from '../Components/style';
import Button from '../Components/ReusableCom/Button';

const Signup = ({navigation}) => {
  function handleNavigate(screenName) {
    navigation.navigate(screenName);
  }
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [confirmPass, setConfirmPass] = useState(false);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const handleSubmit = () => {
    Alert.alert(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}`);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.iconContainerStyle}>
        <Image source={HSS} style={styles.iconStyle} />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.titleContainerStyle}>
          <Text style={styles.loginTitle}>SIGN UP</Text>
        </View>
        <View style={styles.formInnerController}>
          <View style={styles.wholeInputStyle}>
            <Text
              style={{marginHorizontal: 18, color: Colors.activeBtnBgColor}}>
              Full Name
            </Text>
            <View style={styles.innerInputStyle}>
              <IconCom name="user" />
              <TextInput
                style={styles.inputStyle}
                placeholder="Enter Your Name........"
                placeholderTextColor="gray"
                onChangeText={value => setName(value)}
              />
            </View>
          </View>
          <View style={styles.wholeInputStyle}>
            <Text
              style={{marginHorizontal: 18, color: Colors.activeBtnBgColor}}>
              Phone
            </Text>
            <View style={styles.innerInputStyle}>
              <IconCom name="phone" />
              <TextInput
                style={styles.inputStyle}
                placeholder="+880 17700 19346"
                placeholderTextColor="gray"
                onChangeText={value => setPhone(value)}
              />
            </View>
          </View>
          <View style={styles.wholeInputStyle}>
            <Text
              style={{marginHorizontal: 18, color: Colors.activeBtnBgColor}}>
              Email
            </Text>
            <View style={styles.innerInputStyle}>
              <IconCom name="envelope" />
              <TextInput
                style={styles.inputStyle}
                placeholder="Enter Your Email........"
                placeholderTextColor="gray"
                onChangeText={value => setEmail(value)}
              />
            </View>
          </View>
          <View style={styles.wholeInputStyle}>
            <Text
              style={{marginHorizontal: 18, color: Colors.activeBtnBgColor}}>
              Password
            </Text>
            <View style={styles.innerInputStyle}>
              <IconCom name="lock" />
              <TextInput
                style={styles.inputStyle}
                placeholder="********"
                placeholderTextColor="gray"
                onChangeText={value => setPassword(value)}
                secureTextEntry={isPasswordVisible ? false : true}
              />
              <TouchableOpacity
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                <IconCom name={isPasswordVisible ? 'eye-slash' : 'eye'} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.wholeInputStyle}>
            <Text
              style={{marginHorizontal: 18, color: Colors.activeBtnBgColor}}>
              Confirm Password
            </Text>
            <View style={styles.innerInputStyle}>
              <IconCom name="lock" />
              <TextInput
                style={styles.inputStyle}
                placeholder="********"
                placeholderTextColor="gray"
                onChangeText={value => setConfirmPass(value)}
                secureTextEntry={isConfirmPasswordVisible ? false : true}
              />
              <TouchableOpacity
                onPress={() =>
                  setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                }>
                <IconCom
                  name={isConfirmPasswordVisible ? 'eye-slash' : 'eye'}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Auth BTN */}
          <View style={styles.authBtnStyle}>
            <Button btnTitle="LOGIN" onPress={() => handleNavigate('Login')} />
            <Button
              btnTitle="SIGN UP"
              onPress={() => handleNavigate('Dashboard')}
              // onPress={() => handleSubmit()}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Signup;
const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.grayBlack,
  },
  iconContainerStyle: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  iconStyle: {
    height: 90,
    width: 85,
  },
  formContainer: {
    flex: 1.6,
    backgroundColor: Colors.grayColor,
    borderTopStartRadius: 25,
    borderTopRightRadius: 25,
  },
  titleContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
  },
  loginTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Labrada-Regular',
    color: Colors.BLACK,
    borderBottomColor: Colors.grayBlack,
    borderBottomWidth: 1,
  },
  formInnerController: {
    height: '100%',
  },
  wholeInputStyle: {
    marginVertical: 10,
  },
  innerInputStyle: {
    borderColor: Colors.activeBtnBgColor,
    borderWidth: 2,
    marginHorizontal: 15,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  inputStyle: {
    width: '85%',
    color: Colors.BLACK,
  },
  textContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  textStyle: {
    color: Colors.BLACK,
  },
  authBtnStyle: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 20,
  },
});
