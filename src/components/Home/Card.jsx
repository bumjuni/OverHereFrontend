import React from "react";
import "./Card.css";

const Card = ({key, title, image, nonObstacle}) => {
  return (
    <div className="card">
      <div className="card-image"></div>
      <div className="text-content">
        <h2 className="card-title">{title}</h2>
        {/* <p className="description">관광지 설명</p> */}
      </div>
      <div className="icon">
        <span className="accessibility-icon">♿</span>
      </div>
    </div>
  );
};

export default Card;
