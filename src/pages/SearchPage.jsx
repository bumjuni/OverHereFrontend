import {react, useState, useEffect} from'react';
import axios from 'axios';
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

function SearchPage(){
    const [selectedReg, setSelectedReg] = useState(null);
    const [selectedType, setSelectedType] = useState(null);
    const [searchWord, setSearchWord] = useState('');
    const [result, setResult] = useState([]); 

    useEffect(() => {
        console.log(selectedReg, selectedType, searchWord);
    }, [selectedReg, selectedType, searchWord]);

    // 검색했는데 아무 결과 없으면 안되니까 일단 필터링 없이 사용자가 검색할 때마다 백엔드에 넘겨주는걸로 구현

    const handleRefresh = () => {
        // setSelectedReg(null);
        // setSelectedType(null);
        // setSearchWord(null);
        window.location.reload();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // api호출
        axios.get('https://my-json-server.typicode.com/typicode/demo/posts')
            .then(res => setResult(res))
            .catch(err => alert("검색 결과를 불러오는데 실패했습니다."));
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
                    <input type="text" placeholder="검색어를 입력하세요" onChange={(e)=>setSearchWord(e.target.value)} value={searchWord}></input>
                    <button><SearchIcon/></button>
                </form>
            </div>
            <h3>총 <span className="stressed">{formatTwoDigits(result.length)}</span>개</h3>
            
            {result.length? 
            <TourCardList />
            : 
            <div className="err-msg">
                <SearchOff />
                <h1>검색 결과가 없습니다.</h1>
                <h2>다른 검색어를 입력하거나 카테고리를 선택해 보세요.</h2>
            </div>
            }

            <button className="plus-button">더보기 <PlusIcon/> </button>
        </>
    );
}

export default SearchPage;