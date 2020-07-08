import React from 'react'
import { View, KeyboardAvoidingView, SafeAreaView, ScrollView,
  TouchableWithoutFeedback, Dimensions, Keyboard, StatusBar, 
} from 'react-native'
import { Text, IconButton, Badge, Button } from 'react-native-paper'
import { globalStyles, colors } from '../styles/globalStyles'
import Checker from '../components/checker'

export default class Condition extends React.Component {
  state = { 
    name: this.props.navigation.getParam('name'),
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false,
    h: false,
    i: false,
  }
  onChangeValue(key, value) {
    this.setState({[key]: value})
  }
  render() {
    return (
      <KeyboardAvoidingView style={ globalStyles.container }> 
        <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
          <SafeAreaView style={{ width: Dimensions.get('screen').width, flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={ false }>
            <StatusBar />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20 }}>
            <IconButton
              icon='keyboard-backspace'
              size={ 35 }
              color={ colors.placeholder }
              onPress={() => this.props.navigation.navigate('Allergy')}
            />
            <View style={{ flex:1 }}></View>
            <Badge
              style={{ color: colors.primary, backgroundColor: colors.accent, alignSelf: 'center' }}
              size={ 35 }
            >   2/3   </Badge>
            </View>
            <Text style={{ ...globalStyles.header, marginTop: 0, paddingHorizontal: 30, fontSize: 20}}>Have you ever been told by a doctor, nurse, or other health professional that you have any of the following medical conditions?</Text>
            <Text style={{ ...globalStyles.header, marginBottom: 10, color: colors.placeholder, fontSize: 18 }}>(Please select all that apply)</Text>
            <Checker 
              value={ this.state.a } 
              setValue={(value) => this.onChangeValue('a', !value)}
              text='Heart disease'
            />
            <Checker 
              value={ this.state.b } 
              setValue={(value) => this.onChangeValue('b', !value)}
              text='Kidney or Lover failure'
            />
            <Checker 
              value={ this.state.c } 
              setValue={(value) => this.onChangeValue('c', !value)}
              text='Diabetes'
            />
            <Checker 
              value={ this.state.d } 
              setValue={(value) => this.onChangeValue('d', !value)}
              text='Asthma'
            />
            <Checker 
              value={ this.state.e } 
              setValue={(value) => this.onChangeValue('e', !value)}
              text='High blood pressure'
            />
            <Checker 
              value={ this.state.f } 
              setValue={(value) => this.onChangeValue('f', !value)}
              text='Chronic lung disease such as COPD or emphysema'
            />
            <Checker 
              value={ this.state.g } 
              setValue={(value) => this.onChangeValue('g', !value)}
              text='Cancer (other than skin cancer) '
            />
            <Checker 
              value={ this.state.h } 
              setValue={(value) => this.onChangeValue('h', !value)}
              text='Autoimmune disorder such as rheumatoid athritis or Crohn’s disease'
            />
            <Checker 
              value={ this.state.i } 
              setValue={(value) => this.onChangeValue('i', !value)}
              text='Neurological disease (dimentia, stroke, seizures or a brain injury)'
            />
            <View style={{ flex: 1 }}></View>
            <Button 
              mode='contained'
              style={{ ...globalStyles.buttonStyle, marginTop: 40, marginBottom: 30 }}
              onPress={() => this.props.navigation.navigate('Smoke', { name: this.state.name })}
            >
              Continue
            </Button>
            </ScrollView>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
  )}
}