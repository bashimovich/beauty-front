import React from 'react';
import { Input } from 'antd';
const BasicInput = ({sendDataToParent}) => {
const handleInput = (e) => {
    sendDataToParent(e.target.value);
  };
return(
        <Input placeholder="Введите имя*" style={{marginTop:'20px'}} onChange={handleInput}/>
    )
}

export default BasicInput;