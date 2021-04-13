import React, { useState } from 'react'

const StateContext = React.createContext();

export const StateProvider = ({ children }) => {

  const [state, setState] = useState({
    //user data !!! to be filled by user on signup or retrieved from backend
    clientId: '',
    allergies9: '',
    email: 'ayushpatel851@gmail.com',
    password: '851Tester',
    phoneNumber: '7999804388',
    country: '',
    firstName: 'ash',
    lastName: 'p',
    dob:'',
    city: 'jbp',
    zipcode: '4820',
    street: 'streel 2',
    locality: 'garha',
    gender: "",
    // medical
    allergies: false,
    heartdisease: false,
    kidneyliverfailure: false,
    diabetes: false,
    asthma: false,
    highbloodpressure: false,
    lungdisease: false,
    cancer: false,
    autoimmunedisorder: false,
    neurologicaldisease: false,
    smoker: 'never',
    severeobesity: false,
    pregnant: false,
    weakenedimmunity: false,

    //daily vitals !! filled on daily basis
    fever: false,
    chill: false,
    coughing: false,
    difficultbreathing: false,
    sorethroat: false,
    headache: false,
    vomiting: false,
    diarrhea: false,
    fatique: false,

    //daily symptoms !! filled on daily basis
    fever: false,
    temperature: '78',
    heartratefeel: 'medium',
    description: 'description',
    heartrate: '70',
    bloodpressure: '120/80 mmHg',
    oxygensaturation: '100%',

    // personal info !! filled on daily basis
    travel: false,
    exposed: false,
    found: false,
    feel: false,
  })
  const onChangeState = (key, value) => {
    setState({ ...state, [key]: value })
  }

  return (
    <StateContext.Provider value={{ state, onChangeState }}>
      { children }
    </StateContext.Provider>
  )
} 

export default StateContext