//svg생성
//보이랑 버튼 정렬 맞추기
//프로그래스바랑 버튼 세로로

import React, { useState } from 'react';
import './TravelRoutesPage.css';
import imgBoy from "../assets/image/img_boy.jpg";
import imgGirl from "../assets/image/img_girl.jpg";
import InfoIcons from '../components/InfoIcons';


const TravelRoutesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="travel-routes">
      <div className="content-container">
        {/* Left Column */}
        <div className="route-info">
          <div className="travelroutespageheader">
            <span className="badge">지역</span>
            <span className="badge type">코스 유형</span>
          </div>
          <h2 className="title">텍스트</h2>
          <div className="stats">
            <div className="stat">
              <InfoIcons />
            </div>
          </div>
          
          <div className="navigation">
            <span className="page-info">
              {currentPage} / {totalPages}
            </span>

            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${(currentPage / totalPages) * 100}%` }}
              ></div>
            </div>

            <div className="buttons">
              <button onClick={handlePrev} disabled={currentPage === 1}>
                ◀
              </button>
              <button onClick={handleNext} disabled={currentPage === totalPages}>
                ▶
              </button>

            </div>
          </div>
          
        </div>

        {/* Right Column */}
        <div className="image-section">
          <div className="placeholder-image"></div>
        </div>
      </div>

      <div className="recommend-section">
        <div className="recommend-card green-card">
          <h2>베스트 코스 찾기</h2>
          <p>
            여기너머에서 인기가 많은 코스를 함께 찾아봐요. 자연 경관과 즐길거리 모두 포함한 좋은 코스들이 있습니다!
          </p>
          <img src={imgBoy} alt="icon_boy" className="recommend-image" />
          <button className="recommend-button green">바로 가기 <span className="arrow">→</span></button>
        </div>
        <div className="recommend-card blue-card">
          <h2>지역별 추천 코스</h2>
          <p>지역별로 코스를 추천받아요! 또한 원하는 코스를 찾아볼 수 있습니다.</p>
          <img src={imgGirl} alt="icon_girl" className="recommend-image" />
          <button className="recommend-button blue">바로 가기 <span className="arrow">→</span></button>
        </div>
      </div>

      <h2 className="editor-pick">에디터 추천 픽 코스</h2>
    </div>
  );
};
   

export default TravelRoutesPage;
