import react from'react';
import TourCardList from '../components/Home/TourCardList';
import DropDown from '../components/SearchPage/DropDown';
import {ReactComponent as SearchIcon} from '../assets/svg/SearchIcon.svg';
import {ReactComponent as PlusIcon} from '../assets/svg/PlusIcon.svg';
import {ReactComponent as RefreshIcon} from '../assets/svg/RefreshIcon.svg';
import {ReactComponent as SearchOff} from '../assets/svg/SearchOff.svg';
import './index.css';

const location = ['서울', '경기도', '강원도', '전라도', '경상도', '제주'];
const type = ['자연', '문화/역사', '음식/미식', '축제/이벤트'];

function SearchResult(){
    const result = [];
    console.log(result.length);
    return (
        <>
            {result.length? 
            <TourCardList />
            : 
            <div className="err-msg">
                <SearchOff />
                <h1>검색 결과가 없습니다.</h1>
                <h2>다른 검색어를 입력하거나 카테고리를 선택해 보세요.</h2>
            </div>
        }
        </>
    );
}

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
            <SearchResult />
            <button className="plus-button">더보기 <PlusIcon/> </button>
        </>
    );
}

export default SearchPage;