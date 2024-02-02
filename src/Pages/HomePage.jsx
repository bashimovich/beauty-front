import React, {useState, useEffect}  from 'react'
import  NavBar  from "../Components/NavBar";
import './HomePage.css'
import './../Components/components.css'
import Saloons from '../Components/Saloons';
import { axiosInstance } from '../Utils/axiosInstance';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation();
  const query = location.state?.query
  const [TopSaloon, setTopSaloon] = useState([]);
  const [WtvSaloon, setWtvSaloon] = useState([]);
  const [SearchResult, setSearchResult] = useState([]);

  const getTopSaloon = () => {
        axiosInstance
          .get(`api/top-companies/`)
          .then((res) => {
            setTopSaloon(res.data)
          })
          .catch((err) => { console.log(err); })
      };
  const getWtvSaloon = () => {
        axiosInstance
          // .get(`api/top-companies/`)
          .get(`api/wtv-companies/`)
          .then((res) => {
            setWtvSaloon(res.data)
          })
          .catch((err) => { console.log(err); })
      };
  const getSearchSaloon = (query) => {
        axiosInstance
          .get(`api/all-companies/?search=${query}`)
          .then((res) => {
            setSearchResult(res.data)
          })
          .catch((err) => { console.log(err); })
      };

  useEffect(() => {
    getTopSaloon();
    getWtvSaloon();
    if (query?.length > 0) {
      getSearchSaloon(query)
    }
    }, []);

  return (
    <div className='wrapper'>
        <div className="container">
            <NavBar onDataReceived={getSearchSaloon} />
            {SearchResult?.length > 0 ? (
              <div>
                  <h1 className='top-saloons'>Your Search Results</h1>
                  <Saloons data={SearchResult}/>
              </div>
              ) : (
                <div>
                    <h1 className='top-saloons'>Популярные салоны</h1>
                    <Saloons data={TopSaloon}/>
                    <h1 className='top-saloons'>Стоит посетить</h1>
                    <Saloons data={WtvSaloon}/> 
                </div>
              )}
        </div>
    </div>
  )
}

export default HomePage