/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';
import RazerBlack from '../../../img/razerblack.jpeg'



const RazerStyle = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  

  .jangbi_list{
   padding-top: 300px;
  }
  .Razer_img{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 500px;
        height: 300px;
        }
  `


const Razer = () => {

  return (
    <RazerStyle>
      
      <ul className = "jangbi_list">
      <div className = "Razer_img">
        <img src={RazerBlack} alt=""/>
      </div>
      <div>
        <h1>제품명 : Razer Black Widow V3 Mini</h1>
        <h2>제품 정보 및 영상보기!</h2>
        <iframe width="1000" height="800" src="https://www.youtube.com/embed/bJkhA_18FAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
       
      </div>
     </ul>
   </RazerStyle>
  );
};

export default Razer;
