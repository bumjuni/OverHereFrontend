import React, { useState } from "react";
import "./AccessibilityIcons.css";

const accessibilityOptions = [
  { id: 1, label: "안내견 동반", icon: "🐕‍🦺" },
  { id: 2, label: "음성 가이드", icon: "🗣️" },
  { id: 3, label: "휠체어 이동", icon: "♿" },
  { id: 4, label: "장애인 화장실", icon: "🚻" },
  { id: 5, label: "장애인 주차장", icon: "🅿️" },
];

const AccessibilityIcons = () => {
  const [selected, setSelected] = useState(4); // Default selection

  return (
    <div className="accessibility-icons">
      {accessibilityOptions.map((option) => (
        <div
          key={option.id}
          className={`icon-wrapper ${selected === option.id ? "selected" : ""}`}
          onClick={() => setSelected(option.id)}
        >
          <div className="icon">{option.icon}</div>
          <div className="label">{option.label}</div>
        </div>
      ))}
    </div>
  );
};

export default AccessibilityIcons;
