import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import formatDate from "../common/formatDate";

function NoticeTable({data, visibleCount}) {
    const navigate = useNavigate();
    
    const handleRowClick = (id) => {
        navigate(`/notice/${id}`);
      };

    return (
        <StyledTable>
            <StyledTHead>
            <th> </th>
            <th>상담제목</th>
            <th className="date">작성일</th>
            </StyledTHead>
            <tbody>
            {data.map((notice) => (
                <BodyTr 
                onClick={() => handleRowClick(notice.id)}
                >
                <td className="category"> [공지사항] </td>
                <td> {notice.title} </td>
                <td className="date"> {formatDate(notice.createdAt)} </td>
                </BodyTr>
            ))}
            </tbody>
        </StyledTable>
    )
}

export default NoticeTable;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 2em 0;
`
const StyledTHead = styled.thead`
  border-top: 2px solid #000;
  text-align: left;
  height: 3.5em;
  .date {
    text-align: right;
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
    font-weight: bold;
  }
  .date { 
    width: 5em; 
    color: #8E9398;
  }
`