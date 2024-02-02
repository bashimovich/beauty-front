import React from 'react';
import { Card } from 'antd';
import './../components.css'

function BasicCardWorkers(props){
  return(
  <Card 
    bordered={false}
    hoverable
    style={{
      width: '100%',
      border:"none",
      boxShadow:'none',
      // margin:'auto',
      // padding:'10px',

    }}
    cover={<img style={{ width: '100%',borderRadius:'16px', height: '238px', objectFit: 'cover' }}  alt="example" src={props.worker?.web_images[0].src} />}
  >
    <div className="card-body">
        <p>{props.worker?.name} | {props.worker?.job}</p>
    </div>
  </Card>

  )
} 
export default BasicCardWorkers;