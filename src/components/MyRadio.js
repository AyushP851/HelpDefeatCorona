import React from 'react';
import { View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { globalStyles, colors } from '../styles/globalStyles'

const MyRadio = ({ current, setCurrent, lable }) => {
  return (
    <View style={{ paddingHorizontal: 40, marginTop: 30}}>
      <RadioButton.Group 
        onValueChange={(value) => setCurrent(value==='true')} 
        value={ current ? 'true' : 'false' }>
        <RadioButton.Item 
          style={{ backgroundColor: !current?'#eee':colors.altAccent, paddingLeft: 30, borderRadius: 20, margin: 10 }}
          color={ colors.accent }
          label={ lable==='Happy'?'Happy':'Yes'}
          value='true' />
        <RadioButton.Item 
          style={{ backgroundColor: current? '#eee':colors.altAccent, paddingLeft: 30, borderRadius: 20, margin: 10 }}
          color={ colors.accent }
          label={ lable==='Happy'?'Sad':'No'}
          value='false' />
      </RadioButton.Group>
    </View>
  )
}

export default MyRadio