import React from 'react'
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

export default class EditPassword extends React.Component {
  state = {
    password1: '', // old password
    password2: '', // new password
    secureTextEntry1: true,
    secureTextEntry2: true,
  }
  onChangeValue(key, value) {
  this.setState({[key]: value})
  }
  changePassword = async () => {
    const { password1, password2 } = this.state
    await Auth.currentAuthenticatedUser()
    .then(user => {
      return Auth.changePassword(user, password1, password2)
    })
    .then(data => (console.log('Password changed successfully', data)), this.props.navigation.navigate('Setting'))
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

  render() {
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
              secureTextEntry={ this.state.secureTextEntry1 }
              setSecureTextEntry={(value) => this.onChangeValue('secureTextEntry1', !value)}
              value={ this.state.password1 }
              setValue={(value) => this.onChangeValue('password1', value)}
              onSubmitEditing={() => inputRef[0].focus()}
            />
            <Text style={{ ...globalStyles.mediumText, marginTop: 20 }}>New Password</Text>
            <MyInput 
              inputRef={(v) => addRef(0, v)}
              style={{ marginRight: 0}}
              secureTextEntry={ this.state.secureTextEntry2 }
              setSecureTextEntry={(value) => this.onChangeValue('secureTextEntry2', !value)}
              value={ this.state.password2 }
              setValue={(value) => this.onChangeValue('password2', value)}
            />
            <View style={{ flex: 1 }}></View>
            <Button 
              mode='contained'
              style={{ ...globalStyles.buttonStyle, marginBottom: 40, marginTop: 40 }}
              onPress={() =>  this.changePassword() }
            >
              Change Password
            </Button>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  list: {},
})