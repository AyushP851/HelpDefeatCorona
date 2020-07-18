import React, { useEffect, useContext, useState } from 'react'
import { View, KeyboardAvoidingView, Keyboard,
  TouchableWithoutFeedback,SafeAreaView, ScrollView,
  StatusBar, Dimensions, Linking
} from 'react-native'
import { Text, Button, Portal, Modal, IconButton, Badge } from 'react-native-paper'
import StateContext from '../context/stateContext'
import { globalStyles, colors } from '../styles/globalStyles'
import MyInput from '../components/myInput'

const Home = (props) => {

  //useEffect(() => console.log('mounted'), []) check DB and save data here in state 
  const { state, onChangeState } = useContext(StateContext)
  const [local, setLocal] = useState({
    visible1: false,
    visible2: false,
    visible3: false,
  })

  return (
    <KeyboardAvoidingView style={ globalStyles.container }> 
      <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
        <SafeAreaView style={{ width: Dimensions.get('screen').width, flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={ false }>
            <StatusBar />
            <View style={{ height: (Dimensions.get('screen').height)/4, backgroundColor: colors.primary }}></View>
            <Button onPress={() => setLocal({ ...local, visible1: true})}>Daily Vitals</Button>
            <Portal>
              <Modal
                visible={ local.visible1 }
                onDismiss={() => setLocal({ ...local, visible1: false})}
                contentContainerStyle={{ backgroundColor: colors.background, margin: 20, padding: 15 }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <IconButton
                    icon='close'
                    size={ 35 }
                    color={ colors.placeholder }
                    onPress={() => setLocal({ ...local, visible1: false})}
                  />
                  <View style={{ flex:1 }}></View>
                  <Badge
                    style={ globalStyles.badge }
                    size={ 35 }
                  >   1/3   </Badge>
                </View>
              </Modal>
            </Portal>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default Home

//https://534q6zi164.execute-api.ap-south-1.amazonaws.com/pluto/