import React from 'react'
import { View, KeyboardAvoidingView, SafeAreaView, 
  TouchableWithoutFeedback, Dimensions, Keyboard, StatusBar,
} from 'react-native'
import { Text, IconButton, Badge, RadioButton, Button } from 'react-native-paper'
import { globalStyles, colors } from '../styles/globalStyles'

export default class Allergy extends React.Component {
  state = { 
    name: this.props.navigation.getParam('name'),
    value: 'first',
  }
  onChangeValue(key, value) {
  this.setState({[key]: value})
  }
  render() {
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
              onPress={() => this.props.navigation.navigate('Medical')}
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
                onValueChange={value => this.onChangeValue('value', value)} value={ this.state.value }>
                <RadioButton.Item 
                  style={{ backgroundColor: this.state.value==='second'?'#eee':colors.accent, paddingLeft: 30, borderRadius: 20, margin: 10 }}
                  color={ colors.primary }
                  label='Yes' 
                  value='first' />
                <RadioButton.Item 
                  style={{ backgroundColor: this.state.value==='first'?'#eee':colors.accent, paddingLeft: 30, borderRadius: 20, margin: 10 }}
                  color={ colors.primary }
                  label='No'  
                  value='second' />
              </RadioButton.Group>
            </View>
            <View style={{ flex: 1 }}></View>
            <Button 
              mode='contained'
              style={{ ...globalStyles.buttonStyle, marginBottom: 40 }}
              onPress={() => this.props.navigation.navigate('Condition', { name: this.state.name })}
            >
              Continue
            </Button>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
  )}
}