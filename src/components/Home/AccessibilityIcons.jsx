import React, { useState } from "react";
import {ReactComponent as AudioGuide} from '../../assets/svg/Accessibility/AudioGuide_Pictogram.svg';
import {ReactComponent as HelpDog} from '../../assets/svg/Accessibility/HelpDog_Pictogram.svg';
import {ReactComponent as ParkingLot} from '../../assets/svg/Accessibility/ParkingLot_Pictogram.svg';
import {ReactComponent as Toilet} from '../../assets/svg/Accessibility/Toilet_Pictogram.svg';
import {ReactComponent as WheelChair} from '../../assets/svg/Accessibility/WheelChair_Pictogram.svg';
import "./AccessibilityIcons.css";

const accessibilityOptions = [
  { id: 0, label: "안내견 동반", icon: <HelpDog />},
  { id: 1, label: "음성 가이드", icon: <AudioGuide />},
  { id: 2, label: "휠체어 대여", icon: <WheelChair/>},
  { id: 3, label: "장애인 화장실", icon: <Toilet />},
  { id: 4, label: "장애인 주차장", icon: <ParkingLot />},
];

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
          <div className="individual_icon">{option.icon}</div>
          <div className="label">{option.label}</div>
        </div>
      ))}
    </div>
  );
};

export default AccessibilityIcons;
