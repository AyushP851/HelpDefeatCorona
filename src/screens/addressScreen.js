import React from 'react';
import { View, ScrollView, TouchableWithoutFeedback, Keyboard, 
  SafeAreaView, StatusBar, KeyboardAvoidingView, Dimensions 
} from 'react-native';
import { Text, Button, ProgressBar, Divider } from 'react-native-paper';
import { globalStyles, colors } from '../styles/globalStyles';
import DatePicker from '../components/datePicker';
import MyInput from '../components/myInput';

let inputRef = [null, null, null, null]
function addRef(i, ref) {
  inputRef.splice(i, 0, ref)
}

export default class SignInScreen extends React.Component {
  state={
    country: this.props.navigation.getParam('country'),
    name: this.props.navigation.getParam('name'),
    city: '',
    zipcode: '',
    street: '',
    locality: '',
  }
  onChangeValue(key, value) {
  this.setState({[key]: value})
  }
  continue = async () => {
    this.props.navigation.navigate('Medical', { email: this.state.email, phoneNumber: this.state.phoneNumber, password: this.state.password, name: this.state.name })
  }

  render() {
    return (
      <KeyboardAvoidingView style={ globalStyles.container }> 
        <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
          <SafeAreaView style={{ width: Dimensions.get('screen').width, flex: 1, paddingHorizontal: 20 }}>
            <ScrollView showsVerticalScrollIndicator={ false }>
              <StatusBar />
              <ProgressBar progress={0.4} style={{ marginVertical: 30 }}/>
              <Text style={{ ...globalStyles.header, marginTop: 10 }}>Current address</Text>
              <Text style={{ ...globalStyles.mediumText, marginTop: 15 }}>Country</Text>
              <MyInput 
                placeholder='Country'
                disabled={ true }
                value={ this.state.country }
              />
              <View style={{ flexDirection: 'row'}}>
                <View style={{ flex: 1, marginRight: 5}}>
                  <Text style={{ ...globalStyles.mediumText, marginTop: 15 }}>City</Text>
                  <MyInput
                    autoFocus={ true }
                    inputRef={(v) => addRef(0, v)}
                    value={ this.state.city }
                    setValue={(value) => this.onChangeValue('city', value)}
                    onSubmitEditing={() => inputRef[1].focus()}
                  />
                </View>
                <View style={{ flex: 1, marginLeft: 5}}>
                  <Text style={{ ...globalStyles.mediumText, marginTop: 15 }}>Zipcode</Text>
                  <MyInput
                    inputRef={(v) => addRef(1, v)}
                    keyboardType='numeric'
                    value={ this.state.zipcode }
                    setValue={(value) => this.onChangeValue('zipcode', value)}
                    onSubmitEditing={() => inputRef[2].focus()}
                  />
                </View>
              </View>
              <Text style={{ ...globalStyles.mediumText, marginTop: 15 }}>Street</Text>
              <MyInput
                inputRef={(v) => addRef(2, v)}
                value={ this.state.street }
                setValue={(value) => this.onChangeValue('street', value)}
                onSubmitEditing={() => inputRef[3].focus()}
              />
              <Text style={{ ...globalStyles.mediumText, marginTop: 15 }}>Locality</Text>
              <MyInput
                inputRef={(v) => addRef(3, v)}
                value={ this.state.locality }
                setValue={(value) => this.onChangeValue('locality', value)}
              />
              
              <Button 
                mode='contained'
                style={{ ...globalStyles.buttonStyle, marginBottom: 15, marginTop: 40 }}
                onPress={ this.continue }
              >
                Continue
              </Button>
              <Divider />
              <View style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: 30 }}>
                <Text style={ globalStyles.smallText }>Already have an account?</Text>
                <Button 
                  labelStyle={{ ...globalStyles.smallText, color: colors.primary }}
                  onPress={() => console.log('')}
                >
                  Sign In
                </Button>
              </View>
            </ScrollView>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    )
  }
}
