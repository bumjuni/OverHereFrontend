import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LinkButton from "./LinkButton";

const buttons = [
    {name: "관광지 즐겨찾기", link: "/mypage/favorite-attractions"},
    {name: "여행코스 즐겨찾기", link: "/mypage/favorite-courses"},
    {name: "나의 문의내역", link: "/mypage/my-QnA"},
    {divider: true},
    {name: "자주 묻는 질문", link: "/frequent-QnA"},
    {name: "1:1 문의하기", link: "/1:1-QnA"},
    {divider: true},
    {name: "나의 정보", link: "/mypage/info"},
    {name: "로그아웃"}
];

function SideBar() {
    const navigate = useNavigate();

    return (
        <Container>
            <Profile>
                <h4> 안녕하세요! </h4>
                <p> beyond1234@naver.com </p>
            </Profile>
            {buttons.map((item) => (
                item.divider?
                <Divider /> : 
                <LinkButton
                    name={item.name}
                    onClick={() => navigate(`${item.link}`)}
                    />
            ))}
        </Container>
    )
}
export default SideBar;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 14em;
    border: 1px solid #E2E5E8;
    border-radius: .5em;
    margin: 0 3em 3em 0;
`
const Profile = styled.div`
    margin: 2em 0;
    h4 { margin: 1em; };
    p { 
        margin: 0;
        color: #505458; 
    };
`
const Divider = styled.div`
    margin: 1em;
    border-bottom: 1px solid #E2E5E8;
`