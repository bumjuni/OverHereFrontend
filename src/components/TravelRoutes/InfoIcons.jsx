import React from "react";
import styled from "styled-components";
import { ReactComponent as RouteIcon } from "../../assets/svg/TravelRoutes/Route_Pictogram.svg"; // 총 00KM 아이콘
import { ReactComponent as MapIcon } from "../../assets/svg/TravelRoutes/MapPos_Pictogram.svg"; // 00개 아이콘
import { ReactComponent as VehicleIcon } from "../../assets/svg/TravelRoutes/Bus_Pictogram.svg"; // 이동수단 아이콘
import { ReactComponent as DifficultyIcon } from "../../assets/svg/TravelRoutes/DifficultyLevel_Pictogram.svg"; // 난이도 아이콘


const InfoIcons = ({mode, distance, count, difficulty}) => {
  const infoOptions = [
    { id: 0, label: "코스 거리", value: `총 ${distance}KM`, icon: <RouteIcon /> },
    { id: 1, label: "관광지 개수", value: `${count}개`, icon: <MapIcon /> },
    // { id: 2, value: "이동수단", icon: <VehicleIcon /> },
    { id: 3, label: "난이도", value: `${difficulty}`, icon: <DifficultyIcon /> },
  ];
  
  return (
    <>
      {infoOptions.map((option) => (
        <Wrapper mode={mode}>
          {option.icon}
          <Texts>
            {mode==="detail"? 
              <Label>{option.label}</Label>
              : <></>}

            <Value> {option.value} </Value>
          </Texts>
        </Wrapper>
        ))}
      </>
    );
  };

export default InfoIcons;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;

  flex-direction: ${(props) => (props.mode==="detail"? "row" : "column")};
`
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 3px;
`
const Label = styled.span`
  font-size: small;
  white-space: nowrap;
`
const Value = styled.span`
  font-size: 1.3em;
  font-weight: 600;
  white-space: nowrap;
`