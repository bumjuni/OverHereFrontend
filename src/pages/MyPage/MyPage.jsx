import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import SideBar from "../../components/MyPage/SideBar";
import FavAttraction from "./FavAttraction";

const region = ['서울', '경기도', '강원도', '전라도', '경상도', '제주'];
const type = ['자연', '문화/역사', '음식/미식', '축제/이벤트'];
const theme = ['자연 속 휴식', '액티비티', '체험 여행', '역사 탐방', '핫플 모음', '가족 여행', '커플 여행'];


function MyPage() {
    return (
        <>
            <h1>마이페이지</h1>
            <SideBar />
        </>
    )
}

export default MyPage;