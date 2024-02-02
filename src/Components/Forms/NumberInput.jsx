import React from 'react';
import { Input } from 'antd';
const NumberInput = ({sendDataToParent}) => {
const handleInput = (e) => {
    sendDataToParent(e.target.value);
  };
return(
        <Input placeholder="Номер телефона*" style={{marginTop:'20px'}} onChange={handleInput}/>
    )
}

export default NumberInput;