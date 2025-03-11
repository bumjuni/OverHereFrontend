import React, { useState } from 'react';
import './RegionButton.css';

const RegionButton = () => {
  const regions = ['서울', '경기도', '강원도', '전라도', '경상도', '제주도'];
  const [activeRegion, setActiveRegion] = useState('서울');

  const handleButtonClick = (region) => {
    setActiveRegion(region);
  };

  return (
    <div className="buttons-container">
      {regions.map((region) => (
        <button
          key={region}
          className={`region-button ${activeRegion === region ? 'active' : ''}`}
          onClick={() => handleButtonClick(region)}
        >
          {region === '서울' && <span className="region_button">📍</span>}
          {region}
        </button>
      ))}
    </div>
  );
};

// export default RegionButton;
