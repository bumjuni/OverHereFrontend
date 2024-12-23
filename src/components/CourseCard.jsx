import React from 'react';
import './CourseCard.css';

const CourseCard = ({ tags, title }) => {
  return (
    <div className="course-card">
      <div className="card-header">
        {/* 태그*/}
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        {/* 드롭다운 화살표 */}
        <div className="dropdown-icon">▼</div>
      </div>
      {/* 제목 */}
      <h3 className="course-title">{title}</h3>
    </div>
  );
};

export default CourseCard;
