import React, { useEffect, useRef } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import BottomCurved from '../Components/BottomCurved';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

const Main = () => {
  const navigationRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('userData');
        console.log(jsonValue, "userData+++=====");

        // This is just a placeholder. Replace it with the correct condition.
        if (jsonValue && jsonValue.access) {
          navigationRef.current?.navigate('Private');
        }
      } catch (e) {
        console.log(e, "error+++=====");
        // Maybe show a message to the user or handle the error differently.
      }
    };

    fetchData();
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Private" component={BottomTabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;
