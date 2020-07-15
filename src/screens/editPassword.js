import React, { useState } from 'react'
import { View, KeyboardAvoidingView, Keyboard,
  TouchableWithoutFeedback,SafeAreaView, Alert,
  StatusBar, Dimensions, StyleSheet
} from 'react-native'
import Auth from '@aws-amplify/auth'
import { Text, Button } from 'react-native-paper'
import { globalStyles, colors } from '../styles/globalStyles'
import MyInput from '../components/myInput'

let inputRef = [null]
function addRef(i, ref) {
  inputRef.splice(i, 0, ref)
}

const EditPassword = (props) => {

  const [state, setState] = useState({
    password1: '', // old password
    password2: '', // new password
    secureTextEntry1: true,
    secureTextEntry2: true,
  })
  const onChangeValue = (key, value) => {
    setState({ ...state, [key]: value })
  }
  
  const changePassword = async () => {
    const { password1, password2 } = state
    await Auth.currentAuthenticatedUser()
    .then(user => {
      return Auth.changePassword(user, password1, password2)
    })
    .then(data => (console.log('Password changed successfully', data)), props.navigation.navigate('Setting'))
    .catch(err => {
      if (! err.message) {
        console.log('Error changing password: ', err)
        Alert.alert('Error changing password: ', err)
      } else {
        console.log('Error changing password: ', err.message)
        Alert.alert('Error changing password: ', err.message)
      }
    })
  }

  return (
    <KeyboardAvoidingView style={ globalStyles.container }> 
      <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
        <SafeAreaView style={{ width: Dimensions.get('screen').width, flex: 1, paddingHorizontal: 30 }}>
          <StatusBar />
          <Text style={{ ...globalStyles.header, marginTop: 30}}>Change Current Password</Text>
          <Text style={{ ...globalStyles.mediumText, marginTop: 20 }}>Current Password</Text>
          <MyInput 
            autoFocus={ true }
            style={{ marginRight: 0}}
            secureTextEntry={ state.secureTextEntry1 }
            setSecureTextEntry={(value) => onChangeValue('secureTextEntry1', !value)}
            value={ state.password1 }
            setValue={(value) => onChangeValue('password1', value)}
            onSubmitEditing={() => inputRef[0].focus()}
          />
          <Text style={{ ...globalStyles.mediumText, marginTop: 20 }}>New Password</Text>
          <MyInput 
            inputRef={(v) => addRef(0, v)}
            style={{ marginRight: 0}}
            secureTextEntry={ state.secureTextEntry2 }
            setSecureTextEntry={(value) => onChangeValue('secureTextEntry2', !value)}
            value={ state.password2 }
            setValue={(value) => onChangeValue('password2', value)}
          />
          <View style={{ flex: 1 }}></View>
          <Button 
            mode='contained'
            style={{ ...globalStyles.buttonStyle, marginBottom: 40, marginTop: 40 }}
            onPress={() =>  changePassword() }
          >
            Change Password
          </Button>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default EditPassword