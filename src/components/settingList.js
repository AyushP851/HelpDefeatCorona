import React from 'react'
import { View } from 'react-native'
import { Text, TouchableRipple, IconButton } from 'react-native-paper'
import { globalStyles, colors } from '../styles/globalStyles'

const List = ({ icon, text, onPress}) => {
  return (
    <TouchableRipple style={{ padding: 1 }} onPress={() => onPress()}>
      <View style={{ backgroundColor: colors.background, flexDirection: 'row', alignItems: 'center', paddingVertical: 5}}>
        <IconButton icon={ icon } color={ colors.placeholder }  style={{ marginHorizontal: 20 }} />
        <Text style={{ ...globalStyles.mediumText, color: colors.placeholder  }}>{ text }</Text>
      </View>
    </TouchableRipple>
  )
}

export default List