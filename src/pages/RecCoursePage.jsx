import {react, useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import DropDownCard from '../components/RecCourse/DropDownCard';
import SearchGroupNoInput from '../components/RecCourse/SearchGroupNoInput';
import MoreContentsButton from '../components/common/MoreContentsButton';

const dummy = [
    {
        "courseId": 0,
        "courseType": "string",
        "title": "string",
        "briefDescription": "string",
        "overView": "string",
        "difficulty": "string",
        "distance": 0,
        "attractions": [{
            "title": "string"
        }, {
            "title": "string"
        }, {
            "title": "string"
        }, {
            "title": "string"
        }, {
            "title": "string"
        }]
    }, {
        "courseId": 0,
        "courseType": "string",
        "title": "string",
        "briefDescription": "string",
        "overView": "string",
        "difficulty": "string",
        "distance": 0,
        "attractions": [{
            "title": "string"
        }, {
            "title": "string"
        }]

    }, {
        "courseId": 0,
        "courseType": "string",
        "title": "string",
        "briefDescription": "string",
        "overView": "string",
        "difficulty": "string",
        "distance": 0,
        "attractions": [{
            "title": "string"
        }, {
            "title": "string"
        }, {
            "title": "string"
        }, {
            "title": "string"
        }, {
            "title": "string"
    }, {
        "title": "string"
    },{
        "title": "string"
    },{
        "title": "string"
    },{
        "title": "string"
    }]

    }, {
        "courseId": 0,
        "courseType": "string",
        "title": "string",
        "briefDescription": "string",
        "overView": "string",
        "difficulty": "string",
        "distance": 0,
    }, {
        "courseId": 0,
        "courseType": "string",
        "title": "string",
        "briefDescription": "string",
        "overView": "string",
        "difficulty": "string",
        "distance": 0
    }
];

function RecCoursePage(){
    const [data, setData] = useState(dummy);
    const [filteredData, setFilteredData] = useState([]);   // 필터링 시 사용
    const [selectedReg, setSelectedReg] = useState();
    const [selectedType, setSelectedType] = useState();
    const page = useRef(0);
    
    // 검색하기 버튼이 없음 => 필터 변경될 때 마다 필터링 및 API 호출? 

    useEffect(() => {
        // 검색 전 초기 화면
        axios.get(`/api/v1/course/recommend/areacode&areacode=${selectedReg}&courseType=${selectedType}&page=${page.current}`)
            .then(res => setData(res.data))
            .catch(err => alert(`${err.status}: 지역별 추천 코스 정보를 불러오는데 실패했습니다`))
    }, [])

    const handleSubmit = (e, selectedReg, selectedType) => {
        // 필터 생성
        e.preventDefault();
        page.current = 0;   // page 초기화
        axios.get(`/api/v1/course/recommend/areacode&areacode=${selectedReg}&courseType=${selectedType}&page=${page.current}`)
            .then(res => setData(res.data))
            .catch(err => alert(`${err.status}: 검색 결과를 불러오는데 실패했습니다.`));
    }

    const handleMoreContent = ([selectedReg, selectedType]) => {
        // 더보기 버튼
        console.log(selectedReg)
        page.current += 1;  // page 증가
        axios.get(`/api/v1/course/recommend/areacode&areacode=${selectedReg}&courseType=${selectedType}&page=${page.current}`)
            .then(res => setData(...res.data))
            .catch(err => alert(`${err.status}: 지역별 추천 코스 정보를 불러오는데 실패했습니다`))
    }

    return (
        <>
            <h1> 원하는 코스 찾기 </h1>
            <SearchGroupNoInput 
                handleSubmit={handleSubmit} 
                selectedReg={selectedReg} 
                selectedType={selectedType} 
                setSelectedReg={setSelectedReg} 
                setSelectedType={setSelectedType}/>
            <CardList>
                {dummy.map((item) => <DropDownCard data={item} />)} 
            </CardList>
            <MoreContentsButton onClick={handleMoreContent} params={[selectedReg, selectedType]}/>
        </>
    );
}

export default RecCoursePage;

const CardList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2em 1em;
    margin: 2em 0;
    `