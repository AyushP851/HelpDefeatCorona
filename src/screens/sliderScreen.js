import AppIntroSlider from 'react-native-app-intro-slider';
import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { Text, Button } from 'react-native-paper'
import AsyncStorage from '@react-native-community/async-storage'
import { globalStyles, colors } from '../styles/globalStyles'
import Navigator from '../routes/mainSwitchNav'

const Slider = () => { 

  const [mainApp, setMainApp] = useState(false)
  
  const fun = async () => {
    await AsyncStorage.setItem('check', 'true')
  }
  AsyncStorage.getItem('check', (err, result) => {
    result === 'true' ? (mainApp == true ? null : setMainApp(true)) : null
  })
  const slides = [
    {
      key: 'k1',
      title: 'HelpDefeatCorona.org',
      text: 'Real-time monitoring and action',
      image: require('../images/a.png'),
      width: 272.59,
      height: 202,
    },
    {
      key: 'k2',
      title: 'HelpDefeatCorona.org',
      text: 'Home measurement and daily symptoms check-up',
      image:  require('../images/b.png'),   
      width: 233.18,
      height: 184.53,
    },
    {
      key: 'k3',
      title: 'HelpDefeatCorona.org',
      text: 'Daily health tips and suggestions',
      image:  require('../images/c.png'),
      width: 277,
      height: 197.03,
    },
  ]
  const  renderItem = ({ item }) => {
    return (
      <View style={{ alignItems: 'center' }}>
        <Image source={ item.image } style={{ ...globalStyles.image, width: item.width, height: item.height }} />
        <Text style={{ ...globalStyles.largeText, marginTop: 40, paddingHorizontal: 40 }}>{ item.text }</Text>
      </View>
    )
  }
  
  if(mainApp){
    return (
      <Navigator />
    )
  } 
  else {
    return (    
      <View style={{ height:'100%' }}>
        <Image source={ require('../images/logo.png') } style={{ marginVertical: 45, alignSelf: 'center' }}/>
        <AppIntroSlider 
          data={ slides } 
          renderItem={ renderItem }
          showSkipButton={ false } 
          showNextButton={ false }
          showDoneButton={ false }
          dotStyle={{ marginBottom: 40, backgroundColor: '#ddd' }}
          activeDotStyle={{ marginBottom: 44, backgroundColor: colors.accent }}
        />
        <Button 
          mode='contained'
          style={ globalStyles.buttonStyle }
          onPress={() => {setMainApp(true), fun()}}
        >
          Get Started
        </Button>
        <View style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: 30 }}>
          <Text style={ globalStyles.smallText }>Already have an account?</Text>
          <Button 
            labelStyle={{ ...globalStyles.smallText, color: colors.accent, marginLeft: 5 }}
            onPress={() => console.log('')}
          >
            Sign In
          </Button>
        </View>
      </View>
    ) 
  }
}

export default Slider