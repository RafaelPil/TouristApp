import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import AppStack from '../navigation/AppStack';
import EventDetailedScreen from '../screens/EventDetailedScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
      <Stack.Screen name="Main" component={AppStack} />
      <Stack.Screen name="EventDetailedPage" component={EventDetailedScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
