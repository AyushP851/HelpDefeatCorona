import React, { useImperativeHandle } from 'react';
import { View, ScrollView, TouchableWithoutFeedback, Keyboard, 
  SafeAreaView, StatusBar, KeyboardAvoidingView, Dimensions, Alert
} from 'react-native';
import Auth from '@aws-amplify/auth'
import { Text, Button, ProgressBar, Divider } from 'react-native-paper';
import { globalStyles, colors } from '../styles/globalStyles';
import MyInput from '../components/myInput';
import Birthday from '../components/datePicker'

let inputRef = [null, null, null, null]
function addRef(i, ref) {
  inputRef.splice(i, 0, ref)
}

export default class SignInScreen extends React.Component {
  
  state={
    phoneNumber: this.props.navigation.getParam('phoneNumber'),
    country: this.props.navigation.getParam('country'),
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    dob:'',
    secureTextEntry: true,
  }
  onChangeValue(key, value) {
  this.setState({[key]: value})
  }
  async continue() {
    console.log('this.hit')
    const username = this.state.email
    const password = this.state.password
    const email = this.state.email
    const phoneNumber = this.state.phoneNumber
    const phone_number = phoneNumber
    await Auth.signUp({
      username,
      password,
      attributes: { email, phone_number }
    })
    .then(() => {
      console.log('sign up successful!')
      Alert.alert('Enter the confirmation code you received.')
      this.props.navigation.navigate('OTP', { email: this.state.email, phoneNumber: this.state.phoneNumber, password: this.state.password, name: this.state.firstName })
    })
    .catch(err => {
      if (! err.message) {
        console.log('Error when signing up: ', err)
        Alert.alert('Error when signing up: ', err)
      } else {
        console.log('Error when signing up: ', err.message)
        Alert.alert('Error when signing up: ', err.message)
      }
    })
  }


  render() {
    return (
      <KeyboardAvoidingView style={ globalStyles.container }> 
        <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
          <SafeAreaView style={{ width: Dimensions.get('screen').width, flex: 1, paddingHorizontal: 20}}>
            <ScrollView showsVerticalScrollIndicator={ false }>
              <StatusBar />
              <ProgressBar progress={ 0.1 } style={{ marginVertical: 30 }}/>
              <Text style={{ ...globalStyles.header, marginTop: 10}}>Setup your account</Text>
              <Text style={{ ...globalStyles.mediumText, marginTop: 25 }}>First Name</Text>
              <MyInput 
                autoFocus={ true }
                inputRef={(v) => addRef(0, v)}
                value={ this.state.firstName}
                setValue={(value) => this.onChangeValue('firstName', value)}
                onSubmitEditing={() => inputRef[1].focus()}
              />
              <Text style={{ ...globalStyles.mediumText, marginTop: 15 }}>Last Name</Text>
              <MyInput 
                inputRef={(v) => addRef(1, v)}
                value={ this.state.lastName}
                setValue={(value) => this.onChangeValue('lastName', value)}
                onSubmitEditing={() => inputRef[2].focus()}
              />
              <Text style={{ ...globalStyles.mediumText, marginTop: 15 }}>Email</Text>
              <MyInput 
                inputRef={(v) => addRef(2, v)}
                value={ this.state.email }
                setValue={(value) => this.onChangeValue('email', value)}
                onSubmitEditing={() => inputRef[3].focus()}
              />
              <Text style={{ ...globalStyles.mediumText, marginTop: 15 }}>Password</Text>
              <MyInput 
                inputRef={(v) => addRef(3, v)}
                style={{ marginRight: 0}}
                secureTextEntry={ this.state.secureTextEntry }
                setSecureTextEntry={(value) => this.onChangeValue('secureTextEntry', !value)}
                value={ this.state.password}
                setValue={(value) => this.onChangeValue('password', value)}
              />
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ ...globalStyles.mediumText, marginTop: 15 }}>Date of Birth</Text>
                <Birthday 
                  setdob={(value) => this.onChangeValue('dob', value)} 
                />
              </View>
              <MyInput 
                placeholder='Date of Birth'
                disabled={ true }
                value={ this.state.dob }
              />
              <Button 
                mode='contained'
                style={{ ...globalStyles.buttonStyle, marginBottom: 15, marginTop: 40 }}
                onPress={() =>  this.continue() }
              >
                Continue
              </Button>
              <Divider />
              <View style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: 30 }}>
                <Text style={ globalStyles.smallText }>Already have an account?</Text>
                <Button 
                  labelStyle={{ ...globalStyles.smallText, color: colors.primary }}
                  onPress={() => this.props.navigation.navigate('SignIn')}
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
