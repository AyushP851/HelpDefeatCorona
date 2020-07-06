import React from 'react'
import { View, KeyboardAvoidingView, Keyboard,
  TouchableWithoutFeedback,SafeAreaView, ScrollView,
  StatusBar, Dimensions,
} from 'react-native'
import { Text } from 'react-native-paper'
import { globalStyles, colors } from '../styles/globalStyles'

export default class Home extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={ globalStyles.container }> 
        <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
          <SafeAreaView style={{ width: Dimensions.get('screen').width, flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={ false }>
              <StatusBar />
              <Text>log Out</Text>
            </ScrollView>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    )
  }
}


