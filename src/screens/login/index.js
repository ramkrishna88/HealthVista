import React, {useState} from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
import {CustomButton, CustomTextInput} from '../../components';

const backgroundImage = require('../../asset/imgs/login.png');

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic with email and password
    // For now, let's just navigate to the 'Home' screen
    navigation.navigate('Home');
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <CustomTextInput
          value={email}
          onChangedText={setEmail}
          placeholder="Email"
        />
        <CustomTextInput
          value={password}
          onChangedText={setPassword}
          placeholder="Password"
          secureTextEntry
        />
        <View style={styles.buttonContainer}>
          <CustomButton title="Login" onButtonPress={handleLogin} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 25,
  },
});

export default Login;
