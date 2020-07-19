import React, { useEffect, useContext, useState } from 'react'
import { View, KeyboardAvoidingView, Keyboard,
  TouchableWithoutFeedback,SafeAreaView, ScrollView,
  StatusBar, Dimensions, Linking
} from 'react-native'
import { Text, Button, TextInput} from 'react-native-paper'
import StateContext from '../context/stateContext'
import { globalStyles, colors } from '../styles/globalStyles'
import MyModal from '../components/modal'
import Checker from '../components/checker'
import MyRadio from '../components/MyRadio'

const Home = (props) => {

  //useEffect(() => console.log('mounted'), []) 
  const { state, onChangeState } = useContext(StateContext)
  const [local, setLocal] = useState({
    vitals: false,
    symptoms: false,
    information: false,
    sbadgeText: '1',
    ibadgeText: '1',
  })

  return (
    <KeyboardAvoidingView style={ globalStyles.container }> 
      <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
        <SafeAreaView style={{ width: Dimensions.get('screen').width, flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={ false }>
            <StatusBar />
            <View style={{ height: (Dimensions.get('screen').height)/4, backgroundColor: colors.primary }}></View>
            <Button onPress={() => setLocal({ ...local, vitals: true})}>Daily Vitals</Button>
            <MyModal 
              badgeText='  1/1  '
              visible={ local.vitals } 
              setVisible={(value) => setLocal({ ...local, vitals: value})}
              onPress={() => setLocal({ ...local, vitals: false })}
              buttonText='Done'
            >
              <Text style={{ ...globalStyles.header, marginTop: 20 }}>Do you have any of these symptoms?</Text>
              <Text style={{ ...globalStyles.mediumText, alignSelf: 'center', color: colors.placeholder, marginBottom: 20 }}>(Please select all that apply)</Text>
              <Checker 
                value={ state.fever } 
                setValue={(value) => onChangeState('fever', !value)}
                text='Fever'
              />
              <Checker 
                value={ state.chill } 
                setValue={(value) => onChangeState('chill', !value)}
                text='Chills and sweating'
              />
              <Checker 
                value={ state.coughing } 
                setValue={(value) => onChangeState('coughing', !value)}
                text='Coughing'
              />
              <Checker 
                value={ state.difficultbreathing } 
                setValue={(value) => onChangeState('difficultbreathing', !value)}
                text='Difficult breathing'
              />
              <Checker 
                value={ state.sorethroat } 
                setValue={(value) => onChangeState('sorethroat', !value)}
                text='Sore throat'
              />
              <Checker 
                value={ state.headache } 
                setValue={(value) => onChangeState('headache', !value)}
                text='Headache'
              />
              <Checker 
                value={ state.vomiting } 
                setValue={(value) => onChangeState('vomiting', !value)}
                text='Vomiting'
              />
              <Checker 
                value={ state.diarrhea } 
                setValue={(value) => onChangeState('diarrhea', !value)}
                text='Diarrhea'
              />
              <Checker 
                value={ state.fatique } 
                setValue={(value) => onChangeState('fatique', !value)}
                text='Fatique/Tiredness'
              />
            </MyModal>
            <Button onPress={() => setLocal({ ...local, symptoms: true})}>Daily Symptoms</Button>
            <MyModal 
              badgeText={`\t\t ${ local.sbadgeText }/4 \t\t`}
              visible={ local.symptoms } 
              setVisible={(value) => setLocal({ ...local, symptoms: value})}
              onPress={() =>{ 
                switch(local.sbadgeText) {
                  case '1': return setLocal({ ...local, sbadgeText: '2' })
                  case '2': return setLocal({ ...local, sbadgeText: '3' })
                  case '3': return setLocal({ ...local, sbadgeText: '4' })
                  case '4': return setLocal({ ...local, sbadgeText: '1', symptoms: false })
                }
              }}
              buttonText={ local.sbadgeText==='4'? 'Done':'Next' }
            >
              { local.sbadgeText === '1' && 
              <View>
                <Text style={{ ...globalStyles.header, marginTop: 20 }}>Do you think you have a fever?</Text>
                <MyRadio current={ state.fever } setCurrent={(value) => onChangeState('fever', value)}/>
              </View>
              }
              { local.sbadgeText === '2' && 
                //style this input 
                <View>
                  <Text style={{ ...globalStyles.header, marginTop: 20 }}>What is your temperature?</Text>
                  <TextInput 
                    value={ state.temperature }
                    onChangeText={(value) => onChangeState('temperature', value)}
                  />
                </View>
              }
              { local.sbadgeText === '3' && 
                //style this input 
                <View>
                  <Text style={{ ...globalStyles.header, marginTop: 20 }}>How does your Heart Rate feel?</Text>
                  <TextInput 
                    value={ state.description }
                    onChangeText={(value) => onChangeState('description', value)}
                  />
                </View>
              }
              { local.sbadgeText === '4' && 
                  // style this
                <View>
                  <Text style={{ ...globalStyles.header, marginTop: 20 }}>Heart Rate</Text>
                  <TextInput 
                    value={ state.heartrate }
                    onChangeText={(value) => onChangeState('heartrate', value)}
                  />
                  <Text style={{ ...globalStyles.header, marginTop: 20 }}>Blood Pressure</Text>
                  <TextInput 
                    value={ state.bloodpressure }
                    onChangeText={(value) => onChangeState('bloodpressure', value)}
                  />
                  <Text style={{ ...globalStyles.header, marginTop: 20 }}>Oxygen Saturation</Text>
                  <TextInput 
                    value={ state.oxygensaturation }
                    onChangeText={(value) => onChangeState('oxygensaturation', value)}
                  />
                </View>
              }
            </MyModal>
            <Button onPress={() => setLocal({ ...local, information: true})}>Personal Information</Button>
            <MyModal 
              badgeText={`\t\t ${ local.ibadgeText }/4 \t\t`}
              visible={ local.information } 
              setVisible={(value) => setLocal({ ...local, information: value})}
              onPress={() =>{ 
                switch(local.ibadgeText) {
                  case '1': return setLocal({ ...local, ibadgeText: '2' })
                  case '2': return setLocal({ ...local, ibadgeText: '3' })
                  case '3': return setLocal({ ...local, ibadgeText: '4' })
                  case '4': return setLocal({ ...local, ibadgeText: '1', information: false })
                }
              }}
              buttonText={ local.ibadgeText==='4'? 'Done':'Next' }
            >
              { local.ibadgeText === '1' && 
              <View>
                <Text style={{ ...globalStyles.header, marginTop: 20 }}>Did you travel today?</Text>
                <MyRadio current={ state.travel } setCurrent={(value) => onChangeState('travel', value)}/>
              </View>
              }
              { local.ibadgeText === '2' && 
              <View>
                <Text style={{ ...globalStyles.header, marginTop: 20 }}>Were you exposed to a High Risk Person?</Text>
                <MyRadio current={ state.exposed } setCurrent={(value) => onChangeState('exposed', value)}/>
              </View>
              }
              { local.ibadgeText === '3' && 
              <View>
                <Text style={{ ...globalStyles.header, marginTop: 20 }}>Was anyone you know found to be COVID positive?</Text>
                <MyRadio current={ state.found } setCurrent={(value) => onChangeState('found', value)}/>
              </View>
              }
              { local.ibadgeText === '4' && 
              <View>
                <Text style={{ ...globalStyles.header, marginTop: 20 }}>How do you feel today?</Text>
                <MyRadio current={ state.feel } setCurrent={(value) => onChangeState('feel', value)} lable='Happy'/>
              </View>
              }
            </MyModal>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default Home

//https://534q6zi164.execute-api.ap-south-1.amazonaws.com/pluto/