import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // 헤더 스타일링 css

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>여기너머</h1>
       
      </div>
      
      <nav className="nav">
        <ul>
          <li>
            <Link to="/tourist-destinations">관광지 선택</Link>
          </li>
          <li>
            <Link to="/travel-routes">여행 코스</Link>
          </li>
        </ul>
      </nav>
      <div className="search-bar">
        <input
          type="text"
          placeholder="어디로 여행을 떠나시나요?"
          aria-label="Search destinations"
        />
      </div>
      <div className="auth-links">
        <Link to="/login">로그인</Link> | <Link to="/signup">회원가입</Link>
      </div>
    </header>
  );
};

export default Header;
