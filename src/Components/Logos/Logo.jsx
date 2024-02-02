import React from 'react'
import logo from './../../assets/images/svg/efendim.svg'
import { useNavigate } from 'react-router-dom';
import './../components.css'
function Logo() {
  const navigate = useNavigate();
  const goHome = () =>{
    navigate('/')
  }
    const style = {
        // // width : "206px", 
        // height: "50px",
        // marginRight:'75px'
    }
  return (
      <img onClick={goHome} src={ logo } style={ style } alt="Logo" />
  )
}

export default Logo