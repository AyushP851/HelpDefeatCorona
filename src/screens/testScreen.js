import React, { useState } from 'react';
import { View, ScrollView, TouchableWithoutFeedback, Keyboard, 
  SafeAreaView, StatusBar, KeyboardAvoidingView, Dimensions
} from 'react-native';
import { Text, Checkbox } from 'react-native-paper';
import { globalStyles, colors } from '../styles/globalStyles';

const Checker = ({ setValue, text }) => {
  const [state, setState] = useState(false)
  return (
    <View style={{ borderWidth: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 30 }}>
      <Checkbox
        color={ colors.primary }
        status={state ? 'checked' : 'unchecked'}
        onPress={() => (setState(!state), setValue(state))}
      />
      <Text style={{ ...globalStyles.mediumText, marginLeft: 10 }}>{ text }</Text>
    </View>
  )
}

export default Checker