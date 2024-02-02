import React from 'react';
import { Calendar, theme } from 'antd';
import './Calendar.css'

const BasicCalendar = ({ sendDataToParent }) => {
  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  const handleSelect = (value, mode) => {
    // console.log(value.format('YYYY-MM-DD'));
    sendDataToParent(value.format('YYYY-MM-DD'));
  };

  const { token } = theme.useToken();
  const wrapperStyle = {
    width: '100%',
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  
  const calendarStyle = {
    itemActiveBg: '#e6f4ff' // Set the background color for the selected date item
  };

  return (
    <div style={wrapperStyle}>
      <Calendar fullBgitemActiveBg	="#e6f7ff" fullscreen={false} style={calendarStyle} onPanelChange={onPanelChange} onSelect={handleSelect} />
    </div>
  );
};

export default BasicCalendar;
