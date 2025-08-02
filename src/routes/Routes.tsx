import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../screens/auth/LoginScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import {IconProps} from '../components/Icon';
import {ThemeColors} from '../theme/theme';
import {SuccessScreen} from '../screens/auth/SuccessScreen';
import PasswordResetScreen from '../screens/auth/PasswordResetScreen';

export type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  PasswordResetScreen: undefined;
  SuccessScreen: {
    title: string;
    description: string;
    icon: {
      name: IconProps['name'];
      color: ThemeColors;
    };
  };
};
const Stack = createNativeStackNavigator<RootStackParamList>();

function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
        <Stack.Screen
          name="PasswordResetScreen"
          component={PasswordResetScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;
