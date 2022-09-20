import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';


import Login from './screens/login';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();


export default function Navigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TabNavigation" component={TabNavigation} />

    </Stack.Navigator>
    </NavigationContainer>
  );
}