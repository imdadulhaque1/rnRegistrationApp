import {
  Alert,
  Dimensions,
  Image,
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
import CheckBox from '@react-native-community/checkbox';

const Login = ({navigation}) => {
  function handleNavigate(screenName) {
    navigation.navigate(screenName);
  }
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPasswordl] = useState('');
  const [isCheckbox, setIsCheckbox] = useState(false);

  const handleSubmit = () => {
    Alert.alert(email);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.iconContainerStyle}>
        <Image source={HSS} style={styles.iconStyle} />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.titleContainerStyle}>
          <Text style={styles.loginTitle}>LOGIN</Text>
        </View>
        <View style={styles.formInnerController}>
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
                onChangeText={value => {
                  setEmail(value);
                }}
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
                placeholder="Enter Your Email........"
                placeholderTextColor="gray"
                secureTextEntry={isPasswordVisible ? false : true}
                onChangeText={value => {
                  setEmail(value);
                }}
              />
              <TouchableOpacity
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                <IconCom name={isPasswordVisible ? 'eye-slash' : 'eye'} />
              </TouchableOpacity>
            </View>
          </View>
          {/* Check Box */}
          <View style={styles.textContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <CheckBox
                disabled={false}
                value={isCheckbox}
                onValueChange={newValue => setIsCheckbox(newValue)}
              />
              <Text style={styles.textStyle}>Remember Me</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.textStyle}>Forgot Password ?</Text>
            </TouchableOpacity>
          </View>
          {/* Auth BTN */}
          <View style={styles.authBtnStyle}>
            <Button
              btnTitle="SIGN UP"
              onPress={() => handleNavigate('Signup')}
            />
            <Button
              btnTitle="LOGIN"
              // onClick={() => handleSubmit()}
              onPress={() => handleSubmit()}
              // onPress={() => handleNavigate('Dashboard')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.grayBlack,
  },
  iconContainerStyle: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    height: 135,
    width: 130,
  },
  formContainer: {
    flex: 1.2,
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
    alignItems: 'center',
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
