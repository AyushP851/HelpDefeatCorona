import React from 'react'
import { StyleSheet, View, Alert, Image, 
  TouchableWithoutFeedback, SafeAreaView, StatusBar, 
  Keyboard, KeyboardAvoidingView
} from 'react-native'
import Auth from '@aws-amplify/auth'
import { Text, Button, Divider} from 'react-native-paper'
import { globalStyles, colors } from '../styles/globalStyles'
import MyInput from '../components/myInput'

let inputRef = [null, null, null, null]
function addRef(i, ref) {
  inputRef.splice(i, 0, ref)
}

export default class SignInScreen extends React.Component {
  
  state = {
    username: '',
    password: '',
    secureTextEntry: true,
  }
  onChangeValue(key, value) {
    this.setState({[key]: value})
  }
  async signIn() {
    const username = this.state.username
    const password = this.state.password
    await Auth.signIn(username, password)
    .then(user => {
      this.setState({ user })
      this.props.navigation.navigate('AuthLoading')
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
      <KeyboardAvoidingView style={ globalStyles.container }>
        <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
          <SafeAreaView style={{ flex: 1 }}>
            <StatusBar/>       
            <Image source={ require('../images/logo.png') } style={{ marginVertical: 10, alignSelf: 'center' }}/>     
            <Text style={ globalStyles.header }>Log in</Text>
            <Text style={{ ...globalStyles.mediumText, marginTop: 10 }}>Email address</Text>
            <MyInput 
              autoFocus={ true }
              inputRef={(v) => addRef(0, v)}
              value={ this.state.username }
              setValue={(value) => this.onChangeValue('username', value)}
              onSubmitEditing={() => inputRef[1].focus()}
            />
            <Text style={{ ...globalStyles.mediumText, marginTop: 20 }}>password</Text>
            <MyInput 
              inputRef={(v) => addRef(1, v)}
              style={{ marginRight: -5}}
              secureTextEntry={ this.state.secureTextEntry}
              setSecureTextEntry={(value) => this.onChangeValue('secureTextEntry', !value)}
              value={ this.state.password }
              setValue={(value) => this.onChangeValue('password', value)}
            />
            <View style={{ flex: 1}}></View>
            <Button 
              mode='contained'
              style={{ ...globalStyles.buttonStyle, marginBottom: 15, marginTop: 40 }}
              onPress={() =>  this.signIn() }
            >
              Sign In
            </Button>
            <Divider />
            <View style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: 30 }}>
              <Text style={ globalStyles.smallText }>Don't have an account?</Text>
              <Button 
                labelStyle={{ ...globalStyles.smallText, color: colors.primary }}
                onPress={() => this.props.navigation.navigate('SignUp')}
              >
                Sign Up
              </Button>
            </View>
          </SafeAreaView>       
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4446AD', 
    flexDirection: 'row',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: '500',
    fontStyle: 'normal',
    color: '#fff',
    textAlign: 'center',
    marginTop: 90,
  },
  input: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'normal',
    color: '#fff',
  },
  itemStyle: {
    marginBottom: 20,
  },
  buttonStyle: {
    elevation: 10,
    alignSelf: 'center',
    margin: 10,
    padding: 20,
    width: 310,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFCF60',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#201F4F',
    fontWeight: '600',
    textAlign: 'center',
  },
  forgetText: {
    marginBottom: 40,
    fontSize: 13,
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: '#fff',
    textAlign: 'center',
    marginTop: 7,
  },
})