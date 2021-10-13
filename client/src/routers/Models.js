import React, { useState } from 'react';
import Button from '../Components/common/Button';
import styled from 'styled-components';
import { useHistory, BrowserRouter, Route } from 'react-router-dom';
import blue from '../img/Audio/blue.mp3';
import red from '../img/Audio/redkey.mp3';
import brown from '../img/Audio/brownkey.mp3';
import Logi from '../img/Logi.png';
import Corsair from '../img/Corsair.jpg';
import Razer from '../img/razer.png';
import './Model.css';

const Dev = styled.div`
  background-color: rgb(248, 239, 186);
  justify-content: center;
  align-items: center;
  text-align: center;
  position: fixed;
  display: flex;
  margin-top: 100px;
  .brand {
    height: 30px;
    width: 200px;
  }
  .brandactive {
    height: 30px;
    width: 200px;
  }
  #dropdown {
  }
`;

const Models = ({ setDrop, drop }) => {
  const keys = [
    {
      id: 1,
      color: '#0984e3',
      key: 'blu',
      src: blue,
    },
    {
      id: 2,
      color: '#ff5252',
      key: 'red',
      src: red,
    },
    {
      id: 3,
      key: 'bwn',
      color: '#cc8e35',
      src: brown,
    },
  ];

  const playAudio = (data) => {
    let audio = new Audio(data);
    audio.play();
  };

  const history = useHistory();
  return (
    <div>
      <div id="dropdown">
        <div className="dropdown-1">
          <div
            className="Logo"
            onClick={() => {
              history.push('/models/corsair');
            }}
          >
            <img src={Corsair} alt=""/>
          </div>
          <div
            className="Logo"
            onClick={() => {
              history.push('/models/logi');
            }}
          >
            <img src={Logi} alt="" />
          </div>
          <div
            className="Logo"
            onClick={() => {
              history.push('/models/razer');
            }}
          >
            <img src={Razer} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Models;
// <Dev>

// </Dev>
//{keys.map((el, id) => {
//       return (
//         <div>
//           <Button
//             style={{ background: el.color }}
//             className="key"
//             key={id}
//             onClick={() => playAudio(el.src)}
//           >
//             {el.key}
//           </Button>
//         </div>
//       );
//     })}
