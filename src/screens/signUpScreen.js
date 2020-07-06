import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard, 
  SafeAreaView, StatusBar, KeyboardAvoidingView,
  FlatList, TouchableOpacity,
} from 'react-native';
import { Text, Button, Divider, IconButton, Modal, Portal, TouchableRipple } from 'react-native-paper';
import { globalStyles, colors } from '../styles/globalStyles';
import MyInput from '../components/myInput';
import data from '../components/countries';


let inputRef = [null]
function addRef(i, ref) {
  inputRef.splice(i, 0, ref)
}
const defaultCountry = data.filter((obj) => {
  return (obj.name === 'India')
})[0]

export default class SignInScreen extends React.Component {
  state={
    flag: defaultCountry.flag,
    name: defaultCountry.name,
    phoneNumber: defaultCountry.dial_code,
    modalVisible: false,
  }
  onChangeState(key, value) {
  this.setState({[key]: value})
  }
  continue = async () => {
    this.props.navigation.navigate('Setup', { phoneNumber: this.state.phoneNumber, country: this.state.name })
  }
  showModal() {
    this.setState({ modalVisible: true })
  }
  hideModal() {
    this.setState({ modalVisible: false })
    inputRef[0].focus()
  }
  async selectCountry(country) {
    const countryData = await data
    try {
      const finalCountry = await countryData.filter(
        obj => obj.name === country
      )[0]
      this.setState({ phoneNumber: finalCountry.dial_code, flag: finalCountry.flag, name: finalCountry.name })
      await this.hideModal()
    }
    catch (err) {
      console.log(err)
    }
  }


  render() {
    const countryData = data
    return (
      <KeyboardAvoidingView style={ globalStyles.container }> 
        <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
          <SafeAreaView>
            <StatusBar />
            <Text style={{ ...globalStyles.header, marginTop: 70 }}>Let's get started.</Text>
            <Text style={ globalStyles.header }>What's your number ?</Text>
            <View style={{ flexDirection: 'row', marginTop: 30, marginHorizontal: 40, alignItems: 'center' }}>
              <Text style={{ fontSize: 25 ,marginRight: -10}}>{ this.state.flag } </Text>
              <IconButton 
                icon='chevron-down' 
                size={ 30 }
                color={ colors.primary }
                onPress={() => this.showModal()}
              />
              <MyInput 
                inputRef={(v) => addRef(0, v) }
                style={{ flex: 0, width: 220, marginHorizontal: -30}}
                autoFocus={ true }
                label='Phone Number'
                keyboardType='numeric'
                value={ this.state.phoneNumber }
                setValue={(value) => this.onChangeState('phoneNumber', value)}
              />
              <Portal>
                <Modal
                  visible={ this.state.modalVisible }
                  contentContainerStyle={{ backgroundColor: colors.background, margin: 20, padding: 15 }}
                >
                  <FlatList
                    showsVerticalScrollIndicator={ false }
                    data={ countryData }
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) =>
                      <TouchableRipple onPress={() => this.selectCountry(item.name)}>
                          <Text style={ globalStyles.textStyle }>
                            { item.flag }    { item.name }   ({ item.dial_code })
                          </Text>
                      </TouchableRipple>
                    }
                  />
                  <Button
                    mode='outlined'
                    onPress={() => this.hideModal()}
                    style={{ marginTop: 20 }}>
                      Cancel
                  </Button>
                </Modal>
              </Portal>
            </View>
            <View style={{ flex: 1 }} />
            <Button 
              mode='contained'
              style={{ ...globalStyles.buttonStyle, marginBottom: 15 }}
              onPress={ this.continue }
            >
              Continue
            </Button>
            <Divider />
            <View style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: 30 }}>
              <Text style={ globalStyles.smallText }>Already have an account?</Text>
              <Button 
                labelStyle={{ ...globalStyles.smallText, color: colors.primary }}
                onPress={() => this.props.navigation.navigate('SignIn')}
              >
                Sign In
              </Button>
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    )
  }
}
