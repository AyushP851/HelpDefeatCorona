import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import { globalStyles, colors } from '../styles/globalStyles'

export default class Home extends React.Component {
  render() {
  return (
    <View style={ globalStyles.container }>
      <Text style={ globalStyles.header }>Activity</Text>
    </View>
  )}
}