import React from 'react';
import Badge from '../common/Badge';
import dummyImg from '../../assets/svg/dummy.svg';
import './TourCardList.css';
import getRegion from '../common/getRegion';
import { useNavigate } from 'react-router-dom';

const TourCard = ({ contentId, contentTypeId, region, title, image }) => {
  const navigate = useNavigate();
  
  const toDetails = () => {
    navigate(`/tourist-attractions/${contentId}`);
  }
  
  return (
    <div className="tour-card" onClick={toDetails}>
      {/* <div className="tour-image"></div> */}
      <img src={image || dummyImg} alt={title} className="tour-image" />
      <div className="tour-info">
        {/* <h4 className="region">{region}</h4> */}
        <Badge text={getRegion(region)} />
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
