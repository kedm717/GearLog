import React from 'react';
import JangbiListEntry from './JangbiListEntry';

export default function JangbiList ({handleCardClick, jangbis}) {
  return (
    <div className='right-movie-list'>
      {/*
        TODO : props로 받아온 영화정보의 갯수 만큼 MovieRankListEntry를 렌더링합니다.
          (1) props로 빈 배열을 받은 경우, MovieRankListEntry가 존재하지 않고 `영화 목록이 비었습니다` 라는 문구를 표시해야 합니다. 조건부 렌더링을 활용해 보세요.
          (2) 각 MovieRankListEntry는 고유의 key를 가지고 있어야 합니다.
          (3) 각 MovieRankListEntry 컴포넌트를 클릭하면 handleCardClick 메소드가 실행됩니다.
      */
     jangbis.length > 0 ? jangbis.map((jangbi)=>(
     <JangbiListEntry 
     handleCardClick = {handleCardClick}
     movie = {jangbi}
     key = {jangbi.id}
     />
     )) : '장비 목록이 비었습니다.'}
    </div>
  );
}
