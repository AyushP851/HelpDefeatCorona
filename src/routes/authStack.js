import 'react-native-gesture-handler'
import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignUp from '../screens/signUpScreen'
import SignIn from '../screens/signInScreen'
import Setup from '../screens/setupScreen'
import OTP from '../screens/otpScreen'
import Address from '../screens/addressScreen'
import Medical from '../screens/medicalScreen'
import Allergy from '../screens/allergyScreen'
import Condition from '../screens/conditionScreen'
import Smoke from '../screens/smokeScreen'
import End from '../screens/endScreen'
import { IconButton } from 'react-native-paper';

const AuthStack = createStackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: () => ({
      headerShown: false,
    })
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: () => ({
      headerShown: false,
    })
  },
  Setup: {
    screen: Setup,
    navigationOptions: () => ({
      headerShown: false,
    })
  },
  OTP: {
    screen: OTP,
    navigationOptions: () => ({
      headerShown: false,
    })
  },
  Address: {
    screen: Address,
    navigationOptions: () => ({
      headerShown: false,
    })
  },
  Medical: {
    screen: Medical,
    navigationOptions: () => ({
      headerShown: false,
    })
  },
  Allergy: {
    screen: Allergy,
    navigationOptions: () => ({
      headerShown: false,
    })
  },
  Condition: {
    screen: Condition,
    navigationOptions: () => ({
      headerShown: false,
    })
  },
  Smoke: {
    screen: Smoke,
    navigationOptions: () => ({
      headerShown: false,
    })
  },
  End: {
    screen: End,
    navigationOptions: () => ({
      headerShown: false,
    })
  },
})

export default createAppContainer(AuthStack)