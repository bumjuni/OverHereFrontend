import {react, useState, useEffect} from'react';
import styled from 'styled-components';
import axios from 'axios';
import {ReactComponent as SearchOff} from '../assets/svg/Search/SearchOff.svg';
import TourCardList from '../components/Home/TourCardList';
import SearchGroup from '../components/SearchPage/SearchGroup';
import formatTwoDigits from '../components/common/formatTwoDigits';
import MoreContentsButton from '../components/common/MoreContentsButton';

const NoOutcome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1em;
    color: #B5B9BD;
`

function SearchPage(){
    const [result, setResult] = useState([]); 
    // 검색했는데 아무 결과 없으면 안되니까 일단 필터링 없이 사용자가 검색할 때마다 백엔드에 넘겨주는걸로 구현

    const handleSubmit = (e, selectedRegion, selectedType, searchWord) => {
        e.preventDefault();
        console.log(selectedRegion, selectedType, searchWord);
        // api호출
        axios.get('https://my-json-server.typicode.com/typicode/demo/posts')
            .then(res => setResult(res.data))
            .catch(err => alert("검색 결과를 불러오는데 실패했습니다."));
    }

    useEffect(() => {
        console.log(result);
    }, [result])

    return (
        <>
            <h1>관광지 찾기</h1>
            <SearchGroup handleSubmit={handleSubmit}/>
            <h3>총 <span style={{color: "#4caf50"}}>{formatTwoDigits(result.length)}</span>개</h3>
            
            {result.length? 
            <TourCardList data={result}/>
            : 
            <NoOutcome>
                <SearchOff />
                <h1>검색 결과가 없습니다.</h1>
                <h2>다른 검색어를 입력하거나 카테고리를 선택해 보세요.</h2>
            </NoOutcome>
            }

            <MoreContentsButton />
        </>
    );
}

export default SearchPage;