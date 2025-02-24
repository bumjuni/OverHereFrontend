import React from "react";
import "./TouristSpotCard.css";

const TouristSpotCard = () => {
  return (
    <div className="tourist-spot-card">
      <div className="image-placeholder"></div>
      <div className="content">
        <div className="tags">
          <span className="tag">지역</span>
          <span className="tag highlight">관광지 유형</span>
        </div>
        <h2 className="title">관광지 이름</h2>
        <p className="description">
          관광지는 사람들에게 특별한 경험을 제공합니다. 다양한 문화와 역사를 접할 수 있는 장소들이 많아 여행의
          즐거움을 더해줍니다. 자연 경관이나 독특한 건축물은 방문객의 마음을 사로잡고, 사진으로 남기고 싶게
          만듭니다.
        </p>
      </div>
    </div>
  );
};

// export default TouristSpotCard;
