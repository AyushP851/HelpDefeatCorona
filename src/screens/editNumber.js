import React from 'react'
import { View, KeyboardAvoidingView, Keyboard,
  TouchableWithoutFeedback,SafeAreaView, ScrollView,
  StatusBar, Dimensions, StyleSheet
} from 'react-native'
import { Text, TouchableRipple } from 'react-native-paper'
import { globalStyles, colors } from '../styles/globalStyles'

const EditNumber = () => {
  return (
    <KeyboardAvoidingView style={ globalStyles.container }> 
      <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
        <SafeAreaView style={{ width: Dimensions.get('screen').width, flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={ false }>
            <StatusBar />
            <Text>Edit Number</Text>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default EditNumber

const styles = StyleSheet.create({
  list: {},
})