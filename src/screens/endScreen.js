import React, { useState } from 'react';
import { View, ScrollView, TouchableWithoutFeedback, Keyboard, 
  SafeAreaView, StatusBar, KeyboardAvoidingView, Dimensions, Image 
} from 'react-native';
import { Text, Button, ProgressBar, Divider } from 'react-native-paper';
import { globalStyles, colors } from '../styles/globalStyles';
import DatePicker from '../components/datePicker';
import MyInput from '../components/myInput';

const End = (props) => {

  const [state, setState] = useState({
    name: props.navigation.getParam('name'),
  })
  const onChangeValue = (key, value) => {
    setState({ ...state, [key]: value})
  }

  return (
    <KeyboardAvoidingView style={ globalStyles.container }> 
      <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
        <SafeAreaView style={{ width: Dimensions.get('screen').width, flex: 1, paddingHorizontal: 20 }}>
          <ProgressBar progress={ 1 } style={{ marginVertical: 30 }}/>
          <Text style={{ ...globalStyles.header, marginTop: 10 }}>Thanks { state.name } for your Medical History!</Text>
          <Image source={ require('../images/d.png') } style={{ alignSelf: 'center', marginTop: 40 }}/>
          <View style={{ flex: 1 }}></View>
          <Button 
            mode='contained'
            style={{ ...globalStyles.buttonStyle, marginBottom: 40, marginTop: 40 }}
            onPress={() => props.navigation.navigate('AuthLoading')}
          >
            Go to Home
          </Button>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
 
export default End
