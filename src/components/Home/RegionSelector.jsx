import React, { useState } from "react";
import {ReactComponent as Location} from '../../assets/svg/Location.svg';

import "./RegionSelector.css";

const regions = ["서울", "경기도", "강원도", "전라도", "충청도", "경상도", "제주도"];

const RegionSelector = ({selectedRegion, handleClick}) => {
  return (
    <div className="region-selector">
      {regions.map((region, index) => (
        <button
          key={region}
          value={index}
          className={`region-button ${
            selectedRegion === index ? "selected" : ""
          }`}
          onClick={(e) => handleClick(index)}
        >
          {selectedRegion === index && 
            <Location/>
          }
          <span>{region}</span>
        </button>
      ))}
    </div>
  );
};

export default RegionSelector;
