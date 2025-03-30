import {react, useState, useEffect, useRef} from'react';
import styled from 'styled-components';
import axiosInstance from '../api/axios';
import {ReactComponent as SearchOff} from '../assets/svg/Search/SearchOff.svg';
import SearchGroup from '../components/SearchPage/SearchGroup';
import formatTwoDigits from '../components/common/formatTwoDigits';
import MoreContentsButton from '../components/common/MoreContentsButton';
import Card from '../components/common/Card';
import paging from '../components/common/paging';

const responseExample = {
    "totalPages": 0,
    "contents": [
      {
        "title": "string",
        "areaCode": 0,
        "overView": "string",
        "contentId": 0,
        "contentTypeId": 0,
        "thumbnailUrl": "string",
        "helpdog": true,
        "parking": true,
        "wheelchair": true,
        "restroom": true,
        "audioguide": true,
        "exits": "string"
      }
    ]
  };

function SearchPage(){
    const page = useRef(0);
    const [selectedReg, setSelectedReg] = useState();
    const [selectedType, setSelectedType] = useState();
    const [searchWord, setSearchWord] = useState();

    const [result, setResult] = useState(responseExample); 

    const fetchResult = () => {
        axiosInstance.get(`/api/v1/search/tourist-attraction?areacode=${selectedReg}&type=${selectedType}&searchParam=${searchWord}&page=${page.current}`)
            .then(res => setResult(res.data))
            .catch(err => alert("검색 결과를 불러오는데 실패했습니다."));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        page.current = 0;
        // 검색 당시에는 무조건 page=0, 더보기 버튼 호출 시 같은 조건에서 page 수 늘려서 호출
        fetchResult();
    }

    const handleMoreContents = () => {
        page.current += 1;
        axiosInstance.get(`/api/v1/search/tourist-attraction&areacode=${selectedReg}&type=${selectedType}&searchParam=${searchWord}&page=${page.current}`)
            .then(res => setResult(...res.data))
            .catch(err => alert("검색 결과를 불러오는데 실패했습니다."));
    }

    useEffect(() => {
        console.log(selectedReg, selectedType, searchWord, result);
        page.current = 0;
        fetchResult();
    }, [selectedReg, selectedType, searchWord, result])

    return (
        <>
            <h1>관광지 찾기</h1>
            <SearchGroup 
                handleSubmit={handleSubmit}
                selectedReg={selectedReg}
                setSelectedReg={setSelectedReg}
                selectedType={selectedType}
                setSelectedType={setSelectedType}  
                searchWord={searchWord}
                setSearchWord={setSearchWord}  
            />
            <h3>총 <span style={{color: "#4caf50"}}>{formatTwoDigits(result.contents.length)}</span>개</h3>
            
            <CardList>
                {result.contents.length? 
                    result.contents.map(item => 
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
            {paging(result.totalPages, page.current) && <MoreContentsButton onClick={handleMoreContents} /> }
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