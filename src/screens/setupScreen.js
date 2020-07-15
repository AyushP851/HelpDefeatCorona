import React, { useState, useContext } from 'react';
import { View, ScrollView, TouchableWithoutFeedback, Keyboard, 
  SafeAreaView, StatusBar, KeyboardAvoidingView, Dimensions, Alert
} from 'react-native';
import { Text, Button, ProgressBar, Divider } from 'react-native-paper';
import StateContext from '../context/stateContext';
import { globalStyles, colors } from '../styles/globalStyles';
import MyInput from '../components/myInput';
import Birthday from '../components/datePicker'

let inputRef = [null, null, null, null]
function addRef(i, ref) {
  inputRef.splice(i, 0, ref)
}

const Setup = (props) => {
  
  const { state, onChangeState } = useContext(StateContext)
  const [local, setLocal] = useState({
    country: props.navigation.getParam('name'),
    secure: true,
  })
  const onChangeValue = (key, value) => {
    setLocal({ ...local, [key]: value})
  }

  const nextScreen = async () => {
    props.navigation.navigate('Address', { country: local.country })
  }

  return (
    <KeyboardAvoidingView style={ globalStyles.container }> 
      <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
        <SafeAreaView style={{ width: Dimensions.get('screen').width, flex: 1, paddingHorizontal: 20}}>
          <ScrollView showsVerticalScrollIndicator={ false }>
            <StatusBar />
            <ProgressBar progress={ 0.1 } style={{ marginVertical: 30 }}/>
            <Text style={{ ...globalStyles.header, marginTop: 10}}>Setup your account</Text>
            <Text style={{ ...globalStyles.mediumText, marginTop: 25 }}>First Name</Text>
            <MyInput 
              autoFocus={ true }
              inputRef={(v) => addRef(0, v)}
              value={ state.firstName}
              setValue={(value) => onChangeState('firstName', value)}
              onSubmitEditing={() => inputRef[1].focus()}
            />
            <Text style={{ ...globalStyles.mediumText, marginTop: 15 }}>Last Name</Text>
            <MyInput 
              inputRef={(v) => addRef(1, v)}
              value={ state.lastName}
              setValue={(value) => onChangeState('lastName', value)}
              onSubmitEditing={() => inputRef[2].focus()}
            />
            <Text style={{ ...globalStyles.mediumText, marginTop: 15 }}>Email</Text>
            <MyInput 
              inputRef={(v) => addRef(2, v)}
              value={ state.email }
              setValue={(value) => onChangeState('email', value)}
              onSubmitEditing={() => inputRef[3].focus()}
            />
            <Text style={{ ...globalStyles.mediumText, marginTop: 15 }}>Password</Text>
            <MyInput 
              inputRef={(v) => addRef(3, v)}
              style={{ marginRight: 0}}
              secureTextEntry={ local.secure }
              setSecureTextEntry={(value) => onChangeValue('secure', !value)}
              value={ state.password}
              setValue={(value) => onChangeState('password', value)}
            />
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ ...globalStyles.mediumText, marginTop: 15 }}>Date of Birth</Text>
              <Birthday 
                setdob={(value) => onChangeState('dob', value)} 
              />
            </View>
            <MyInput 
              placeholder='Date of Birth'
              disabled={ true }
              value={ state.dob }
            />
            <Button 
              mode='contained'
              style={{ ...globalStyles.buttonStyle, marginBottom: 15, marginTop: 40 }}
              onPress={ nextScreen }
            >
              Continue
            </Button>
            <Divider />
            <View style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: 30 }}>
              <Text style={ globalStyles.smallText }>Already have an account?</Text>
              <Button 
                labelStyle={{ ...globalStyles.smallText, color: colors.primary }}
                onPress={() => props.navigation.navigate('SignIn')}
              >
                Sign In
              </Button>
            </View>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}


export default Setup