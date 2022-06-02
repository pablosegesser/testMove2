import 'date-fns';
import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {KeyboardDatePicker, KeyboardTimePicker , MuiPickersUtilsProvider} from "@material-ui/pickers";
import { CardWrap } from '../../styles/globalStyle';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

function StaticDatePicker() {

  const [selectedDate, setSelectedDate] = useState(new Date());
 
  const defaultMaterialTheme = createMuiTheme({
    palette: {
      primary: deepPurple,
    },
  });

  const handleDateChange = (date) => {
    console.log(date);
    setSelectedDate(date);
  };

 
  return (
 <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <ThemeProvider theme={defaultMaterialTheme}>
   <CardWrap>
        <KeyboardDatePicker
        autoOk
        variant="inline"
        inputVariant="outlined"
        label="Select Date"
        format="MM/dd/yyyy"
        value={selectedDate}
        InputAdornmentProps={{ position: "end" }}
        onChange={date => handleDateChange(date)}
      />
   </CardWrap>
    <CardWrap className="top">
    <KeyboardTimePicker
      label="Select Time"
      placeholder="08:00 AM"
      variant="inline"
      inputVariant="outlined"
      mask="__:__ _M"
      value={selectedDate}
      InputAdornmentProps={{ position: "end" }}
      onChange={date => handleDateChange(date)}
    />
    </CardWrap>
    </ThemeProvider>
      </MuiPickersUtilsProvider>
  );
}

export default StaticDatePicker;