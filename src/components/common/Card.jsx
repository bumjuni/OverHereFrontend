import React from "react";
import Badge from './Badge';
import NonObstacleIcon from './NonObstacleIcon';
import "./Card.css";

const Card = ({key, title, region, image, nonObstacle}) => {
  console.log(title, region, image, nonObstacle);
  return (
    <div className="card">
      <div className="card-image"></div>
      <div className="text-content">
        {region && <Badge text={region} />}
        <h3 className="card-title">{title}</h3>
        {/* <p className="description">관광지 설명</p> */}
      </div>
      <div className="icon">
        <span className="accessibility-icon">
          <NonObstacleIcon data={nonObstacle} />
        </span>
      </div>
    </div>
  );
};

export default Card;
