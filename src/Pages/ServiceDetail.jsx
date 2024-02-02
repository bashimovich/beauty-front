import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
import  NavBar  from "../Components/NavBar";
import './ServiceDetail.css'
import './../Components/components.css'
import ServiceDetailImage from '../Components/ServiceDetailImage';
import Calendar from '../Components/Forms/Calendar';
import SelectBox from '../Components/Forms/SelectBox';
import BasicInput from '../Components/Forms/BasicInput';
import SimpleButton from '../Components/Buttons/SimpleButton';
import SimpleTimePicker from '../Components/Forms/TimePicker';
import CustomTable from '../Components/Tables/SimpleTable';
import BasicCardWorkers from '../Components/Cards/BasicCardWorkers';
import NumberInput from '../Components/Forms/NumberInput';
import parse from 'html-react-parser';
import { axiosInstance } from '../Utils/axiosInstance';
import { useNavigate } from 'react-router-dom';
// import { Flex } from 'antd';

const ServiceDetail = (props) => {
  const location = useLocation();
  const item = location.state.item;
  const navigate = useNavigate();
  const [SelectedDate, setSelectedDate] = useState('');
  const [SelectedTime, setSelectedTime] = useState('');
  const [SelectedService, setSelectedService] = useState('');
  const [ClientName, setClientName] = useState('');
  const [ClientNumber, setClientNumber] = useState('');

  const [DescActive, setDescActive] = useState(false);


  const selectedDateData = (data) => {
    setSelectedDate(data);
    // console.log(SelectedDate);
  };
  const selectedTimeData = (data) => {
    setSelectedTime(data)
    // console.log(SelectedTime);
  };
  const selectedServiceData = (data) => {
    setSelectedService(data)
    // console.log(SelectedService);
  };
  const ClientNameData = (data) => {
    setClientName(data)
    // console.log(ClientName);
  };
  const ClientNumberData = (data) => {
    setClientNumber(data)
    // console.log(ClientNumber);
  };
  const postOrder = (e) => {
    e.preventDefault()
    const data  = {
      "company": item.id,
      "date" : SelectedDate,
      "time" : SelectedTime,
      "service" : SelectedService,
      "name" : ClientName,
      "phone" : ClientNumber
    }
      axiosInstance.post('/api/order', data)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }
  const getSearchSaloon = (query) => {
      navigate('/', { state: { query: query } });
    };
  const DescMore = (e) => {
    setDescActive(!DescActive)
  }
  return (
    <div className='wrapper'>
        <div className="container">
            <NavBar  onDataReceived={getSearchSaloon} />
            <div className="service-detail">
              <div className="content">
                <p className='service-title'>{item.name} | {item.address}</p>
                <div className="service-order">
                  <div className='content-container'>
                    <ServiceDetailImage web_images={ item.web_images } mobile_images={ item.mobile_images} />
                    <div className={'service-desc'}>
                      <h1>Описание</h1>
                      <div className={DescActive ? 'flex-div active':'flex-div'} >
                        <p id='service-description' >{parse(item.description)}</p>
                      </div>
                      <span id='service-description-btn' onClick={DescMore}>{DescActive ? 'Less':'More'}</span>
                    </div>
                    <div className="services-service">
                      <h1>Услуги</h1>
                      <CustomTable services={item.services} />                     
                    </div>
                  </div>
                </div>
              </div>
              <div className='form-container'>
                <Calendar sendDataToParent={selectedDateData}/>
                <SelectBox sendDataToParent={selectedServiceData} services={item.services}/>
                <SimpleTimePicker sendDataToParent={selectedTimeData}/>
                <BasicInput sendDataToParent={ClientNameData}/>
                <NumberInput sendDataToParent={ClientNumberData}/>
                <SimpleButton sendDataToParent={postOrder}/>
              </div>

            </div>
            <div className="service-adults">
              <h1>Специалисты</h1>
              <div className="service-adults-card-container">
                {item.workers.map((worker) => { return(
                  <BasicCardWorkers worker={worker} />
                )})}
              </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceDetail