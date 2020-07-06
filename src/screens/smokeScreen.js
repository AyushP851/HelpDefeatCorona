import React from 'react'
import { View, KeyboardAvoidingView, SafeAreaView, 
  TouchableWithoutFeedback, Dimensions, Keyboard, StatusBar,
} from 'react-native'
import { Text, IconButton, Badge, RadioButton, Button } from 'react-native-paper'
import { globalStyles, colors } from '../styles/globalStyles'

export default class Home extends React.Component {
  state = { 
    name: this.props.navigation.getParam('name'),
    value: 'first',
    value2: 'first'
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
              onPress={() => this.props.navigation.navigate('Condition')}
            />
            <View style={{ flex:1 }}></View>
            <Badge
              style={{ color: colors.primary, backgroundColor: colors.accent, alignSelf: 'center' }}
              size={ 35 }
            >   3/3   </Badge>
            </View>
            <Text style={{ ...globalStyles.header, marginTop: 20, marginBottom: 15}}>Have you ever smoked?</Text>
            <View style={{ paddingHorizontal: 70}}>
              <RadioButton.Group 
                onValueChange={value => this.onChangeValue('value', value)} 
                value={ this.state.value }
              >
                <RadioButton.Item 
                  style={{ backgroundColor: this.state.value==='first'?colors.accent:'#eee', paddingLeft: 30, borderRadius: 20, margin: 5 }}
                  color={ colors.primary }
                  label='I currently smoke' 
                  value='first' />
                <RadioButton.Item 
                  style={{ backgroundColor: this.state.value==='second'?colors.accent:'#eee', paddingLeft: 30, borderRadius: 20, margin: 5 }}
                  color={ colors.primary }
                  label='I used to smoke'  
                  value='second' />
                  <RadioButton.Item 
                  style={{ backgroundColor: this.state.value==='third'?colors.accent:'#eee', paddingLeft: 30, borderRadius: 20, margin: 5 }}
                  color={ colors.primary }
                  label='I’ve never smoked'  
                  value='third' />
              </RadioButton.Group>
            </View>
            <Text style={{ ...globalStyles.header, marginTop: 30, marginBottom: 15}}>Do you have severe obesity?</Text>
            <View style={{ paddingHorizontal: 70}}>
              <RadioButton.Group 
                onValueChange={value2 => this.onChangeValue('value2', value2)} 
                value={ this.state.value2 }>
                <RadioButton.Item 
                  style={{ backgroundColor: this.state.value2==='second'?'#eee':colors.accent, paddingLeft: 30, borderRadius: 20, margin: 5 }}
                  color={ colors.primary }
                  label='Yes' 
                  value='first' />
                <RadioButton.Item 
                  style={{ backgroundColor: this.state.value2==='first'?'#eee':colors.accent, paddingLeft: 30, borderRadius: 20, margin: 5 }}
                  color={ colors.primary }
                  label='No'  
                  value='second' />
              </RadioButton.Group>
            </View>
            <View style={{ flex: 1 }}></View>
            <Button 
              mode='contained'
              style={{ ...globalStyles.buttonStyle, marginBottom: 40 }}
              onPress={() => this.props.navigation.navigate('End', { name: this.state.name })}
            >
              Continue
            </Button>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
  )}
}