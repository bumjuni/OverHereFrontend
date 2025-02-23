import React from "react";
import { ReactComponent as RouteIcon } from "../../assets/svg/TravelRoutes/Route_Pictogram.svg"; // 총 00KM 아이콘
import { ReactComponent as MapIcon } from "../../assets/svg/TravelRoutes/MapPos_Pictogram.svg"; // 00개 아이콘
import { ReactComponent as VehicleIcon } from "../../assets/svg/TravelRoutes/Bus_Pictogram.svg"; // 이동수단 아이콘
import { ReactComponent as DifficultyIcon } from "../../assets/svg/TravelRoutes/DifficultyLevel_Pictogram.svg"; // 난이도 아이콘

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
        gap: "1.5em",
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
            color: "#0F4E15", // 텍스트와 아이콘 색상
          }}
        >
          <div>
            {option.icon}
          </div>
          <div
            style={{
              fontWeight: "600",
              whiteSpace: "nowrap"
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
