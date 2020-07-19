import React, { useState } from 'react'

const StateContext = React.createContext();

export const StateProvider = ({ children }) => {

  const [state, setState] = useState({
    //user data !!! to be filled by user on signup or retrieved from backend
    clientId: '',
    allergies9: '',
    // email: '',
    // password: '',
    // phoneNumber: '',
    // country: '',
     firstName: 'Ayush',
    // lastName: '',
    // dob:'',
    // city: '',
    // zipcode: '',
    // street: '',
    // locality: '',
    // gender: "",
    // medical
    // allergies: false,
    // heartdisease: false,
    // kidneyliverfailure: false,
    // diabetes: false,
    // asthma: false,
    // highbloodpressure: false,
    // lungdisease: false,
    // cancer: false,
    // autoimmunedisorder: false,
    // neurologicaldisease: false,
    // smoker: 'never',
    // severeobesity: false,
    // pregnant: false,
    // weakenedimmunity: false,

    //daily vitals !! filled on daily basis
    // fever: false,
    // chill: false,
    // coughing: false,
    // difficultbreathing: false,
    // sorethroat: false,
    // headache: false,
    // vomiting: false,
    // diarrhea: false,
    // fatique: false,

    //daily symptoms !! filled on daily basis
    fever: false,
    temperature: '222',
    heartratefeel: 'medium',
    description: '',
    heartrate: '',
    bloodpressure: '',
    oxygensaturation: '',

    //personal info !! filled on daily basis
    // travel: false,
    // exposed: false,
    // found: false,
    // feel: false,
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