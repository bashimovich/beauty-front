import React from 'react'
import CharacterLimitedParagraph from '../../Utils/CharacterLimitedParagraph';
import img from './../assets/images/26528_web_g1.jpg'
import './components.css'
import { useNavigate } from 'react-router-dom';



function Card(props) {
  const navigate = useNavigate();
  const goServiceDetail = () => {
        let id = 1
        navigate('/service', {state : id})
    }

  return (
    <div>
        <div className="card-wrapper"  onClick={goServiceDetail}>
            <div className="card-container">
                <div className='card-img-container'>
                    <img src={img} alt="" className='card-img' />
                </div>
                <div className="card-body">
                    <h1 className="title">Парикмахерская</h1>
                    <CharacterLimitedParagraph content="ЖАРКОbeauty bar | Стамбул, ул. Прекрасная 42" maxCharacters={50} />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Card