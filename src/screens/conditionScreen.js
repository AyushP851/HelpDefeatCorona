import React, { useState, useContext } from 'react'
import { View, KeyboardAvoidingView, SafeAreaView, ScrollView,
  TouchableWithoutFeedback, Dimensions, Keyboard, StatusBar, 
} from 'react-native'
import { Text, IconButton, Badge, Button } from 'react-native-paper'
import StateContext from '../context/stateContext';
import { globalStyles, colors } from '../styles/globalStyles'
import Checker from '../components/checker'

const Condition = (props) => {

  const { state, onChangeState } = useContext(StateContext)

  return (
    <KeyboardAvoidingView style={ globalStyles.container }> 
      <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
        <SafeAreaView style={{ width: Dimensions.get('screen').width, flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={ false }>
          <StatusBar />
          <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20 }}>
          <IconButton
            icon='keyboard-backspace'
            size={ 35 }
            color={ colors.placeholder }
            onPress={() => props.navigation.navigate('Allergy')}
          />
          <View style={{ flex:1 }}></View>
          <Badge
            style={ globalStyles.badge }
            size={ 35 }
          >   2/3   </Badge>
          </View>
          <Text style={{ ...globalStyles.header, marginTop: 0, paddingHorizontal: 30, fontSize: 20}}>Have you ever been told by a doctor, nurse, or other health professional that you have any of the following medical conditions?</Text>
          <Text style={{ ...globalStyles.header, marginBottom: 10, color: colors.placeholder, fontSize: 18 }}>(Please select all that apply)</Text>
          <Checker 
            value={ state.heartdisease } 
            setValue={(value) => onChangeState('heartdisease', !value)}
            text='Heart disease'
          />
          <Checker 
            value={ state.kidneyliverfailure } 
            setValue={(value) => onChangeState('kidneyliverfailure', !value)}
            text='Kidney or Liver failure'
          />
          <Checker 
            value={ state.diabetes } 
            setValue={(value) => onChangeState('diabetes', !value)}
            text='Diabetes'
          />
          <Checker 
            value={ state.asthma } 
            setValue={(value) => onChangeState('asthma', !value)}
            text='Asthma'
          />
          <Checker 
            value={ state.highbloodpressure } 
            setValue={(value) => onChangeState('highbloodpressure', !value)}
            text='High blood pressure'
          />
          <Checker 
            value={ state.lungdisease } 
            setValue={(value) => onChangeState('lungdisease', !value)}
            text='Chronic lung disease such as COPD or emphysema'
          />
          <Checker 
            value={ state.cancer } 
            setValue={(value) => onChangeState('cancer', !value)}
            text='Cancer (other than skin cancer) '
          />
          <Checker 
            value={ state.autoimmunedisorder } 
            setValue={(value) => onChangeState('autoimmunedisorder', !value)}
            text='Autoimmune disorder such as rheumatoid athritis or Crohn’s disease'
          />
          <Checker 
            value={ state.neurologicaldisease } 
            setValue={(value) => onChangeState('neurologicaldisease', !value)}
            text='Neurological disease (dimentia, stroke, seizures or a brain injury)'
          />
          <Checker 
            value={ state.weakenedimmunity } 
            setValue={(value) => onChangeState('weakenedimmunity', !value)}
            text='Weak immunity (easily and regularly fall ill)'
          />
          <View style={{ flex: 1 }}></View>
          <Button 
            mode='contained'
            style={{ ...globalStyles.buttonStyle, marginTop: 40, marginBottom: 30 }}
            onPress={() => props.navigation.navigate('Smoke')}
          >
            Continue
          </Button>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default Condition