import {react, useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import DropDownCard from '../components/DropDownCard';
import dummy1 from '../assets/image/dummy/dummy_img1.jpg';
import dummy2 from '../assets/image/dummy/dummy_img2.jpg';
import dummy3 from '../assets/image/dummy/dummy_img3.jpg';
import dummy4 from '../assets/image/dummy/dummy_img4.jpg';
import dummy5 from '../assets/image/dummy/dummy_img5.jpg';
import dummy6 from '../assets/image/dummy/dummy_img6.jpg';
import dummy7 from '../assets/image/dummy/dummy_img7.jpg';
import SearchGroup from '../components/SearchPage/SearchGroup';

const dummy = [
    {
        "courseId": 0,
        "courseType": "string",
        "title": "string",
        "briefDescription": "string",
        "overView": "string",
        "difficulty": "string",
        "distance": 0,
        "image": dummy1,
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
        "image": dummy4,
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
        "image": dummy7,
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

    return (
        <>
            <h1> 원하는 코스 찾기 </h1>
            <SearchGroup />
            <CardList>
                {dummy.map((item) => <DropDownCard data={item} />)} 
            </CardList>
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