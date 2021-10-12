import React from 'react';
import Sidebar from '../../Components/common/Sidebar';
import Nav from '../../Components/Nav';
import Home from '../Home';
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';
import Logitech from './Gear/Logitech';
import Logi from '../../img/Logi.png'
import Corsair from '../../img/Corsair.jpeg'
import Razer from '../../img/razer.png'


const Dev = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  display: flex;
  margin-top: 120px;
  margin-left:150px; 
  
  .Logo{
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 300px;
        height: 120px;
        
        }

  .brand {
    height: 120px;
    width: 300px;
    
  }
`;

const Models = () => {
  const history = useHistory();
  return (

      <Dev>
        <div className = "brand"
        onClick={() => {
          history.push('/models');
        }}>
        <h1>브랜드 선택</h1>
        </div>

        <div className = "Logo" 
        onClick={() => {
            history.push('/models/logi');
          }}>
          <img src ={Logi} alt=""/>
        </div>

        <div className="Logo"
        onClick={() => {
          history.push('/models/corsair');
        }}>
          <img src={Corsair} alt=""/>
        </div>

        <div className="Logo"
        onClick={() => {
          history.push('/models/razer');
        }}>
          <img src={Razer} alt="" />
        </div>
      </Dev>
  );
};

export default Models;
