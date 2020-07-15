import React, { useEffect, useContext } from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import StateContext from '../context/stateContext';
import Auth from '@aws-amplify/auth';
import { globalStyles } from '../styles/globalStyles';

const AuthLoading = (props) => {

  useEffect(() => {
    loadApp()
  },[])
  const { onChangeState } = useContext(StateContext)

  const loadApp = async () => { 
    await Auth.currentAuthenticatedUser()
      .then(user => (onChangeState('clientId', user.username), props.navigation.navigate('App')))
      .catch(err => (console.log(err), props.navigation.navigate('Auth')))
  }
  
  return (
    <View style={{ ...globalStyles.container, justifyContent: 'center' }}>
      <ActivityIndicator 
        size='large'
      />
    </View>
  )
}

export default AuthLoading 