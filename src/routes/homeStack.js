import 'react-native-gesture-handler'
import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/homeScreen'

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      headerShown: false,
    })
  },
})

export default createAppContainer(HomeStack)