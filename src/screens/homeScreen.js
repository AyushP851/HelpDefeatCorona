import React, { useEffect, useContext } from 'react'
import { View, KeyboardAvoidingView, Keyboard,
  TouchableWithoutFeedback,SafeAreaView, ScrollView,
  StatusBar, Dimensions, Linking
} from 'react-native'
import { Text, Button } from 'react-native-paper'
import StateContext from '../context/stateContext'
import { globalStyles, colors } from '../styles/globalStyles'
import MyInput from '../components/myInput'

const Home = () => {

  //useEffect(() => console.log('mounted'), [])
  const { state, onChangeState } = useContext(StateContext)
  const apicall = async () => {
    const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': true },
    body: JSON.stringify(state)
  }
    var url = `https://534q6zi164.execute-api.ap-south-1.amazonaws.com/pluto/posthistory?`
    console.log(url)
    let res = await fetch(url, requestOptions)
    console.log(res._bodyBlob)
  }

  return (
    <KeyboardAvoidingView style={ globalStyles.container }> 
      <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
        <SafeAreaView style={{ width: Dimensions.get('screen').width, flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={ false }>
            <StatusBar />
            <View style={{ height: (Dimensions.get('screen').height)/4, backgroundColor: colors.primary }}></View>
            <MyInput 
              label='name'
              value={ state.allergies9 }
              setValue={(value) => onChangeState('allergies9', value)}
            />
            <MyInput 
              label='age'
              value={ state.age }
              setValue={(value) => onChangeState('age', value)}
            />
            <Text style={ globalStyles.header }>{ state.name }</Text>
            <Text style={ globalStyles.header }>{ state.age }</Text>
            <Button onPress={() => console.log(state)}>state</Button>
            <Button onPress={apicall}>API</Button>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default Home

//https://534q6zi164.execute-api.ap-south-1.amazonaws.com/pluto/