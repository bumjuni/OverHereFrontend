import React from 'react';
import Badge from '../common/Badge';
import './TourCardList.css';
//일단 더미 데이터로 되어있음

const TourCard = ({ region, title}) => {
  return (
    <div className="tour-card">
      <div className="tour-image"></div>
      <div className="tour-info">
        {/* <h4 className="region">{region}</h4> */}
        <Badge text={region} />
        <div className="title">{title}</div>
        {/* <p className="description">{description}</p> */}
      </div>
    </div>
  );
};

const TourCardList = ({data}) => {
  return (
    <div className="tour-card-list">
      {data.map((item) => (
        <TourCard
          key={item.id}
          region={item.id}
          title={item.title}
          // description={card.description}
        />
      ))}
    </div>
  );
};

export default TourCardList;
