import React from 'react';
import  Dummy  from './Dummy';

export default function JangbiListEntry({ jangbi, handleCardClick }) {
  console.log(Dummy);
  const { title, content } = Dummy;
  return (
    <div
      className="card"
      onClick={() => {
        handleCardClick(Dummy);
      }}
    >
      <div style={{ flex: 3 }}></div>
      <div style={{ flex: 7 }}>
        <h3 className="title">{title}</h3>

        <p>Content</p>
        <div className="content">{content}</div>
      </div>
    </div>
  );
}