import React from 'react'
import './Saloons.css'
import BasicCard from './Cards/BasicCard'

const Saloons= (props) => {
  return (
    <div className='saloons-container'>
        {
          props.data.map((item) => { return (
            <BasicCard key={item.id} item={item}></BasicCard>
          )
          })
        }
    </div>
  )
}
export default Saloons