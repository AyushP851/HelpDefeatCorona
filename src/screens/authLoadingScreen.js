import React from 'react';
import { View } from 'react-native';
import Auth from '@aws-amplify/auth'
import { ActivityIndicator, Button } from 'react-native-paper';
import { globalStyles, colors } from '../styles/globalStyles'

export default class AuthLoading extends React.Component {
  state = {
    userToken: null
  }
  componentDidMount = async () => {
    await this.loadApp()
  }
  loadApp = async () => {
    await Auth.currentAuthenticatedUser()
      .then(user => {
        this.setState({ userToken: user.signInUserSession.accessToken.jwtToken})})
      .catch(err => console.log(err))
      this.props.navigation.navigate(this.state.userToken ? 'App' : 'Auth')
  }
  
  render() {
    return (
      <View style={{ ...globalStyles.container, justifyContent: 'center' }}>
        <ActivityIndicator 
          size='large'
        />
      </View>
    )
  }
}
