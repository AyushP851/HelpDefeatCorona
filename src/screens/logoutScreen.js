import React, { useState } from 'react'
import { View, KeyboardAvoidingView, Keyboard,
  TouchableWithoutFeedback,SafeAreaView,
  StatusBar, Dimensions, Alert, Image
} from 'react-native'
import Auth from '@aws-amplify/auth'
import { Text, Button } from 'react-native-paper'
import { globalStyles } from '../styles/globalStyles'

const Logout = (props) => {

  const signOutAlert = async () => {
    await Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out from the app?',
      [
        {text: 'Cancel', onPress: () => console.log('Canceled'), style: 'cancel'},
        {text: 'OK', onPress: () => signOut()}, 
      ],
      { cancelable: false }
    )
  }
  const signOut = async () => {
    await Auth.signOut()
    .then(() => {
      console.log('Sign out complete')
      props.navigation.navigate('AuthLoading')
    })
    .catch(err => console.log('Error while signing out!', err))
  }
  const signOutAlertG = async () => {
    await Alert.alert(
      'Global Sign Out',
      'Are you sure you want to sign out from the app from all devices?',
      [
        {text: 'Cancel', onPress: () => console.log('Canceled'), style: 'cancel'},
        {text: 'OK', onPress: () => signOutG()}, 
      ],
      { cancelable: false }
    )
  }
  const signOutG = async () => {
    try {
      await Auth.signOut({ global: true });
      props.navigation.navigate('AuthLoading')

    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  return (
    <KeyboardAvoidingView style={ globalStyles.container }> 
      <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
        <SafeAreaView style={{ width: Dimensions.get('screen').width, flex: 1 }}>
          <StatusBar />
          <Text style={{ ...globalStyles.header, marginVertical: 50 }}>Sad to see you go.</Text>
          <Image source={ require('../images/b.png')} style={{ alignSelf: 'center'}}/>
          <View style={{ flex: 1}}></View>
          <View style={{ flexDirection: 'row', marginBottom: 40, paddingHorizontal: 5 }}>
            <Button
              mode='contained'
              style={{ margin: 10, flex: 1, paddingVertical: 5 }}
              onPress={() => signOutAlert()}
            >
              Log Out
            </Button>
            <Button
              mode='contained'
              style={{ margin: 10, flex: 1, paddingVertical: 5 }}
              onPress={() => signOutAlertG()}
            >
              Global Log Out
            </Button>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default Logout


