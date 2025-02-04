//svg생성
//보이랑 버튼 정렬 맞추기
//프로그래스바랑 버튼 세로로

import React, { useState } from 'react';
import './TravelRoutesPage.css';
import imgBoy from "../assets/image/img_boy.jpg";
import imgGirl from "../assets/image/img_girl.jpg";
import InfoIcons from '../components/InfoIcons';
import dummyImg1 from '../assets/image/dummy/dummy_img1.jpg';
import dummyImg2 from '../assets/image/dummy/dummy_img2.jpg';
import dummyImg3 from '../assets/image/dummy/dummy_img3.jpg';
import dummyImg4 from '../assets/image/dummy/dummy_img4.jpg';
import dummyImg5 from '../assets/image/dummy/dummy_img5.jpg';
import dummyImg6 from '../assets/image/dummy/dummy_img6.jpg';
import dummyImg7 from '../assets/image/dummy/dummy_img7.jpg';
import {ReactComponent as Map} from '../assets/svg/Map.svg';
import {ReactComponent as ArrowForward} from '../assets/svg/ArrowForward.svg';
import {ReactComponent as ArrowBack} from '../assets/svg/ArrowBack.svg';
import Badge from "../components/common/Badge";

const images = [dummyImg1, dummyImg2, dummyImg3, dummyImg4, dummyImg5, dummyImg6, dummyImg7];

const TravelRoutesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [curRecCourse, setCurRecCourse] = useState(1);
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

  const handleCycleCards = (direc, e) => {
    const totalCourses = images.length; // 전체 에디터 추천 코스 개수 임시로 설정
    (direc > 0)? setCurRecCourse((curRecCourse+1) % totalCourses) :
                 setCurRecCourse((curRecCourse-1 + totalCourses) % totalCourses);
  }
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
      <div className="buttons right-side">
        <button type="button" onClick={() => handleCycleCards(-1)} className="arrow-button"> <ArrowBack /> </button>
        <button type="button" onClick={() => handleCycleCards(1)} className="arrow-button"> <ArrowForward /> </button>
      </div>
      <div className="rec-card">
        <div className="img-cropped">
          <img src={images[curRecCourse]} alt={'dummy'} className="rec-image"></img>
        </div>
        <div className="rec-contents">
          <Badge text="지역" color="gray" />
          <Badge text="코스 유형" color="yellow" />
          <h2>텍스트</h2>
          <span>코스 설명글 코스 설명글 코스 설명글 코스 설명글 코스 설명글 코스 설명글 코스 설명글 코스 설명글 코스 설명글 코스 설명글 코스 설명글 </span>
          <div className="badges">
            <Badge text="관광지 이름" color="gray" />
            <Badge text="관광지 이름" color="gray" />
            <Badge text="관광지 이름" color="gray" />
            <Badge text="관광지 이름" color="gray" />
            <Badge text="관광지 이름" color="gray" />
          </div>
          <button className="course-button" type="button"><Map /> 코스 둘러보기</button>
        </div>
      </div>

    </div>
  );
};
   

export default TravelRoutesPage;
