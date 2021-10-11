import React from 'react';

export default function CurrentJangbi ({jangbi}) {
  if(!jangbi){
    return '장비를 선택하세요'
  }
  const {title,content}=jangbi;
  return (
    <>
      <div className='left-current-side'>
        <div className='current-movie'>
          <h1 className='title'>{title}</h1>
          {/* <img className='thumbnail' src= {medium_cover_image} alt='' /> */}
          <p className='content'>content : {content}</p>
          
        </div>
      </div>
    </>
  );
}