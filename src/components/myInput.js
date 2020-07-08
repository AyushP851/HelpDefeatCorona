import React, { useState } from 'react';
import { View } from 'react-native'
import { TextInput, IconButton } from 'react-native-paper'
import { globalStyles, colors } from '../styles/globalStyles'



const MyInput = ({ inputRef, style, autoFocus,
  disabled, label, placeholder, keyboardType, 
  secureTextEntry, setSecureTextEntry, value, 
  setValue, onSubmitEditing }) => {

  const [focus, setFocus] = useState(false)

  return (
    <View style={{ flexDirection: 'row', paddingHorizontal: 30 }}>
      <TextInput
        ref={(ref) => {
          if (inputRef === undefined || inputRef === null) {
            return;
          }
          inputRef(ref);
        }}
        style={{ ...globalStyles.input, ...globalStyles.inputText, ...style }}
        autoFocus={ autoFocus }
        disabled={ disabled }
        label={ label }
        placeholder={ placeholder }
        keyboardType={ keyboardType }
        secureTextEntry={ secureTextEntry }
        value={ value }
        onChangeText={(value) => setValue(value)}
        placeholderTextColor={ colors.placeholder }
        autoCapitalize='none'
        autoCorrect={ false }
        autoCompleteType='off'
        mode='outlined'
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onSubmitEditing={() => {
          if (onSubmitEditing === undefined || onSubmitEditing === null) {
            return;
          }
          onSubmitEditing()
        }}
      />
      { 
        secureTextEntry !== undefined ? 
        <IconButton
          style={{ alignSelf: 'center', marginRight: -30 }}
          color={ focus ?  colors.primary : colors.placeholder }
          icon={secureTextEntry === true ? 'eye-off' : 'eye'} 
          onPress={() => setSecureTextEntry(secureTextEntry)} 
        /> : null 
      }
    </View>
  );
}

export default MyInput
