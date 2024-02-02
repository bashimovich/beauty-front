import React from 'react';
import { Button, Flex } from 'antd';
const SimpleButton = ({sendDataToParent}) => (
    <Button type="primary" style={{marginTop:'20px', width:"100%"}} onClick={sendDataToParent}>Записаться</Button>
);
export default SimpleButton;