import React, { useContext } from 'react'
import { View, KeyboardAvoidingView, SafeAreaView, 
  TouchableWithoutFeedback, Dimensions, Keyboard, StatusBar,
} from 'react-native'
import { Text, IconButton, Badge, 
  RadioButton, Button } from 'react-native-paper'
import StateContext from '../context/stateContext';
import { globalStyles, colors } from '../styles/globalStyles'

const Allergy = (props) => {

  const { state, onChangeState} = useContext(StateContext)
  
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
            onPress={() => props.navigation.navigate('Medical')}
          />
          <View style={{ flex:1 }}></View>
          <Badge
            style={{ color: colors.primary, backgroundColor: colors.accent, alignSelf: 'center' }}
            size={ 35 }
          >   1/3   </Badge>
          </View>
          <Text style={{ ...globalStyles.header, marginVertical: 30}}>Do you have any allergies?</Text>
          <View style={{ paddingHorizontal: 70}}>
            <RadioButton.Group 
              onValueChange={(value) => onChangeState('allergies', value==='true')} 
              value={ state.allergies ? 'true' : 'false' }>
              <RadioButton.Item 
                style={{ backgroundColor: state.allergies===false ?'#eee':colors.accent, paddingLeft: 30, borderRadius: 20, margin: 10 }}
                color={ colors.primary }
                label='Yes' 
                value='true' />
              <RadioButton.Item 
                style={{ backgroundColor: state.allergies===true ? '#eee':colors.accent, paddingLeft: 30, borderRadius: 20, margin: 10 }}
                color={ colors.primary }
                label='No'  
                value='false' />
            </RadioButton.Group>
          </View>
          <View style={{ flex: 1 }}></View>
          <Button 
            mode='contained'
            style={{ ...globalStyles.buttonStyle, marginBottom: 40 }}
            onPress={() => props.navigation.navigate('Condition', { name: state.name })}
          >
            Continue
          </Button>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default Allergy