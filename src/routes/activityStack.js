import 'react-native-gesture-handler'
import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Activity from '../screens/activityScreen';

const ActivityStack = createStackNavigator({
  Activity: {
    screen: Activity,
    navigationOptions: () => ({
      headerShown: false,
    })
  },
})

export default createAppContainer(ActivityStack)