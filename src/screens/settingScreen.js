import React, { useState } from 'react'
import { View, KeyboardAvoidingView, Keyboard,
  TouchableWithoutFeedback,SafeAreaView, ScrollView,
  StatusBar, Dimensions, Linking
} from 'react-native'
import { Text } from 'react-native-paper'
import { globalStyles, colors } from '../styles/globalStyles'
import List from '../components/settingList'

const Setting = (props) => {
  
  return (
    <KeyboardAvoidingView style={{ ...globalStyles.container, backgroundColor: colors.altBackground }}> 
      <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
        <SafeAreaView style={{ width: Dimensions.get('screen').width, flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={ false }>
            <StatusBar />
            <View style={{ height: (Dimensions.get('screen').height)/4, backgroundColor: colors.primary }}></View>
            <Text style={{ ...globalStyles.mediumText, color: colors.primary, paddingVertical: 10, paddingLeft: 30 }}>Account Setting</Text>
            <List icon='account-circle' text='*Edit Profile' onPress={() => props.navigation.navigate('EditProfile')}/>
            <List icon='clipboard-account' text='*Edit Number & Email Address' onPress={() => props.navigation.navigate('EditNumber')}/>
            <List icon='lock-reset' text='Change Password' onPress={() => props.navigation.navigate('EditPassword')}/>
            <Text style={{ ...globalStyles.mediumText, color: colors.primary, paddingVertical: 10, paddingLeft: 30 }}>Medical History</Text>
            <List icon='medical-bag' text='*Edit Medical Information' onPress={() => props.navigation.navigate('EditMedical')}/>
            <List icon='phone-plus' text='*Add Emergency Contacts' onPress={() => props.navigation.navigate('EditContact')}/>
            <Text style={{ ...globalStyles.mediumText, color: colors.primary, paddingVertical: 10, paddingLeft: 30 }}>Others</Text>
            <List icon='security' text='Privacy and Security' onPress={() => Linking.openURL('http://google.com')}/>
            <List icon='cloud-question' text="FAQ's" onPress={() => Linking.openURL('http://google.com')}/>
            <List icon='logout' text='Log Out' onPress={() => props.navigation.navigate('Logout')}/>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default Setting

