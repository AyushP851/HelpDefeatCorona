import React, { useContext } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, 
  SafeAreaView, StatusBar, KeyboardAvoidingView, Dimensions, Image 
} from 'react-native';
import { Text, Button, ProgressBar, Divider } from 'react-native-paper';
import { globalStyles, colors } from '../styles/globalStyles';
import StateContext from '../context/stateContext'

const Medical = (props) => {
  const { state } = useContext(StateContext)

  return (
    <KeyboardAvoidingView style={ globalStyles.container }> 
      <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
        <SafeAreaView style={{ width: Dimensions.get('screen').width, flex: 1, paddingHorizontal: 20 }}>
          <StatusBar />
          <ProgressBar progress={0.75} style={{ marginVertical: 30 }}/>
          <Text style={{ ...globalStyles.header, marginTop: 10 }}>Hi { state.name }!</Text>
          <Text style={{ ...globalStyles.mediumText, paddingHorizontal: 20, textAlign: 'center', color: '#74758C' }}>We need your Medical History for the future monitoring. Please go through the Survey.</Text>
          <Image source={ require('../images/d.png') } style={{ alignSelf: 'center', marginTop: 40 }}/>
          <View style={{ flex: 1 }}></View>
          <Button 
            mode='contained'
            style={{ ...globalStyles.buttonStyle, marginBottom: 15, marginTop: 40 }}
            onPress={() => props.navigation.navigate('Allergy')}
          >
            Let's do it
          </Button>
          <Divider />
          <Button 
            labelStyle={{ ...globalStyles.smallText, color: colors.accent, marginBottom: 20, marginTop: 0 }}
            onPress={() => props.navigation.navigate('AuthLoading')}
          >
            I’ll do it later
          </Button>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default Medical