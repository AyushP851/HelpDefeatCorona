import React from 'react'
import { View, KeyboardAvoidingView, TouchableWithoutFeedback,
SafeAreaView, StatusBar, Keyboard, Dimensions, Linking, Alert
} from 'react-native'
import Auth from '@aws-amplify/auth'
import { Text, ProgressBar, Button, Divider } from 'react-native-paper'
import { globalStyles, colors } from '../styles/globalStyles'
import MyInput from '../components/myInput'

export default class OTP extends React.Component {
  state = {
    username: this.props.navigation.getParam('email'),
    password: this.props.navigation.getParam('password'),
    name: this.props.navigation.getParam('name'),
    authCode: '',
  }
  onChangeValue(key, value) {
  this.setState({[key]: value})
  }
  async confirmSignUp() {
    const username = this.state.username
    const authCode = this.state.authCode
    await Auth.confirmSignUp(username, authCode)
    .then(() => {
      this.signIn()
      console.log('Confirm sign up successful')
      this.props.navigation.navigate('Medical', { name: this.state.name })
    })
    .catch(err => {
      if (! err.message) {
        console.log('Error when entering confirmation code: ', err)
        Alert.alert('Error when entering confirmation code: ', err)
      } else {
        console.log('Error when entering confirmation code: ', err.message)
        Alert.alert('Error when entering confirmation code: ', err.message)
      }
    })
  }
  async resendSignUp() {
    const username = this.state.username
    await Auth.resendSignUp(username)
    .then(() => console.log('Confirmation code resent successfully'))
    .catch(err => {
      if (! err.message) {
        console.log('Error requesting new confirmation code: ', err)
        Alert.alert('Error requesting new confirmation code: ', err)
      } else {
        console.log('Error requesting new confirmation code: ', err.message)
        Alert.alert('Error requesting new confirmation code: ', err.message)
      }
    })
  }
  async signIn() {
    const username = this.state.username
    const password = this.state.password
    await Auth.signIn(username, password)
    .then(user => {
      this.setState({ user })
    })
    .catch(err => {
      if (! err.message) {
        console.log('Error when signing in: ', err)
        Alert.alert('Error when signing in: ', err)
      } else {
        console.log('Error when signing in: ', err.message)
        Alert.alert('Error when signing in: ', err.message)
      }
    })
  }

  render() {
    return (
      <KeyboardAvoidingView style={{ ...globalStyles.container }}> 
        <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
          <SafeAreaView style={{ width: Dimensions.get('screen').width, flex: 1, paddingHorizontal: 40, alignItems: 'center' }}>
            <StatusBar />
            <ProgressBar progress={0.4} style={{ marginVertical: 30 }}/>
            <Text style={{ ...globalStyles.header, marginTop: 30 }}>Enter OTP recieved in registered Email</Text>
            <MyInput 
              autoFocus={ true }
              style={{ marginTop: 40, flex: 0, width: 112, fontSize: 25 }}
              keyboardType='numeric'
              value={ this.state.authCode }
              setValue={(value) => this.onChangeValue('authCode', value)}
            />
            <Button
              style={{ marginTop: 20 }} 
              onPress={() => this.resendSignUp()}>
              resend OTP
            </Button>
            <View style={{ flex: 1 }}></View>
            <Button 
              mode='contained'
              style={{ ...globalStyles.buttonStyle, marginBottom: 15, marginTop: 40 }}
              onPress={() =>  this.confirmSignUp() }
            >
              Sign Up
            </Button>
            <Divider />
            <View style={{ flexWrap: 'wrap', flexDirection: 'row', marginBottom: 20, marginHorizontal: 30, marginTop: 10, justifyContent: 'center' }}>
              <Text style={{ ...globalStyles.smallText, marginBottom: -15 }}>By signing up you accept our </Text>
              <Text style={{ ...globalStyles.smallText, color: colors.primary }}
                onPress={() => Linking.openURL('http://google.com')}>
                terms of services
              </Text>
              <Text style={ globalStyles.smallText }> and </Text>
              <Text style={{ ...globalStyles.smallText, color: colors.primary }}
                onPress={() => Linking.openURL('http://google.com')}>
                privacy policy</Text>
              <Text style={ globalStyles.smallText }>.</Text>
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    )
  }
}