import {React, useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "../components/common/SearchBar";
import Card from "../components/common/Card";
import MoreContentsButton from "../components/common/MoreContentsButton";
import BestCourseCard from "../components/BestCourse/BestCourseCard";
import NoticeTable from '../components/Notice/NoticeTable';
import {ReactComponent as ArrowCircle} from '../assets/svg/ArrowCircle.svg';
import axiosInstance from '../api/axios';

const initRecKeyword = [
    "여행 코스", "여행 코스", "여행 코스", "여행 코스", "여행 코스", "여행 코스", "여행 코스"
];
const initTourData = [
    {
        title: "관광지 이름", 
        region: "지역", 
        nonObstacle: [true, true, true, true, true],
    }, {
        title: "관광지 이름", 
        region: "지역", 
        nonObstacle: [true, false, false, true, true],
    }, {
        title: "관광지 이름", 
        region: "지역", 
        nonObstacle: [true, true, true, false, true],
    }
];
const initCourseData = [
    {
        "courseId": 0,
        "courseType": "string",
        "title": "string",
        "briefDescription": "stringstringstringstringstringstringstringstringstrstringingstringstststringstrstringingstringstststringstrstringingstringstststringstrstringingstringstststringstrstringingstringstststringstrstringingstringstststringstrstringingstringstststringstrstringingstringstststringstrstringingstringstststringstrstringingstringstststringstrstringingstringstststringstrstringingstringstststringstrstringingstringstststringstrstringingstringstststringstrstringingstringstststringstrstringingstringststringstringstringstringstringstringstringringstringstringstringstringstringstring",
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
          "distance": 0,
      }
  
];
const initNoticeData = Array(20).fill({
        "id": 2,
        "title": "서울숲에 휠체어 타고 갈 수 있나요?",
        "createdAt": "2025-01-01T00:00:00",
    });

function IntegrateSearch() {
    const location = useLocation();
    const headerKeyWord = location.state? location.state.keyword : undefined;
    const [keyword, setKeyword] = useState(location.state?.keyword);
    const [recKeyword, setRecKeyword] = useState(initRecKeyword);
    const [tourData, setTourData] = useState(initTourData);
    const [courseData, setCourseData] = useState(initCourseData);
    const [noticeData, setNoticeData] = useState(initNoticeData);

    useEffect(() => {
        // header에서 검색 시시
        setKeyword(headerKeyWord);
        Search(headerKeyWord);
    }, [headerKeyWord])
    
    const handleClick = (e) => {
        // 추천검색어 클릭 시
        setKeyword(e.target.value);
        Search(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        Search(keyword);
    }

    const Search = (keyword) => {
        axiosInstance.get(`/api/v1/search/tourist-attraction/searchParam=${keyword}`)
            .then(res => setTourData(res.data))
            .catch(err => alert("관광지 정보를 검색하는데 실패했습니다"));
        axiosInstance.get(`/api/v1/search/course/searchQuery=${keyword}`)
            .then(res => setCourseData(res.data))
            .catch(err => alert("코스 정보를 검색하는데 실패했습니다"));
    }

    return (
        <>
        <SearchOptions>
            <form onSubmit={handleSubmit}>
                <SearchBar keyword={keyword} onChange={setKeyword} />
            </form>
            <RecKeyword>추천 검색어</RecKeyword>
                <RecButtons>
                    {recKeyword.map((item) => 
                    <button onClick={handleClick} value={item}>{item}</button>
                    )}
            </RecButtons>
        </SearchOptions>    

            <h1>관광지</h1>
            <TourContainer>
                {initTourData.map((item) => 
                    <Card 
                        title={item.title}
                        region={item.region}
                        nonObstacle={item.nonObstacle}
                    />
                )}
            </TourContainer>
            <MoreContentsButton />
            <h1>여행 코스</h1>
            <CourseContainer>
            {initCourseData.map((item) => 
                <BestCourseCard 
                    courseId={item.courseId}
                    courseType={item.courseType}
                    title={item.title}
                    description={item.briefDescription}
                    distance={item.distance}
                    img={item.img}
                />
            )}
            </CourseContainer>
            <Link to='/recommend-course'>
                <Button>더 보러가기 <ArrowCircle /> </Button>
            </Link>

            <h1>공지사항</h1>
            <NoticeTable
                data={initNoticeData}
                visibleCount={5}
            />
            <Link to='/notice'>
                <Button>더 보러가기 <ArrowCircle /> </Button>
            </Link>
        </>
    );
}

export default IntegrateSearch;

const SearchOptions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 1em;
    padding-bottom: 5em;
    border-bottom: 1px solid #505458;
    margin: 2em 0;
    .inIntegrated{
        width: 40em;
        height: 3em;
        input { font-size: medium; }
    }
`
const RecKeyword = styled.h2`
    color: #505458; 
`
const RecButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 40em;
    justify-content: center;
    gap: 1em;

    button{
        background-color: #fff;
        color: #505458;
        padding: .7em 1em;
        border: 1px solid #505458;
        border-radius: 2em;
        font-size: medium;
        cursor: pointer;
    }
`
const TourContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1em;
    margin: 3em 0;
`
const CourseContainer = styled.div`
    word-break: break-word;
    margin: 5em 0;
`
const Button = styled.button`
    display: flex;
    justify-self: center;
    align-items: center;
    padding: .8em 3em;
    margin: 3em;
    color: #505458;
    background-color: #fff;
    font-size: large;
    font-weight: bold;
    border: 1px solid #505458;
    border-radius: 5px;
    gap: .5em;
    cursor: pointer;
`