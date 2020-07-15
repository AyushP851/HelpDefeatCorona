import React, { useState, useContext, useEffect } from 'react';
import { View, ScrollView, TouchableWithoutFeedback, Keyboard, 
  SafeAreaView, StatusBar, KeyboardAvoidingView, Dimensions, Alert 
} from 'react-native';
import Auth from '@aws-amplify/auth'
import { Text, Button, ProgressBar } from 'react-native-paper';
import StateContext from '../context/stateContext';
import { globalStyles, colors } from '../styles/globalStyles';
import MyInput from '../components/myInput';

let inputRef = [null, null, null, null]
function addRef(i, ref) {
  inputRef.splice(i, 0, ref)
}

const Address = (props) => {

  useEffect(() => 
    onChangeState('country', props.navigation.getParam('country'))
  ,[])
  const { state, onChangeState } = useContext(StateContext)

  const nextScreen = async () => {
    console.log('hit')
    const username = state.email
    const password = state.password
    const email = state.email
    const phone_number = state.phoneNumber
    await Auth.signUp({
      username,
      password,
      attributes: { email, phone_number }
    })
    .then(() => {
      console.log('sign up successful!')
      Alert.alert('Enter the confirmation code you received.')
      props.navigation.navigate('OTP')
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
              value={ state.country }
            />
            <View style={{ flexDirection: 'row'}}>
              <View style={{ flex: 1, marginRight: 5}}>
                <Text style={{ ...globalStyles.mediumText, marginTop: 15 }}>City</Text>
                <MyInput
                  autoFocus={ true }
                  inputRef={(v) => addRef(0, v)}
                  value={ state.city }
                  setValue={(value) => onChangeState('city', value)}
                  onSubmitEditing={() => inputRef[1].focus()}
                />
              </View>
              <View style={{ flex: 1, marginLeft: 5}}>
                <Text style={{ ...globalStyles.mediumText, marginTop: 15 }}>Zipcode</Text>
                <MyInput
                  inputRef={(v) => addRef(1, v)}
                  keyboardType='numeric'
                  value={ state.zipcode }
                  setValue={(value) => onChangeState('zipcode', value)}
                  onSubmitEditing={() => inputRef[2].focus()}
                />
              </View>
            </View>
            <Text style={{ ...globalStyles.mediumText, marginTop: 15 }}>Street</Text>
            <MyInput
              inputRef={(v) => addRef(2, v)}
              value={ state.street }
              setValue={(value) => onChangeState('street', value)}
              onSubmitEditing={() => inputRef[3].focus()}
            />
            <Text style={{ ...globalStyles.mediumText, marginTop: 15 }}>Locality</Text>
            <MyInput
              inputRef={(v) => addRef(3, v)}
              value={ state.locality }
              setValue={(value) => onChangeState('locality', value)}
            />
            <Button onPress = {()=> console.log(state)}>press</Button>
            <Button 
              mode='contained'
              style={{ ...globalStyles.buttonStyle, marginBottom: 15, marginTop: 40 }}
              onPress={ nextScreen }
            >
              Continue
            </Button>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default Address
