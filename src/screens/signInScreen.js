import React, { useState, useContext } from 'react'
import { View, Alert, Image, 
  TouchableWithoutFeedback, SafeAreaView, StatusBar, 
  Keyboard, KeyboardAvoidingView
} from 'react-native'
import Auth from '@aws-amplify/auth'
import { Text, Button, Divider} from 'react-native-paper'
import StateContext from '../context/stateContext'
import { globalStyles, colors } from '../styles/globalStyles'
import MyInput from '../components/myInput'

let inputRef = [null, null, null, null]
function addRef(i, ref) {
  inputRef.splice(i, 0, ref)
}

const SignIn = (props) => {

  const { state, onChangeState } = useContext(StateContext)
  const [secure, setSecure] = useState(true)

  const signIn = async () =>  {
    const username = state.email
    const password = state.password
    await Auth.signIn(username, password)
    .then(user => {
      //onChangeState('user', { user })
      props.navigation.navigate('AuthLoading')
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

  return (
    <KeyboardAvoidingView style={ globalStyles.container }>
      <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar/>       
          <Image source={ require('../images/logo.png') } style={{ marginVertical: 0, alignSelf: 'center' }}/>     
          <Text style={ globalStyles.header }>Log In</Text>
          <Text style={{ ...globalStyles.mediumText, marginTop: 10 }}>Email address</Text>
          <MyInput 
            autoFocus={ true }
            inputRef={(v) => addRef(0, v)}
            value={ state.email }
            setValue={(value) => onChangeState('email', value)}
            onSubmitEditing={() => inputRef[1].focus()}
          />
          <Text style={{ ...globalStyles.mediumText, marginTop: 10 }}>Password</Text>
          <MyInput 
            inputRef={(v) => addRef(1, v)}
            style={{ marginRight: -5}}
            secureTextEntry={ secure }
            setSecureTextEntry={(value) => setSecure(!value)}
            value={ state.password }
            setValue={(value) => onChangeState('password', value)}
          />
          <Button
            style={{ alignSelf: 'flex-start', marginLeft: -15, marginTop: 10}}
            onPress={() => props.navigation.navigate('ForgotPassword')}
          >
            Forgot Password?
          </Button>
          <View style={{ flex: 1}}></View>
          <View style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: -10 }}>
            <Text style={ globalStyles.smallText }>Don't have an account?</Text>
            <Button 
              labelStyle={{ ...globalStyles.smallText, color: colors.primary }}
              onPress={() => props.navigation.navigate('SignUp')}
            >
              Sign Up
            </Button>
          </View>
          <Divider />
          <Button 
            mode='contained'
            style={{ ...globalStyles.buttonStyle, marginBottom: 20}}
            onPress={() => signIn()}
          >
            Sign In
          </Button>
        </SafeAreaView>       
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default SignIn