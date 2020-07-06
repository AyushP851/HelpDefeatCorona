import React from 'react';
import { View, ScrollView, TouchableWithoutFeedback, Keyboard, 
  SafeAreaView, StatusBar, KeyboardAvoidingView, Dimensions, Image 
} from 'react-native';
import { Text, Button, ProgressBar, Divider } from 'react-native-paper';
import { globalStyles, colors } from '../styles/globalStyles';
import DatePicker from '../components/datePicker';
import MyInput from '../components/myInput';

export default class SignInScreen extends React.Component {
  state={
    name: this.props.navigation.getParam('name'),
  }
  onChangeValue(key, value) {
  this.setState({[key]: value})
  }

  render() {
    return (
      <KeyboardAvoidingView style={ globalStyles.container }> 
        <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
          <SafeAreaView style={{ width: Dimensions.get('screen').width, flex: 1, paddingHorizontal: 20 }}>
            <ProgressBar progress={ 1 } style={{ marginVertical: 30 }}/>
            <Text style={{ ...globalStyles.header, marginTop: 10 }}>Thanks { this.state.name } for your Medical History!</Text>
            <Image source={ require('../images/d.png') } style={{ alignSelf: 'center', marginTop: 40 }}/>
            <View style={{ flex: 1 }}></View>
            <Button 
              mode='contained'
              style={{ ...globalStyles.buttonStyle, marginBottom: 40, marginTop: 40 }}
              onPress={() => this.props.navigation.navigate('AuthLoading')}
            >
              Go to Home
            </Button>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    )
  }
}
