import React, { useState } from 'react';
import {View, Platform} from 'react-native';
import { Button, Text, IconButton } from 'react-native-paper'
import DateTimePicker from '@react-native-community/datetimepicker';
import { colors } from '../styles/globalStyles';

const DatePicker = ({ setdob }) => {
	const [date, setDate] = useState(new Date());
	const [mode, setMode] = useState('date');
	const [show, setShow] = useState(false);

	const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setdob(currentDate.getDate()+` - `+currentDate.getUTCMonth()+` - `+currentDate.getFullYear())
  };
  
	const showTimepicker = () => {
		showMode('time');
	};
  
	return (
		<View>
      <IconButton 
        icon='calendar-month-outline'
        size={ 25 }
        style={{ marginTop: 10, marginLeft: 30}}
        onPress={() => setShow(true)}
        color={ colors.primary }
      />
			{show && (
				<DateTimePicker
					value={ date }
					mode={ mode }
					is24Hour={ false }
					display='default'
          onChange={ onChange }
				/>
			)}
		</View>
	);
};

  export default DatePicker