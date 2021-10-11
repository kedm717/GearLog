import {useState, useEffect} from 'react';
import Header from '../../Components/Header';
import CurrentJangbi from './CurrentJangbi';
import JangbiList from './JangbiList';
import React from 'react'
import mockJangbi from './mockJangbi'

export const Models = () => {

  const [show, setShow] = useState(mockJangbi[0])

  const [jangbiList, setJangbiList] = useState([])

  useEffect(()=>{
    
  })

  const handleCardClick = (e) => {
    setShow(e);
  }

  return (
    <>
    <div className ="header">
      <Header />
    </div>
    <div className ="body">
      <CurrentJangbi jangbi={show}/>
      <JangbiList jangis={jangbiList}
      handleCardClick={handleCardClick}
      />
    </div>
    </>
  )
}
