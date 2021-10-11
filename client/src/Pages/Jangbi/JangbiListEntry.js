import React from 'react';

export default function jangbiListEntry ({jangbi, handleCardClick}) {
  const {title,content} = jangbi;
  return (
    <div className='card' onClick ={()=> {handleCardClick(jangbi)}}>
      <div style={{ flex: 3 }}>
        {/* <img
          width='100%'
          height='100%'
          src={medium_cover_image} 
          alt = ''
        /> */}
      </div>
      <div style={{ flex: 7 }}>
        <h3 className='title'>{title}</h3>
        
        <p>Content</p>
        <div className='content'>{content}
        </div>
      </div>
    </div>
  );
}
