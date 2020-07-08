import 'react-native-gesture-handler'
import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Setting from '../screens/settingScreen';
import EditProfile from '../screens/editProfile';
import EditNumber from '../screens/editNumber';
import EditPassword from '../screens/editPassword';
import EditMedical from '../screens/editMedical';
import EditContact from '../screens/editContacts';
import Logout from '../screens/logoutScreen'

const SettingStack = createStackNavigator({
  Setting: {
    screen: Setting,
    navigationOptions: () => ({
      headerShown: false,
    })
  },
  EditProfile: {
    screen: EditProfile,
    navigationOptions: () => ({
      headerShown: false,
    })
  },
  EditNumber: {
    screen: EditNumber,
    navigationOptions: () => ({
      headerShown: false,
    })
  },
  EditPassword: {
    screen: EditPassword,
    navigationOptions: () => ({
      headerShown: false,
    })
  },
  EditMedical: {
    screen: EditMedical,
    navigationOptions: () => ({
      headerShown: false,
    })
  },
  EditContact: {
    screen: EditContact,
    navigationOptions: () => ({
      headerShown: false,
    })
  },
  Logout: {
    screen: Logout,
    navigationOptions: () => ({
      headerShown: false,
    })
  },
})

export default createAppContainer(SettingStack)