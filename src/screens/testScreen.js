import React, { useState } from 'react';
import { View, ScrollView, TouchableWithoutFeedback, Keyboard, 
  SafeAreaView, StatusBar, KeyboardAvoidingView, Dimensions
} from 'react-native';
import { Text, Checkbox, Button } from 'react-native-paper';
import { globalStyles, colors } from '../styles/globalStyles';
import MyInput from '../components/myInput';

const Checker = (props) => {
  const [state, setState] = useState({ A: 'aaa', B: '' })
  const onChangeValue = (key, value) => {
    setState({ ...state, [key]: value})
  }

  return (
    <View>
      <Text>******  A: { state.A }     **** B : { state.B }  ***** </Text>
      <MyInput 
        label='name'
        value={ state.A }
        setValue={(value) => onChangeValue('A', value)}
      />
      <MyInput 
        label='age'
        value={ state.B }
        setValue={(value) => onChangeValue('B', value)}
      />
      <Text>{ props.pr }</Text>
      <Button onPress={() => console.log(props)}>console</Button>
    </View>
  )
}

export default Checker