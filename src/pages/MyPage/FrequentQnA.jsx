import {React, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import SideBar from "../../components/MyPage/SideBar";
import MoreContentsButton from "../../components/common/MoreContentsButton";
import formatDate from "../../components/common/formatDate";

const initData =[{
    id: 1,
    title: "회원은 어떤 서비스를 이용할 수 있나요?",
    createdAt: "2025.01.01",
  }, {
    id: 1,
    title: "서울숲에 휠체어 타고 갈 수 있나요?",
    createdAt: "2025.01.01",
  }];


function FrequentQnA() {
    const [data, setData] = useState(initData);
    const navigate = useNavigate();

    const handleRowClick = (id) => {
        navigate(`/QnA/${id}`);
    }

    useEffect(() => {
      axios.get(`/api/v1/mypage/faqs`)
        .then(res => setData(res.data))
        .catch(err => alert(`${err.status}: 나의 정보를 불러오는데 실패했습니다`))
    }, []);

    return (
        <Container>
            <SideBar />
            <Contents>
            <h2>자주 묻는 질문</h2>

                <StyledTable>
                    <TableBody>
                        {data.map((item) => (
                        <BodyTr 
                        onClick={() => handleRowClick(item.faqId)}
                        >
                        <td> <QButton>Q</QButton> </td>
                        <td> {item.title} </td>
                        <td className="date"> {formatDate(item.createdAt)} </td>
                        </BodyTr>
                        ))}
                    </TableBody>
                </StyledTable>
                
                <div>
                    <MoreContentsButton shape="square"/>
                </div>
            </Contents>
        </Container>
    );
}


const Container = styled.div`
    display: flex;
    flex-direction: row;
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
const TableBody = styled.tbody`
  border-top: 2px solid black;
`
const QButton = styled.button`
    bakcground-color: #8E9398;
    border-radius: 50%;
    border: none;
    margin-right: 1.5em;
`

export default FrequentQnA;