import React, { useState, useEffect, useContext } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, 
  SafeAreaView, StatusBar, KeyboardAvoidingView,
  FlatList 
} from 'react-native';
import { Text, Button, Divider, IconButton, 
  Modal, Portal, TouchableRipple } from 'react-native-paper';
import StateContext from '../context/stateContext';
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

const SignUp = (props) => {

  useEffect(() => {
    onChangeState('phoneNumber', defaultCountry.dial_code)
  }, [])
  const {  state, onChangeState } = useContext(StateContext)
  const [flag, setFlag] = useState(defaultCountry.flag)
  const [name, setName] = useState(defaultCountry.name)
  const [visible, setVisible] = useState(false)

  const nextScreen = () => {
    props.navigation.navigate('Setup', { name: name })
  }
  const countryData = data
  
  return (
    <KeyboardAvoidingView style={ globalStyles.container }> 
      <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
        <SafeAreaView>
          <StatusBar />
          <Text style={{ ...globalStyles.header, marginTop: 70 }}>Let's get started.</Text>
          <Text style={ globalStyles.header }>What's your number ?</Text>
          <View style={{ flexDirection: 'row', marginTop: 30, marginHorizontal: 40, alignItems: 'center' }}>
            <Text style={{ fontSize: 25 ,marginRight: -10}}>{ flag } </Text>
            <IconButton 
              icon='chevron-down' 
              size={ 30 }
              color={ colors.primary }
              onPress={() => setVisible(true)}
            />
            <MyInput 
              inputRef={(v) => addRef(0, v) }
              style={{ flex: 0, width: 220, marginHorizontal: -30}}
              autoFocus={ true }
              label='Phone Number'
              keyboardType='numeric'
              value={ state.phoneNumber }
              setValue={(value) => onChangeState('phoneNumber', value)}
            />
            <Portal>
              <Modal
                visible={ visible }
                contentContainerStyle={{ backgroundColor: colors.background, margin: 20, padding: 15 }}
              >
                <FlatList
                  showsVerticalScrollIndicator={ false }
                  data={ countryData }
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) =>
                    <TouchableRipple 
                      onPress={() => (onChangeState('phoneNumber', item.dial_code), setFlag(item.flag), setName(item.name), setVisible(false))}>
                        <Text style={ globalStyles.textStyle }>
                          { item.flag }    { item.name }   ({ item.dial_code })
                        </Text>
                    </TouchableRipple>
                  }
                />
                <Button
                  mode='outlined'
                  onPress={() => setVisible(false)}
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
            onPress={ nextScreen }
          >
            Continue
          </Button>
          <Divider />
          <View style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: 30 }}>
            <Text style={ globalStyles.smallText }>Already have an account?</Text>
            <Button 
              labelStyle={{ ...globalStyles.smallText, color: colors.accent }}
              onPress={() => props.navigation.navigate('SignIn')}
            >
              Sign In
            </Button>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default SignUp

