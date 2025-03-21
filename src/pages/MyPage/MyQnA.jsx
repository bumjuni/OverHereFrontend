import {React, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SideBar from "../../components/MyPage/SideBar";
import MoreContentsButton from "../../components/common/MoreContentsButton";
import formatDate from "../../components/common/formatDate";
import Badge from "../../components/common/Badge";
import axios from "axios";

const initData =[{
    id: 1,
    category: "문의유형",
    title: "서울숲에 휠체어 타고 갈 수 있나요?",
    createdAt: "2025.01.01",
    done: "asdf",
  }];

function MyQnA() {
    const [data, setData] = useState(initData);
    const navigate = useNavigate();

    const handleRowClick = (id) => {
        navigate(`/notice/${id}`);
    }

    useEffect (() => {
      axios.get(`/api/v1/mypage/inquiries`)
        .then(res => setData(res.data))
        .catch(error => alert(`${error.status}: 나의 문의내역을 불러오는데 실패했습니다`))
    });

    return (
        <Container>
            <SideBar />
            <Contents>
                <Header>
                <h2>나의 문의내역</h2>
                <QnAButton>1:1 문의하기</QnAButton>
                </Header>

                <StyledTable>
                    <StyledTHead>
                    <th> 문의유형</th>
                    <th>상담제목</th>
                    <th>작성일</th>
                    <th className="right">답변유무</th>
                    </StyledTHead>
                    <tbody>
                        {data.map((item) => (
                        <BodyTr 
                        onClick={() => handleRowClick(item.id)}
                        >
                        <td className="category"> {item.inquiryType || "문의유형"} </td>
                        <td> {item.title} </td>
                        <td className="date"> {formatDate(item.createdAt)} </td>
                        <td className="right"> <Badge text={item.answered? "답변완료" : "답변 대기중"} color="green" /> </td>
                        </BodyTr>
                        ))}
                    </tbody>
                </StyledTable>
                
                <div>
                    <MoreContentsButton shape="square"/>
                </div>
            </Contents>
        </Container>
    );
}
export default MyQnA;

const Container = styled.div`
    display: flex;
    flex-direction: row;
`
const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
`
const QnAButton = styled.button`
    display: inline-flex;
    justify-self: center;
    padding: 1em 4.5em;
    border-radius: 4px;
    background-color: unset;
    border: 1px solid #529B40;
    color: #529B40;
    font-weight: bolder;
    text-align: center;
    align-items: center;
    cursor: pointer;
    &:hover{
        background-color: #f0f0f0;
        transition: 0.3s ease;
    }
`
const Contents = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100% - 18em);
`
const StyledTable = styled.table`
  border-collapse: collapse;
  margin: 1em 0 3em 0;
`
const StyledTHead = styled.thead`
  border-top: 2px solid #000;
  text-align: left;
  height: 3.5em;
  .right {
    text-align: right;
    padding-right: 7px;
  }
`
const BodyTr = styled.tr`
  border-block: 1px solid #ddd;
  cursor: pointer;
  td { 
    height: 3.5em; 
  }
  .category { 
    width: 8em; 
    // font-weight: bold;
  }
  .date { 
    width: 5em; 
    color: #8E9398;
  }
  .right {
    text-align: right;
  }
`