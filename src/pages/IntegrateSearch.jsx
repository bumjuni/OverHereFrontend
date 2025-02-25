import React from "react";
import styled from "styled-components";
import SearchBar from "../components/common/SearchBar";
import Card from "../components/common/Card";
import MoreContentsButton from "../components/common/MoreContentsButton";
import BestCourseCard from "../components/BestCourse/BestCourseCard";

const tourCardData = [
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
]

function IntegrateSearch() {
    return (
        <>
        <SearchOptions>
            <SearchBar />
                <RecKeyword>추천 검색어</RecKeyword>
                <RecButtons>
                    <button>여행 코스</button>
                    <button>여행 코스</button>
                    <button>여행 코스</button>
                    <button>여행 코스</button>
                    <button>여행 코스</button>
                    <button>여행 코스</button>
                    <button>여행 코스</button>
                </RecButtons>
        </SearchOptions>    

            <h1>관광지</h1>
            <CardContainer>
                {tourCardData.map((item) => 
                    <Card 
                        title={item.title}
                        region={item.region}
                        nonObstacle={item.nonObstacle}
                    />
                )}
            </CardContainer>
            <MoreContentsButton />
            <h1>여행 코스</h1>
            <BestCourseCard />
            <Button>더 보러가기</Button>
            <h1>공지사항</h1>
            <Button>더 보러가기</Button>
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
    }
`
const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1em;
    margin: 3em 0;
`
const Button = styled.button`
    display: block;
    justify-self: center;
    padding: .8em 3em;
    margin: 3em;
    color: #505458;
    background-color: #fff;
    font-size: large;
    font-weight: bold;
    border: 1px solid #505458;
    border-radius: 5px;
`