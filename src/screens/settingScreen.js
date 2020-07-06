import React from 'react'
import { View, KeyboardAvoidingView, Keyboard,
  TouchableWithoutFeedback,SafeAreaView, ScrollView,
  StatusBar, Dimensions, Linking
} from 'react-native'
import { Text, TouchableRipple } from 'react-native-paper'
import { globalStyles, colors } from '../styles/globalStyles'
import List from '../components/settingList'

export default class Home extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={{ ...globalStyles.container, backgroundColor: colors.altBackground }}> 
        <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
          <SafeAreaView style={{ width: Dimensions.get('screen').width, flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={ false }>
              <StatusBar />
              <View style={{ height: 250, backgroundColor: colors.primary }}></View>
              <List icon='account-circle' text='Edit Profile' onPress={() => this.props.navigation.navigate('EditProfile')}/>
              <List icon='clipboard-account' text='Edit Number & Email Address' onPress={() => this.props.navigation.navigate('EditNumber')}/>
              <List icon='lock-reset' text='Change Password' onPress={() => this.props.navigation.navigate('EditPassword')}/>
              <List icon='medical-bag' text='Edit Medical Information' onPress={() => this.props.navigation.navigate('EditMedical')}/>
              <List icon='phone-plus' text='Add Emergency Contacts' onPress={() => this.props.navigation.navigate('EditContact')}/>
              <List icon='security' text='Privacy and Security' onPress={() => Linking.openURL('http://google.com')}/>
              <List icon='cloud-question' text="FAQ's" onPress={() => Linking.openURL('http://google.com')}/>
              <List icon='logout' text='Log Out' onPress={() => this.props.navigation.navigate('Logout')}/>
            </ScrollView>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    )
  }
}

