import React from 'react';
import { Card } from 'antd';
import CharacterLimitedParagraph from '../../Utils/CharacterLimitedParagraph';
import './../components.css'
import { useNavigate } from 'react-router-dom';

function BasicCard(props){
  const navigate = useNavigate();
  const goServiceDetail = (item) => {
    navigate('/service', { state: { item: item } });
  }

  return(
  <Card 
    onClick={() => goServiceDetail(props.item)}
    bordered={false}
    hoverable
    style={{
      width: '100%',
      border:"none",
      boxShadow:'none',
      // margin:'auto',
      // padding:'10px',

    }}
    cover={<img style={{ width: '100%',borderRadius:'16px', height: '238px', objectFit: 'cover' }}  alt="example" src={props.item?.web_images[0].src} />}
  >
    <div className="card-body">
        {/* <h1 className="title">{ props.item.name }</h1> */}
        <p>{props.item?.name} | {props.item?.address}</p>
        {/* <CharacterLimitedParagraph content="ЖАРКОbeauty bar | Стамбул, ул. Прекрасная 42" maxCharacters={40} /> */}
    </div>
  </Card>

  )
} 
export default BasicCard;