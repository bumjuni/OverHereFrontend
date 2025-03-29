import {React, useEffect, useState, useRef} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axiosInstance from "../../api/axios";
import SideBar from "../../components/MyPage/SideBar";
import MoreContentsButton from "../../components/common/MoreContentsButton";
import formatDate from "../../components/common/formatDate";
import paging from "../../components/common/paging";

const responseExample = {
  "totalPages": 0,
  "contents": [
    {
      "faqId": 0,
      "title": "string",
      "content": "string",
      "createdAt": "2025-03-29T12:18:24.973Z",
      "updatedAt": "2025-03-29T12:18:24.973Z"
    }
  ]
};

function FrequentQnA() {
    const page = useRef(0);
    const [data, setData] = useState(responseExample.contents);
    const navigate = useNavigate();

    const handleRowClick = (id) => {
        navigate(`/QnA/${id}`);
    }

    useEffect(() => {
        axiosInstance.get(`/api/v1/mypage/faqspage=${page.current}`)
          .then((res) => {
            setData(res.data);
          })
          .catch((err) => {
            alert(`${err.status}: 자주 묻는 질문 리스트를 불러오는데 실패했습니다`);
          });
    }, []);


      const handleMoreContents = () => {
            page.current += 1;
            axiosInstance.get(`/api/v1/mypage/faqspage=${page.current}`)
                .then(res => setData(...res.data.contentss))
                .catch(err => alert("자주 묻는 질문 리스트를 불러오는데 실패했습니다."));
        }
    
    

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
                  {paging(data.totalPages, page.current) && <MoreContentsButton shape="square" onClick={handleMoreContents}/> }
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