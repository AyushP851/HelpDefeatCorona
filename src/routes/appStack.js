import 'react-native-gesture-handler'
import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import HomeIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import ActivityIcon from 'react-native-vector-icons/Feather'
import SettingIcon from 'react-native-vector-icons/MaterialIcons'
import homeStack from './homeStack';
import activityStack from './activityStack';
import settingStck from './settingStack';
import { colors } from '../styles/globalStyles';
import { IconButton } from 'react-native-paper';

const AppStack = createMaterialTopTabNavigator({
  Home: {
    screen: homeStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <HomeIcon
          name='home'
          color={ tintColor }
          size={ 25 }
        />
      )
    },
  },
  Activity: {
    screen: activityStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <ActivityIcon
          name='activity'
          color={ tintColor }
          size={ 25 }
        />
      )
    },
  },
  Setting: {
    screen: settingStck,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <SettingIcon
          name='settings'
          color={ tintColor }
          size={ 25 }
        />
      )
    },
  },
},
{
  initialRouteName: 'Home',
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    labelStyle: {
      fontSize: 12,
      lineHeight: 16,
    },
    activeTintColor: colors.primary,
    inactiveTintColor: colors.placeholder,
    style: {
      backgroundColor: colors.altBackground
    }
  },
})


export default createAppContainer(AppStack)