import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import { globalStyles, colors } from '../styles/globalStyles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Home extends React.Component {
  render() {
  return (
    <View style={ globalStyles.container }>
      <Text style={ globalStyles.header }>Home</Text>
      <Icon 
        name='home'
        size={ 30 }
      />
    </View>
  )}
}