import React from 'react';
import './TourCard.css';

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

export default TourCard;
