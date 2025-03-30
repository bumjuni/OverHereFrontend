import {React, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/svg/Logo.svg';
import SearchBar from '../common/SearchBar';
import './Header.css'; // 헤더 스타일링 css

const Header = () => {
  const [submitted, setSubmitted] = useState(0); // 자식 컴포넌트(SearchBar) 리렌더링 용도
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // IntegrateSearch로 넘어가되 검색어는 그대로 유지
    e.preventDefault();
    navigate(`/search`, {state: {keyword: keyword}});
    setKeyword('');
    setSubmitted(submitted+1);  // 자식 컴포넌트(SearchBar) 리렌더링 유발발
  }

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
              <Link to="/tourist-attraction-search">관광지 찾기</Link>
            </li>
            <li>
              <Link to="/travel-routes">여행 코스</Link>
            </li>
          </ul>
        </nav>
        <form key={submitted} onSubmit={handleSubmit}>
          <SearchBar onChange={setKeyword} value={keyword} />
        </form>
      </div>  
    </header>
  );
};

export default Header;
