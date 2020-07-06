import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Checkbox } from 'react-native-paper';
import { globalStyles, colors } from '../styles/globalStyles';

const Checker = ({ setValue, text }) => {
  const [state, setState] = useState(false)
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 30, paddingVertical: 5 }}>
      <Checkbox
        color={ colors.primary }
        status={state ? 'checked' : 'unchecked'}
        onPress={() => (setState(!state), setValue(state))}
      />
      <Text 
        onPress={() => (setState(!state), setValue(state))}
        style={{ ...globalStyles.mediumText, paddingRight: 60, marginLeft: 10, color: state? colors.text:colors.placeholder }}
      >
        { text }
      </Text>
    </View>
  )
}

export default Checker