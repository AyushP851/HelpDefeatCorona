import React, { useState } from 'react'
import { View, KeyboardAvoidingView, Keyboard,
  TouchableWithoutFeedback,SafeAreaView, Alert,
  StatusBar, Dimensions
} from 'react-native'
import Auth from '@aws-amplify/auth'
import { Text, Button } from 'react-native-paper'
import { globalStyles } from '../styles/globalStyles'
import MyInput from '../components/myInput'
import { ScrollView } from 'react-native-gesture-handler'

let inputRef = [null]
function addRef(i, ref) {
  inputRef.splice(i, 0, ref)
}

const ForgotPassword = (props) => {

  const [state, setState] = useState({
    username: '',
    password: '',
    authCode: '',
    secureTextEntry: true,
    showRest: false,
  })
  const onChangeValue = (key, value) => {
    setState({ ...state, [key]: value})
  }
  
  const forgotPassword = async () => {
    const username = state.username
    await Auth.forgotPassword(username)
    .then(data => (console.log('New code sent', data)),
    Alert.alert('Enter new Password and the confirmation code.'), 
    onChangeValue('showRest', true))
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
  const forgotPasswordSubmit = async () => {
    const username = state.username
    const authCode = state.authCode
    const newPassword = state.password
    await Auth.forgotPasswordSubmit(username, authCode, newPassword)
    .then(() => {
      props.navigation.navigate('SignIn')
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
              value={ state.username }
              setValue={(value) => onChangeValue('username', value)}
            />
            <Button 
              style={{ marginTop: 20 }}
              onPress={() =>  forgotPassword() }
            >
              {state.showRest ? 'Resend confirmation code': 'Send confirmation code'}
            </Button>
            
            { state.showRest &&
            <View>
              <Text style={{ ...globalStyles.mediumText, marginTop: 20 }}>New Password</Text>
              <MyInput 
                style={{ marginRight: 0}}
                secureTextEntry={ state.secureTextEntry }
                setSecureTextEntry={(value) => onChangeValue('secureTextEntry', !value)}
                value={ state.password2 }
                setValue={(value) => onChangeValue('password', value)}
                onSubmitEditing={() => inputRef[0].focus()}
              />
              <Text style={{ ...globalStyles.mediumText, marginTop: 20 }}>Enter recieved OTP</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                <MyInput 
                  inputRef={(v) => addRef(0, v)}
                  style={{ marginRight: 0, flex: 0, width: 112, fontSize: 25 }}
                  value={ state.authCode }
                  setValue={(value) => onChangeValue('authCode', value)}
                />
                <Button 
                  mode='outlined'
                  onPress={() =>  forgotPasswordSubmit() }
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

export default ForgotPassword