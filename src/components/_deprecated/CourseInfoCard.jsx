import React from 'react';
import './CourseInfoCard.css';

const CourseInfoCard = ({ location, type, title, stats, currentPage, totalPages, onNext, onPrev }) => {
  return (
    <div className="course-info-card">
      {/* 지역 및 코스 유형 */}
      <div className="header">
        <span className="badge">{location}</span>
        <span className="badge type">{type}</span>
      </div>

      {/* 코스 제목 */}
      <h2 className="title">{"텍스트"}</h2>

      {/* 코스 통계 */}
      <div className="stats">
        {stats.map((stat, index) => (
          <div key={index} className="stat">
            <img src={stat.icon} alt="" className="icon" />
            <span className="stat-text">{stat.text}</span>
          </div>
        ))}
      </div>

      {/* 페이지 네비게이션 */}
      <div className="navigation">
        <span className="page-info">
          {currentPage} / {totalPages}
        </span>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${(currentPage / totalPages) * 100}%` }}></div>
        </div>
        <div className="buttons">
          <button onClick={onPrev} disabled={currentPage === 1}>
            ◀
          </button>
          <button onClick={onNext} disabled={currentPage === totalPages}>
            ▶
          </button>
        </div>

          
      </div>
    </div>
  );
};

export default CourseInfoCard;
