import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Status from '../screens/Status';
import Insurance from '../screens/Insurance';
import Payment from '../screens/Payment';
import messaging from '@react-native-firebase/messaging';
// import Settings from '../screens/Settings';
import {
  HomeActiveTapIcon,
  HomeIcon,
  PaymentActiveTabIcon,
  PaymentTabIcon,
  ProfileActiveIcon,
  ProfileTabIcon,
  StatusActiveTabIcon,
  StatusTabIcon,
} from '../assets/icons';
import {Image, TouchableOpacity, View} from 'react-native';
import {CowIcon} from '../assets/images';
import MilkDetails from '../screens/MilkDetails';
import HomeCover from '../screens/HomeCover';
import {registerDevice} from '../api/auth';

const Tab = createBottomTabNavigator();

const CustomTabBarIcon = ({focused, icon}) => (
  <Image
    source={icon}
    resizeMode="contain"
    style={{
      width: focused ? 30 : 25,
      height: focused ? 30 : 25,
      marginBottom: focused ? 5 : 0,
    }}
  />
);

const CenterTabButton = ({onPress}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      width: 70,
      height: 70,
      backgroundColor: '#fff',
      borderRadius: 35,
      top: -35,
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    }}>
    <CustomTabBarIcon focused={true} icon={CowIcon} />
  </TouchableOpacity>
);

const BottomTabNavigator = () => {
  const [fcmToken, setFCMToken] = useState('');

  useEffect(() => {
    async function getFCMToken() {
      try {
        const token = await messaging().getToken();
        setFCMToken(token);
        registerDevice(token).then(res => {
          console.log(res);
        });
      } catch (error) {
        console.log(error);
      }
    }

    getFCMToken();
  }, []);
  console.log(fcmToken, '______token');
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? HomeActiveTapIcon : HomeIcon;
          } else if (route.name === 'Status') {
            iconName = focused ? StatusActiveTabIcon : StatusTabIcon;
          } else if (route.name === 'Payments') {
            iconName = focused ? PaymentActiveTabIcon : PaymentTabIcon;
          } else if (route.name === 'Profile') {
            iconName = focused ? ProfileActiveIcon : ProfileTabIcon;
          } else if (route.name === 'Insurance') {
            iconName = CowIcon;
          }
          return <CustomTabBarIcon focused={focused} icon={iconName} />;
        },
        tabBarStyle: {
          height: 65,
          justifyContent: 'center',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          paddingBottom: 10,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeCover}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Status"
        component={MilkDetails}
        // component={Status}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Insurance"
        component={Insurance}
        options={{headerShown: false}}
      />
      {/* Render the custom centered tab button */}
      {/* <Tab.Screen name="CenterTabButton" component={Insurance} options={{ tabBarButton: () => <CenterTabButton /> }} /> */}
      <Tab.Screen
        name="Payments"
        component={Payment}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      {/* <Tab.Screen name="Settings" component={MilkDetails} options={{ tabBarVisible: false }} /> */}
      {/* <Tab.Screen name="Settings" component={MilkDetails} options={{ tabBarVisible:false,headerShown: false  }} /> */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
