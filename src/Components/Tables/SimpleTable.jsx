import React from 'react'
import './Tables.css'



function CustomTable(props) {
  return (
    <div>
        <div className="tables-container">
            <div className="table-header">
                <p className='header-price'>Цена</p>
                <p className='header-time'>Время</p>
            </div>
            <div className="table-body">
                {props.services.map((service) => { return (
                    <div className='row'>
                        <p><img src={service.web_images[0].src} alt="" /></p>
                        <p className='type-of-service'>{service.name} <span>{service._type}</span></p>
                        <p className='price-of-service'>{service.price} ₽</p>
                        <p className='delay-of-service'>{service.delay} ч</p>
                    </div>
                )})}
            </div>

        </div>
        <p className='service-more-button'>Посмотреть все</p>

    </div>
  )
}

export default CustomTable