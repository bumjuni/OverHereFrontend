import react from'react';
import TourCardList from '../components/Home/TourCardList';
import DropDown from '../components/SearchPage/DropDown';
import {ReactComponent as SearchIcon} from '../assets/image/SearchIcon.svg';
import {ReactComponent as PlusIcon} from '../assets/image/PlusIcon.svg';
import {ReactComponent as RefreshIcon} from '../assets/image/RefreshIcon.svg';
import './index.css';

const location = ['서울', '경기도', '강원도', '전라도', '경상도', '제주'];
const type = ['자연', '문화/역사', '음식/미식', '축제/이벤트'];

function SearchPage(){
    function handleClick(){
        
    }

    return (
        <>
            <h1 className="title">관광지 찾기</h1>
            <div className="search-group">
                <button className='refresh-button' onClick={handleClick}> <RefreshIcon /> 초기화 </button>
                <DropDown 
                title="지역" data={location}/>
                <DropDown 
                title="유형" data={type}/>
                <div className="search-input">
                    <input type="text" placeholder="검색어를 입력하세요"></input>
                    <button><SearchIcon/></button>
                </div>
            </div>
            <h2>총 <span className="stressed">00</span>개</h2>
            <TourCardList />
            <button className="plus-button">더보기 <PlusIcon/> </button>
        </>
    );
}

export default SearchPage;