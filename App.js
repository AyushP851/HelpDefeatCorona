import * as React from 'react'
import { View } from 'react-native'
import Slider from './src/screens/sliderScreen'
import Test from './src/screens/testScreen'
import Amplify from '@aws-amplify/core'
import config from './src/aws-exports'
//import SignIn from './src/screens/signInScreen'
Amplify.configure(config)

const App = () => {

  return (
    <Slider />
    //<Test />
    //<SignIn />
  )
}

export default App