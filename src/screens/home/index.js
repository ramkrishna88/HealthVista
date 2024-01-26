import React from 'react';
import {View, Text, Button} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMugSaucer} from '@fortawesome/free-solid-svg-icons/faMugSaucer';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Welcome to Home Screen!</Text>
      <Button title="Go to Chat" onPress={() => navigation.navigate('Chat')} />
      <FontAwesomeIcon icon={faMugSaucer} size={32} />
    </View>
  );
};

export default Home;
