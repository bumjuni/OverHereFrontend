import React from 'react';
import './TourCardList.css';
//일단 더미 데이터로 되어있음

const TourCard = ({ region, title, description }) => {
  return (
    <div className="tour-card">
      <div className="image-placeholder"></div>
      <div className="tour-info">
        <h4 className="region">{region}</h4>
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

const TourCardList = () => {
  const tourCards = [
    { region: '지역1', title: '관광지 이름1', description: '관광지 설명1 관광지 설명1 관광지 설명1' },
    { region: '지역2', title: '관광지 이름2', description: '관광지 설명2 관광지 설명2 관광지 설명2' },
    { region: '지역3', title: '관광지 이름3', description: '관광지 설명3 관광지 설명3 관광지 설명3' },
    { region: '지역4', title: '관광지 이름4', description: '관광지 설명4 관광지 설명4 관광지 설명4' },
    { region: '지역5', title: '관광지 이름5', description: '관광지 설명5 관광지 설명5 관광지 설명5' },
    { region: '지역6', title: '관광지 이름6', description: '관광지 설명6 관광지 설명6 관광지 설명6' },
  ];

  return (
    <div className="tour-card-list">
      {tourCards.map((card, index) => (
        <TourCard
          key={index}
          region={card.region}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

// export default TourCardList;
