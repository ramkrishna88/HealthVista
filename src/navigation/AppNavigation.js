import React, {useState, useEffect} from 'react';
import {Alert, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import auth from '@react-native-firebase/auth';
import {
  Home,
  Splash,
  Login,
  Register,
  Chat,
  Qualification,
  Profile,
  Appointment,
} from '../screens/index';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faComment,
  faCalendar,
  faUser,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const user = auth().currentUser;
        if (user) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        {isAuthenticated ? (
          <Stack.Screen
            name="Authenticated"
            component={AuthenticatedTabNavigator}
          />
        ) : (
          <>
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: true,
                headerBackTitle: '',
                headerBackTitleVisible: false,
              }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{
                headerShown: true,
                headerBackTitle: '',
                headerBackTitleVisible: false,
              }}
            />
            <Stack.Screen
              name="Qualification"
              component={Qualification}
              options={{
                headerShown: true,
                headerBackTitle: '',
                headerBackTitleVisible: false,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const LogoutButton = ({navigation}) => {
  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: async () => {
            // Perform logout logic
            await auth().signOut();

            // Navigate to Splash screen after logout
            navigation.replace('Splash');
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <TouchableOpacity onPress={handleLogout} style={{marginRight: 16}}>
      <FontAwesomeIcon icon={faSignOutAlt} size={24} color="#e96060" />
    </TouchableOpacity>
  );
};

const AuthenticatedTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = faHome;
          } else if (route.name === 'Chat') {
            iconName = faComment;
          } else if (route.name === 'Appointment') {
            iconName = faCalendar;
          } else if (route.name === 'Profile') {
            iconName = faUser;
          }

          return <FontAwesomeIcon icon={iconName} size={size} color={color} />;
        },
        // eslint-disable-next-line react/no-unstable-nested-components
        headerRight: () => <LogoutButton navigation={navigation} />,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Appointment" component={Appointment} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default AppNavigation;
