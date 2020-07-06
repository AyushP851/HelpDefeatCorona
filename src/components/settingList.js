import React from 'react'
import { View } from 'react-native'
import { Text, TouchableRipple, IconButton } from 'react-native-paper'
import { globalStyles, colors } from '../styles/globalStyles'

const List = ({ icon, text, onPress}) => {
  return (
    <View style={{ backgroundColor: colors.altBackground, borderWidth: 0.7, borderColor: '#FFF', flexDirection: 'row', alignItems: 'center'}}>
      <IconButton icon={ icon } style={{ marginLeft: 30}} />
      <TouchableRipple style={{ flex: 1, padding: 7}} onPress={() => onPress()}>
        <Text style={{ ...globalStyles.mediumText }}>{ text }</Text>
      </TouchableRipple>
    </View>
  )
}

export default List