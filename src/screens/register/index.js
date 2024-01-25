import React, {useState} from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
import {CustomButton, CustomTextInput} from '../../components';

const backgroundImage = require('../../asset/imgs/register.png');

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [location, setLocation] = useState('');
  const [userType, setUserType] = useState('');

  const handleRegistration = () => {
    // Perform registration logic with the captured fields
    // For now, let's just navigate to the 'Home' screen
    navigation.navigate('Home');
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <CustomTextInput
          value={name}
          onChangedText={setName}
          placeholder="Name"
        />
        <CustomTextInput
          value={contact}
          onChangedText={setContact}
          placeholder="Contact"
        />
        <CustomTextInput
          value={specialty}
          onChangedText={setSpecialty}
          placeholder="Specialty"
        />
        <CustomTextInput
          value={location}
          onChangedText={setLocation}
          placeholder="Location"
        />
        <CustomTextInput
          value={userType}
          onChangedText={setUserType}
          placeholder="User Type (Doctor/Patient)"
        />
        <CustomButton title="Register" onButtonPress={handleRegistration} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    padding: 16,
  },
});

export default Register;
