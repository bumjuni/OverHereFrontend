import React from 'react';
import './SubTourCard.css';

const SubTourCard = ({ image, location, title, description, accessibilityIcon }) => {
  return (
    <div className="sub-tour-card">
      {/* 이미지 섹션 */}
      <div className="card-image">
        {image ? <img src={image} alt={title} /> : <div className="placeholder" />}
      </div>
      {/* 텍스트 컨텐츠 */}
      <div className="card-content">
        <p className="card-location">{location}</p>
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        {/* 접근성 아이콘 */}
        <div className="accessibility-icon">
          <img src={accessibilityIcon} alt="Accessibility Icon" />
        </div>
      </div>
    </div>
  );
};

export default SubTourCard;
