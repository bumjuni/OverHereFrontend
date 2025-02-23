import React, { useState } from 'react';
import CourseInfoCard from '../components/CourseInfoCard'; // CourseInfoCard 컴포넌트 가져오기
import './TravelRoutesPage.css'; // CSS 파일 임포트

const TravelRoutesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const stats = [
    { icon: 'https://via.placeholder.com/32', text: '총 00KM' },
    { icon: 'https://via.placeholder.com/32', text: '00개' },
    { icon: 'https://via.placeholder.com/32', text: '이동수단' },
    { icon: 'https://via.placeholder.com/32', text: '난이도' },
  ];

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
      <div className="routes-container">
        <div className="text-section">
          <CourseInfoCard
            location="지역"
            type="코스 유형"
            title="텍스트"
            stats={stats}
            currentPage={currentPage}
            totalPages={totalPages}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        </div>
        <div className="image-section">
          <div className="placeholder-image"></div>
        </div>
      </div>

      {/* 추천 코스 섹션 */}
      <div className="recommend-section">
        <div className="recommend-card green-card">
          <h2>베스트 코스 찾기</h2>
          <p>
            여기서 인기 많은 코스를 찾아보세요. 자연 경관과 즐길거리 모두 포함한 좋은 코스들이
            있습니다!
          </p>
          <button className="recommend-button green">바로 가기</button>
        </div>
        <div className="recommend-card blue-card">
          <h2>지역별 추천 코스</h2>
          <p>
            지역별로 코스를 추천받아보세요! 또한 원하는 코스를 찾아볼 수 있습니다.
          </p>
          <button className="recommend-button blue">바로 가기</button>
        </div>
      </div>

      <h2>이번주, 조회 급상승 코스</h2>
    </div>
  );
};

export default TravelRoutesPage;
