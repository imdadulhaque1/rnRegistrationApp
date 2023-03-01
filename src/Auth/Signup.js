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
import axios from 'axios';
import IconCom from '../Components/ReusableCom/IconCom';
import HSS from '../Assets/images/logo.png';
import {Colors} from '../Components/style';
import Button from '../Components/ReusableCom/Button';
import {useNavigation} from '@react-navigation/native';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirm_password] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigation = useNavigation();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const handleSubmit = () => {
    // Alert.alert(`Name: ${fullName}\nPhone: ${phone}\nEmail: ${email}`);
    axios
      .post('http://10.10.10.126:3000/users/signup', {
        fullName,
        phone,
        email,
        password,
        confirm_password,
        headers: {
          'Content-Type': 'applictaion/json',
        },
        // body: JSON.stringify({
        //   fullName: fullName,
        //   phone: phone,
        //   email: email,
        //   password: password,
        //   confirm_password: confirm_password,
        // }),
      })
      .then(response => {
        console.log(response.data);
        setIsLoading(false);
        navigation.navigate('Dashboard');
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
        setErrorMessage('An error occurred. Please try again later.');
      });
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
                value={fullName}
                onChangeText={value => setFullName(value)}
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
                value={phone}
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
                value={email}
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
                value={password}
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
                value={confirm_password}
                onChangeText={value => setConfirm_password(value)}
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
            <Button
              btnTitle="LOGIN"
              onPress={() => navigation.navigate('Login')}
            />
            <Button
              btnTitle="SIGN UP"
              // onPress={() => handleNavigate('Dashboard')}
              onPress={() => handleSubmit()}
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

// fetch('http://10.10.10.126:3000/users/signup', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'applictaion/json',
//       },
//       body: JSON.stringify({
//         "fullName":fullName,
//         "phone":phone,
//         "email":email,
//         "password":password,
//         "confirm_password":confirm_password,
//       }),
//     })
//       .then(res => res.json())
//       .then(data => {
//         console.log(data);
//       })
