import React from 'react'
import { View, KeyboardAvoidingView, Keyboard,
  TouchableWithoutFeedback,SafeAreaView, Alert,
  StatusBar, Dimensions, StyleSheet
} from 'react-native'
import Auth from '@aws-amplify/auth'
import { Text, Button } from 'react-native-paper'
import { globalStyles, colors } from '../styles/globalStyles'
import MyInput from '../components/myInput'
import { ScrollView } from 'react-native-gesture-handler'

let inputRef = [null]
function addRef(i, ref) {
  inputRef.splice(i, 0, ref)
}

export default class Home extends React.Component {
  state = {
    username: '',
    password: '',
    authCode: '',
    secureTextEntry: true,
    showRest: false,
  }
  onChangeValue(key, value) {
  this.setState({[key]: value})
  }
  async forgotPassword() {
    const username = this.state.username
    await Auth.forgotPassword(username)
    .then(data => (console.log('New code sent', data)),
    Alert.alert('Enter new Password and the confirmation code.'), 
    this.onChangeValue('showRest', true))
    .catch(err => {
      if (! err.message) {
        console.log('Error while setting up the new password: ', err)
        Alert.alert('Error while setting up the new password: ', err)
      } else {
        console.log('Error while setting up the new password: ', err.message)
        Alert.alert('Error while setting up the new password: ', err.message)
      }
    })
  }
  async forgotPasswordSubmit() {
    const username = this.state.username
    const authCode = this.state.authCode
    const newPassword = this.state.password
    await Auth.forgotPasswordSubmit(username, authCode, newPassword)
    .then(() => {
      this.props.navigation.navigate('SignIn')
      console.log('the New password submitted successfully')
    })
    .catch(err => {
      if (! err.message) {
        console.log('Error while confirming the new password: ', err)
        Alert.alert('Error while confirming the new password: ', err)
      } else {
        console.log('Error while confirming the new password: ', err.message)
        Alert.alert('Error while confirming the new password: ', err.message)
      }
    })
  }

  render() {
    return (
      <KeyboardAvoidingView style={ globalStyles.container }> 
        <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
          <SafeAreaView style={{ width: Dimensions.get('screen').width, flex: 1, paddingHorizontal: 30 }}>
            <ScrollView showsVerticalScrollIndicator={ false }>
              <StatusBar />
              <Text style={{ ...globalStyles.header, marginTop: 30}}>Account Recovery</Text>
              <Text style={{ ...globalStyles.mediumText, marginTop: 20 }}>Enter your email</Text>
              <MyInput 
                autoFocus={ false }
                style={{ marginRight: 0}}
                value={ this.state.username }
                setValue={(value) => this.onChangeValue('username', value)}
              />
              <Button 
                style={{ marginTop: 20 }}
                onPress={() =>  this.forgotPassword() }
              >
                {this.state.showRest ? 'Resend confirmation code': 'Send confirmation code'}
              </Button>
              
              { this.state.showRest &&
              <View>
                <Text style={{ ...globalStyles.mediumText, marginTop: 20 }}>New Password</Text>
                <MyInput 
                  style={{ marginRight: 0}}
                  secureTextEntry={ this.state.secureTextEntry }
                  setSecureTextEntry={(value) => this.onChangeValue('secureTextEntry', !value)}
                  value={ this.state.password2 }
                  setValue={(value) => this.onChangeValue('password', value)}
                  onSubmitEditing={() => inputRef[0].focus()}
                />
                <Text style={{ ...globalStyles.mediumText, marginTop: 20 }}>Enter recieved OTP</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                  <MyInput 
                    inputRef={(v) => addRef(0, v)}
                    style={{ marginRight: 0, flex: 0, width: 112, fontSize: 25 }}
                    value={ this.state.authCode }
                    setValue={(value) => this.onChangeValue('authCode', value)}
                  />
                  <Button 
                    mode='outlined'
                    onPress={() =>  this.forgotPasswordSubmit() }
                  >
                    Reset Password
                  </Button>
                </View>
              </View> }
            </ScrollView>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  list: {},
})