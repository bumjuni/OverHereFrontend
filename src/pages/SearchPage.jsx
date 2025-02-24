import {react, useState, useEffect, useRef} from'react';
import styled from 'styled-components';
import axios from 'axios';
import {ReactComponent as SearchOff} from '../assets/svg/Search/SearchOff.svg';
import SearchGroup from '../components/SearchPage/SearchGroup';
import formatTwoDigits from '../components/common/formatTwoDigits';
import MoreContentsButton from '../components/common/MoreContentsButton';
import Card from '../components/common/Card';

const initialData = [
    {
        "title": "관광지 이름",
        "areaCode": "지역",
        "overView": "string",
        "contentId": 0,
        "contentTypeId": "string",
        "thumbnailUrl": "string",
        "helpdog": true,
        "parking": true,
        "wheelchair": true,
        "restroom": false,
        "audioguide": false,
        "exits": "string"
    }, {
        "title": "string",
        "areaCode": "string",
        "overView": "string",
        "contentId": 0,
        "contentTypeId": "string",
        "thumbnailUrl": "string",
        "helpdog": true,
        "parking": true,
        "wheelchair": true,
        "restroom": true,
        "audioguide": true,
        "exits": "string"
    }, {
        "title": "string",
        "areaCode": "string",
        "overView": "string",
        "contentId": 0,
        "contentTypeId": "string",
        "thumbnailUrl": "string",
        "helpdog": true,
        "parking": true,
        "wheelchair": true,
        "restroom": true,
        "audioguide": true,
        "exits": "string"
    }
]

function SearchPage(){
    const page = useRef(0);
    const [result, setResult] = useState(initialData); 

    const handleSubmit = (e, selectedRegion, selectedType, searchWord) => {
        e.preventDefault();
        console.log(selectedRegion, selectedType, searchWord);
        // 검색 당시에는 무조건 page=1, 더보기 버튼 호출 시 같은 조건에서 page 수 늘려서 호출
        axios.get(`/api/v1/search/tourist-attraction&areacode=${selectedRegion}&type=${selectedType}&searchParam=${searchWord}&page=1`)
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
            
            <CardList>
                {result.length? 
                    result.map(item => 
                    <Card 
                        title={item.title}
                        region={item.areaCode}
                        image={item.thumbnailUrl}
                        nonObstacle={[item.helpdog, item.audioguide, item.wheelchair, item.restroom, item.parking]}
                    />
                    ) :  
                    <NoOutcome>
                        <SearchOff />
                        <h1>검색 결과가 없습니다.</h1>
                        <h2>다른 검색어를 입력하거나 카테고리를 선택해 보세요.</h2>
                    </NoOutcome>
                }
            </CardList>

            <MoreContentsButton />
        </>
    );
}

export default SearchPage;

const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5em;
    margin: 2em 0 5em 0;
`
const NoOutcome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1em;
    color: #B5B9BD;
`