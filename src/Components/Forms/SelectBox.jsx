import React from 'react';
import { Select, Space } from 'antd';
import './SelectBox.css'
const SelectBox = (props) =>{
  const { sendDataToParent } = props;
  const handleChange = (value) => {
    sendDataToParent(value);
  };
  const data = props.services.map((element, index) => ({
    value: element.name.toLowerCase(),
    label: element.name.toUpperCase(),
    key: index,
  }));
  
  return (
  <Space >
    <Select
      defaultValue="Услуга"
      style={{
        width: '100%',
        marginTop:'20px',
      }}
      onChange={handleChange}
      options={data}
    />
  </Space>
)};
export default SelectBox;