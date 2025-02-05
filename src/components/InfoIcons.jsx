import React from "react";
import { ReactComponent as RouteIcon } from "../assets/image/Route_Pictogram.svg"; // 총 00KM 아이콘
import { ReactComponent as MapIcon } from "../assets/image/MapPos_Pictogram.svg"; // 00개 아이콘
import { ReactComponent as VehicleIcon } from "../assets/image/Bus_Pictogram.svg"; // 이동수단 아이콘
import { ReactComponent as DifficultyIcon } from "../assets/image/DifficultyLevel_Pictogram.svg"; // 난이도 아이콘

const infoOptions = [
  { id: 0, label: "총 00KM", icon: <RouteIcon /> },
  { id: 1, label: "00개", icon: <MapIcon /> },
  { id: 2, label: "이동수단", icon: <VehicleIcon /> },
  { id: 3, label: "난이도", icon: <DifficultyIcon /> },
];

const InfoIcons = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "20px",
        borderRadius: "8px",
        gap: "20px",
      }}
    >
      {infoOptions.map((option) => (
        <div
          key={option.id}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            color: "#5a854e", // 텍스트와 아이콘 색상
          }}
        >
          <div
            style={{
              backgroundColor: "#e8eddc", // 아이콘 배경 원
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            {option.icon}
          </div>
          <div
            style={{
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            {option.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoIcons;
