import React from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { TimePicker } from 'antd';
dayjs.extend(customParseFormat);
const SimpleTimePicker = ({sendDataToParent}) => { 
  const onChange = (time, timeString) => {
    sendDataToParent(timeString);
  };
  return (
    <TimePicker onChange={onChange} placeholder={"Время"} style={{width: "100%", marginTop:'20px'}} defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} />
  )
};
export default SimpleTimePicker;