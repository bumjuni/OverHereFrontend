import {react, useState, useEffect, useRef} from'react';
import TourCardList from '../components/Home/TourCardList';
import DropDown from '../components/SearchPage/DropDown';
import {ReactComponent as SearchIcon} from '../assets/svg/SearchIcon.svg';
import {ReactComponent as PlusIcon} from '../assets/svg/PlusIcon.svg';
import {ReactComponent as RefreshIcon} from '../assets/svg/RefreshIcon.svg';
import {ReactComponent as SearchOff} from '../assets/svg/SearchOff.svg';
import formatTwoDigits from '../components/common/formatTwoDigits';
import './SearchPage.css';

const region = ['서울', '경기도', '충청도', '강원도', '전라도', '경상도', '제주'];
const type = ['자연', '문화/역사', '음식/미식', '축제/이벤트'];

const result = [    //더미데이터 -> 더보기 삭제
    {
        region: '충청도', 
        title: '옥천HUB', 
        description: '간선상차'
    }, {
        region: '경기도',
        title: '이천HUB',
        description: '분실'
    },
]

function SearchResult(){
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
    const [selectedReg, setSelectedReg] = useState(null);
    const [selectedType, setSelectedType] = useState(null);
    const [searchWord, setSearchWord] = useState('');
    const [query, setQuery] = useState([]); //useRef?

    useEffect(() => {
        setQuery([selectedReg, selectedType]);
    }, [selectedReg, selectedType]);

    useEffect(() => {
        console.log(query);
        const filteredResult = result.filter(course => (course.region === selectedReg) && (course.type === selectedType));
    }, [query])

    const handleRefresh = () => {
        setSelectedReg(null);
        setSelectedType(null);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchWord(e.Key)
    }

    return (
        <>
            <h1>관광지 찾기</h1>
            <div className="search-group">
                <button className='refresh-button' onClick={handleRefresh}> <RefreshIcon /> 초기화 </button>
                <DropDown 
                    title={selectedReg || '지역'} data={region} onChange={setSelectedReg}
                />
                <DropDown 
                    title={selectedType || '유형'} data={type} onChange={setSelectedType}
                />
                <form className="search-input" onSubmit={handleSubmit}>
                    <input type="text" placeholder="검색어를 입력하세요" onKeyDown={(e)=>console.log(e.key)}></input>
                    <button><SearchIcon/></button>
                </form>
            </div>
            <h3>총 <span className="stressed">{formatTwoDigits(result.length)}</span>개</h3>
            <SearchResult />
            <button className="plus-button">더보기 <PlusIcon/> </button>
        </>
    );
}

export default SearchPage;