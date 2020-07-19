import React, { useContext } from 'react'
import { View, KeyboardAvoidingView, SafeAreaView, 
  TouchableWithoutFeedback, Dimensions, Keyboard, StatusBar,
} from 'react-native'
import { Text, IconButton, Badge, Button } from 'react-native-paper'
import StateContext from '../context/stateContext';
import { globalStyles, colors } from '../styles/globalStyles'
import MyRadio from '../components/MyRadio'

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
            style={ globalStyles.badge }
            size={ 35 }
          >   1/3   </Badge>
          </View>
          <Text style={{ ...globalStyles.header, marginVertical: 30}}>Do you have any allergies?</Text>
          <MyRadio current={ state.allergies } setCurrent={(value) => onChangeState('allergies', value)}/>
          <View style={{ flex: 1 }}></View>
          <Button 
            mode='contained'
            style={{ ...globalStyles.buttonStyle, marginBottom: 40 }}
            onPress={() => props.navigation.navigate('Condition')}
          >
            Continue
          </Button>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default Allergy