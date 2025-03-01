import {react, useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import DropDownCard from '../components/RecCourse/DropDownCard';
import SearchGroup from '../components/SearchPage/SearchGroup';
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
    const [selectedReg, setSelectedReg] = useState();
    const [selectedType, setSelectedType] = useState();
    const page = useRef(0);
    
    useEffect(() => {
        axios.get(`/api/v1/course/recommend/areacode&areacode=${selectedReg}&courseType=${selectedType}&page=${page}`)
            .then(res => setData(res.data))
            .catch(err => alert("지역별 추천 코스 정보를 불러오는데 실패했습니다"))
    }, [])

    return (
        <>
            <h1> 원하는 코스 찾기 </h1>
            <SearchGroup />
            <CardList>
                {dummy.map((item) => <DropDownCard data={item} />)} 
            </CardList>
            <MoreContentsButton />
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