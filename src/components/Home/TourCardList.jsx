import React from 'react';
import Badge from '../common/Badge';
import dummyImg from '../../assets/svg/dummy.svg';
import './TourCardList.css';

const TourCard = ({ contentId, contentTypeId, region, title, image }) => {
  const imgSrc = image? image: dummyImg;
  return (
    <div className="tour-card">
      {/* <div className="tour-image"></div> */}
      <img src={imgSrc} alt={title} className="tour-image" />
      <div className="tour-info">
        {/* <h4 className="region">{region}</h4> */}
        <Badge text={region} />
        <h3 className="title">{title}</h3>
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
          contentId={item.contentId}
          contentTypeId={item.contentTypeId}
          region={item.areaCode}
          title={item.title}
          image={item.thumbnailUrl}
          // description={card.description}
        />
      ))}
    </div>
  );
};

export default TourCardList;
