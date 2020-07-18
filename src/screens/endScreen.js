import React, { useContext } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, 
  SafeAreaView, StatusBar, KeyboardAvoidingView, Dimensions, Image 
} from 'react-native';
import { Text, Button, ProgressBar } from 'react-native-paper';
import { globalStyles } from '../styles/globalStyles';
import StateContext from '../context/stateContext'


const End = (props) => {

  const { state } = useContext(StateContext)

  return (
    <KeyboardAvoidingView style={ globalStyles.container }> 
      <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
        <SafeAreaView style={{ width: Dimensions.get('screen').width, flex: 1, paddingHorizontal: 20 }}>
          <StatusBar />
          <ProgressBar progress={ 1 } style={{ marginVertical: 30 }}/>
          <Text style={{ ...globalStyles.header, marginTop: 10 }}>Thanks { state.firstName } for your Medical History!</Text>
          <Image source={ require('../images/e.png') } style={{ alignSelf: 'center', marginTop: 60 }}/>
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
