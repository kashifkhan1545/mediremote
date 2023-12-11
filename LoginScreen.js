import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailBorderColor, setEmailBorderColor] = useState('red');
  const [passwordBorderColor, setPasswordBorderColor] = useState('red');
  const [emailError, setEmailError] = useState('You must enter an email');
  const [passwordError, setPasswordError] = useState('Please enter your password');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    if (!text) {
      setEmailBorderColor('red');
      setEmailError('You must enter an email');
    } else {
      setEmailBorderColor('black');
      setEmailError('');
    }
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    if (!text) {
      setPasswordBorderColor('red');
      setPasswordError('Please enter your password');
    } else {
      setPasswordBorderColor('black');
      setPasswordError('');
    }
  };

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

 // Inside the LoginScreen component
const handleLogin = async () => {
  setEmailError('');
  setPasswordError('');

  if (!email || !password || !isEmailValid(email)) {
    setEmailBorderColor(!email ? 'red' : isEmailValid(email) ? 'black' : 'red');
    setPasswordBorderColor(!password ? 'red' : 'black');

    setEmailError(!email ? 'You must enter an email' : isEmailValid(email) ? '' : 'Invalid email');
    setPasswordError(!password ? 'Please enter your password' : '');

    return;
  }

  try {
    const response = await axios.post('https://ehr.mediremote.com/rpmapi/api/account/login', {
      username: email,
      password: password,
    });


    if (response.data.statusCode === 200) {
      
      const usernameInitial = email.charAt(0).toUpperCase();

      navigation.navigate('Home', { usernameInitial });
    } else {
      console.error('Authentication failed:', response.data.message);
    }
  } catch (error) {
    console.error('Error during login:', error.message);
    Alert.alert('Login Failed', 'Incorrect email or password. Please try again.');
  }
};

  const handleForgotPassword = () => {
    console.log('Forgot password pressed');
  };

  const isButtonDisabled = !email || !password || !isEmailValid(email);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./logo.png')} style={styles.logo} />
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={[
              styles.input,
              { 
                borderColor: emailBorderColor,
                backgroundColor: email !== '' && isEmailValid(email) ? 'rgba(33,150,243,0.1)' : 'transparent',
              }
            ]}
            placeholder="Email"
            placeholderTextColor="red"
            value={email}
            onChangeText={handleEmailChange}
            onBlur={() => {
              if (!email || !isEmailValid(email)) {
                setEmailBorderColor('red');
                setEmailError(!email ? 'You must enter an email' : 'Invalid email');
              } else {
                setEmailBorderColor('black');
                setEmailError('');
              }
            }}
          />
          <Text style={styles.errorText}>{emailError}</Text>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={[
              styles.input,
              { 
                borderColor: passwordBorderColor,
                backgroundColor: password !== '' ? 'rgba(33,150,243,0.1)' : 'transparent',
              }
            ]}
            placeholder="Password*"
            placeholderTextColor="red"
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={handlePasswordChange}
            onBlur={() => {
              if (!password) {
                setPasswordBorderColor('red');
                setPasswordError('Please enter your password');
              } else {
                setPasswordBorderColor('black');
                setPasswordError('');
              }
            }}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={handleTogglePasswordVisibility}
          >
            <Icon name={isPasswordVisible ? 'eye' : 'eye-slash'} size={20} color="grey" />
          </TouchableOpacity>
          <Text style={styles.errorText}>{passwordError}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={[
          styles.loginButton,
          {
            width: '100%',
            backgroundColor: isButtonDisabled ? '#ccc' : '#000',
            opacity: isButtonDisabled ? 0.5 : 1,
          },
        ]}
        onPress={handleLogin}
        disabled={isButtonDisabled}
      >
        <Text style={[styles.buttonText, { color: isButtonDisabled ? '#666' : '#fff' }]}>
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={{ color: '#22d3ee', marginTop: 40, textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>
          Forgot your password
        </Text>
      </TouchableOpacity>

      <View style={styles.bottomTextContainer}>
        <Icon name="info-circle" size={30} color="rgba(33,150,243,0.5)" style={styles.infoIcon} />
        <Text style={styles.bottomText}>
          In case of any issues & concerns, please contact the administrator.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  logo: {
    width: 202,
    height: 54,
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'column',
  },
  input: {
    padding: 10,
    borderWidth: 1,
    fontSize: 14,
    borderRadius: 6,
    marginBottom: 10,
    height: 55,
  },
  loginButton: {
    padding: 10,
    borderRadius: 20,
    width: '100%',
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
  bottomTextContainer: {
    marginTop: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(33,150,243,0.1)',
    height: 60,
    borderRadius: 14,
    width: '107%',
    position: 'relative',
    flexDirection: 'row',
  },
  bottomText: {
    color: 'grey',
    fontSize: 14,
    paddingBottom: -10,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  infoIcon: {
    marginRight: -7,
    paddingBottom: 10,
  },
});

export default LoginScreen;
