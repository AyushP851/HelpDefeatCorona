import React, { useState } from 'react'

const StateContext = React.createContext();

export const StateProvider = ({ children }) => {

  const [state, setState] = useState({
    //user: {},
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