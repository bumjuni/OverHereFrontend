import React from "react";
import Badge from './Badge';
import NonObstacleIcon from './NonObstacleIcon';
import dummyImage from '../../assets/svg/dummy.svg';
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({key, contentId, title, region, image, nonObstacle}) => {
  const navigate = useNavigate();
  const toDetails = () => {
    navigate(`/tourist-attractions/${contentId}`);
  }

  return (
    <div className="card" onClick={toDetails}>
        <img src={image || dummyImage} className="card-image" alt={title} />
        {/* <div className="card-image"></div> */}
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
