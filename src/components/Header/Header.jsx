import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/svg/Logo.svg';
import SearchBar from '../common/SearchBar';
import './Header.css'; // 헤더 스타일링 css

const Header = () => {
  return (
    <header className="header">
      <div id="contents">
      <Link to="/"> <Logo /> </Link>
        <div className="auth-links">
          {/* <Link to="/login">로그인</Link> | <Link to="/signup">회원가입</Link> */}
          <Link to="/sign"> 로그인 · 회원가입 </Link>
        </div>
      </div>

      <div id="contents">
        <nav className="nav">
          <ul>
            <li>
              <Link to="/search">관광지 찾기</Link>
            </li>
            <li>
              <Link to="/travel-routes">여행 코스</Link>
            </li>
          </ul>
        </nav>
        <SearchBar />
      </div>  
    </header>
  );
};

export default Header;
