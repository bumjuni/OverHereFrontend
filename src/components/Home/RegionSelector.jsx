import React, { useState } from "react";
import {ReactComponent as Location} from '../../assets/svg/Location.svg';

import "./RegionSelector.css";

const regions = ["서울", "경기도", "강원도", "전라도", "충청도", "경상도", "제주도"];

const RegionSelector = () => {
  const [selectedRegion, setSelectedRegion] = useState("서울"); // Default selected region

  return (
    <div className="region-selector">
      {regions.map((region) => (
        <button
          key={region}
          className={`region-button ${
            selectedRegion === region ? "selected" : ""
          }`}
          onClick={() => setSelectedRegion(region)}
        >
          {selectedRegion === region && 
            <Location/>
          }
          <span>{region}</span>
        </button>
      ))}
    </div>
  );
};

export default RegionSelector;
