import * as React from 'react'
import { View } from 'react-native'
import { StateProvider } from './src/context/stateContext'
import Slider from './src/screens/sliderScreen'
import Test from './src/screens/testScreen'
import Amplify from '@aws-amplify/core'
import config from './src/aws-exports'
Amplify.configure(config)

const App = () => {

  return (
    <StateProvider>
      <Slider />
    </StateProvider>
    //<Test pr='hello'/>
  )
}

export default App