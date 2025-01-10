import React, { useState } from "react";
import {ReactComponent as AudioGuide} from '../assets/image/AudioGuide_Pictogram.svg';
import {ReactComponent as HelpDog} from '../assets/image/HelpDog_Pictogram.svg';
import {ReactComponent as ParkingLot} from '../assets/image/ParkingLot_Pictogram.svg';
import {ReactComponent as Toilet} from '../assets/image/Toilet_Pictogram.svg';
import {ReactComponent as WheelChair} from '../assets/image/WheelChair_Pictogram.svg';
import "./AccessibilityIcons.css";

const accessibilityOptions = [
  { id: 0, label: "안내견 동반"},
  { id: 1, label: "음성 가이드"},
  { id: 2, label: "휠체어 이동"},
  { id: 3, label: "장애인 화장실"},
  { id: 4, label: "장애인 주차장"},
];

const pictograms = [<HelpDog />, <AudioGuide />, <WheelChair/>, <Toilet />, <ParkingLot />]

const AccessibilityIcons = () => {
  const [selected, setSelected] = useState(3); // Default selection
  

  return (
    <div className="accessibility-icons">
      {accessibilityOptions.map((option) => (
        <div
          key={option.id}
          className={`icon-wrapper ${selected === option.id ? "selected" : "none-selected"}`}
          onClick={()=> setSelected(option.id)}
        >
          <div className="icon">{pictograms[option.id]}</div>
          <div className="label">{option.label}</div>
        </div>
      ))}
    </div>
  );
};

export default AccessibilityIcons;
