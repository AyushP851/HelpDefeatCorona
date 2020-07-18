import React, { useState, useContext } from 'react'
import { View, KeyboardAvoidingView, SafeAreaView, 
  TouchableWithoutFeedback, Dimensions, Keyboard, StatusBar,
} from 'react-native'
import { Text, IconButton, Badge, 
  RadioButton, Button } from 'react-native-paper'
import StateContext from '../context/stateContext';
import { globalStyles, colors } from '../styles/globalStyles'

const Smoke = (props) => {

  const { state, onChangeState } = useContext(StateContext)
  
  return (
    <KeyboardAvoidingView style={ globalStyles.container }> 
      <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
        <SafeAreaView style={{ width: Dimensions.get('screen').width, flex: 1 }}>
          <StatusBar />
          <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20 }}>
          <IconButton
            icon='keyboard-backspace'
            size={ 35 }
            color={ colors.placeholder }
            onPress={() => props.navigation.navigate('Condition')}
          />
          <View style={{ flex:1 }}></View>
          <Badge
            style={ globalStyles.badge }
            size={ 35 }
          >   3/3   </Badge>
          </View>
          <Text style={{ ...globalStyles.header, marginTop: 20, marginBottom: 15}}>Have you ever smoked?</Text>
          <View style={{ paddingHorizontal: 70}}>
            <RadioButton.Group 
              onValueChange={value => onChangeState('smoker', value)} 
              value={ state.smoker }
            >
              <RadioButton.Item 
                style={{ backgroundColor: state.smoker==='current'?colors.accent:'#eee', paddingLeft: 30, borderRadius: 20, margin: 5 }}
                color={ colors.primary }
                label='I currently smoke' 
                value='current' />
              <RadioButton.Item 
                style={{ backgroundColor: state.smoker==='used'?colors.accent:'#eee', paddingLeft: 30, borderRadius: 20, margin: 5 }}
                color={ colors.primary }
                label='I used to smoke'  
                value='used' />
                <RadioButton.Item 
                style={{ backgroundColor: state.smoker==='never'?colors.accent:'#eee', paddingLeft: 30, borderRadius: 20, margin: 5 }}
                color={ colors.primary }
                label='I’ve never smoked'  
                value='never' />
            </RadioButton.Group>
          </View>
          <Text style={{ ...globalStyles.header, marginTop: 30, marginBottom: 15}}>Do you have severe obesity?</Text>
          <View style={{ paddingHorizontal: 70}}>
            <RadioButton.Group 
              onValueChange={value => onChangeState('severeobesity', value==='true')} 
              value={ state.severeobesity?'true':'false' }>
              <RadioButton.Item 
                style={{ backgroundColor: state.severeobesity?colors.accent:'#eee', paddingLeft: 30, borderRadius: 20, margin: 5 }}
                color={ colors.primary }
                label='Yes' 
                value='true' />
              <RadioButton.Item 
                style={{ backgroundColor: !state.severeobesity?colors.accent:'#eee', paddingLeft: 30, borderRadius: 20, margin: 5 }}
                color={ colors.primary }
                label='No'  
                value='false' />
            </RadioButton.Group>
          </View>
          <View style={{ flex: 1 }}></View>
          <Button 
            mode='contained'
            style={{ ...globalStyles.buttonStyle, marginBottom: 40 }}
            onPress={() => props.navigation.navigate('End')}
          >
            Continue
          </Button>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default Smoke