import React from 'react'
import { View, KeyboardAvoidingView, Keyboard,
  TouchableWithoutFeedback,SafeAreaView, ScrollView,
  StatusBar, Dimensions, StyleSheet
} from 'react-native'
import { Text, TouchableRipple } from 'react-native-paper'
import { globalStyles } from '../styles/globalStyles'
import List from '../components/settingList'

export default class Home extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={ globalStyles.container }> 
        <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
          <SafeAreaView style={{ width: Dimensions.get('screen').width, flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={ false }>
              <StatusBar />
              <Text>Setting</Text>
              <List icon='logout' text='Ayush'/>
              <List icon='logout' text='Ayush'/>
              <List icon='logout' text='Ayush'/>
              <List icon='logout' text='Ayush' onPress={() => this.props.navigation.navigate('Logout')}/>
            </ScrollView>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  list: {},
})