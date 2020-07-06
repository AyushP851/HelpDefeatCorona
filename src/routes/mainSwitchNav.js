import 'react-native-gesture-handler';
import React from 'react';
import { createAppContainer ,createSwitchNavigator } from 'react-navigation';
import AuthLoading from '../screens/authLoadingScreen';
import authStack from './authStack';
import appStack from './appStack';

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading,
      Auth: authStack,
      App: appStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);
