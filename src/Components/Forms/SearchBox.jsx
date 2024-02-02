import { AudioOutlined } from '@ant-design/icons';
import React from 'react';
import { Input, Space } from 'antd';
import './../components.css'
import './SearchBox.css'
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);

const SearchBox = (props) => {
  const onSearch = (value, _e, info) => {
    props.onDataReceived(value);
  }
  return(
    <Space direction="vertical" className='search-box'>
      <Search
        placeholder="Услуга, салон или мастер"
        onSearch={onSearch}
        style={{
          margin:'0',
          width:'calc(100% + 32px)',
        }}
      />
    </Space>
  )
};
export default SearchBox;