import React from 'react';
import JangbiListEntry from './JangbiListEntry';
import  jangbis  from './Dummy';

export default function JangbiList({ handleCardClick }) {
  console.log(jangbis);
  return (
    <div className="right-movie-list">
      {jangbis.map((jangbi) => (
        <JangbiListEntry
          handleCardClick={handleCardClick}
          movie={jangbi}
          key={jangbi.id}
        />
      ))}
    </div>
  );
}