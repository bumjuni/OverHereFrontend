//푸터 내 공지사항 페이지

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import formatDate from '../components/common/formatDate';

// 초기 공지사항 데이터 (20개 중 처음엔 10개만 표시)
const initialNotices = Array(20).fill({
  id: 1,
  category: "[공지사항]",
  title: "서울숲에 휠체어 타고 갈 수 있나요?",
  createdAt: "2025.01.01",
});

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
const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #fff;
  border: 1px solid #505458;
  border-radius: 3px;
  cursor: pointer;
  white-space: nowrap;
  width: auto;
  display: inline-block;
  text-align: center;
`

const NoticePage = () => {
  const navigate = useNavigate();
  const [notices, setNotices] = useState(initialNotices);
  const [visibleCount, setVisibleCount] = useState(10); // 처음 10개만 표시
  const [isExpanded, setIsExpanded] = useState(false); // 버튼 상태 (더보기=0/창 줄이기=1)

  // 버튼 클릭 시 10개 ↔ 20개 토글
  const toggleView = () => {
    if (isExpanded) {
      setVisibleCount(10); // 다시 10개로 줄이기
    } else {
      setVisibleCount(notices.length); // 전체 공지 보이기
    }
    setIsExpanded(!isExpanded); // 버튼 텍스트 변경
  };

  // 게시글 클릭 시 페이지 이동
  const handleRowClick = (index) => {
    console.log(index);
    navigate(`/notice/${index}`);
  };

  useEffect(() => {
    axios.get('api/v1/notices')
    .then(res => setNotices(res.data))
    .catch(err => alert("공지사항을 불러오는데 실패했습니다."));

    const sortedNotices = notices.sort((a, b) => (a.id - b.id));  // id역순(최신순)으로 정렬
    setNotices(sortedNotices);
  }, [])

  return (
    <div>
      <h2>공지사항</h2>

      {/* 테이블 (스크롤 없이 전체 표시) */}
      <StyledTable>
        <StyledTHead>
          <th> </th>
          <th>상담제목</th>
          <th className="date">작성일</th>
        </StyledTHead>
        <tbody>
          {notices.slice(0, visibleCount).map((notice) => (
            <BodyTr 
              key={notice.id} 
              onClick={() => handleRowClick(notice.id)}
            >
              <td className="category"> [공지사항] </td>
              <td> {notice.title} </td>
              <td className="date"> {formatDate(notice.createdAt)} </td>
            </BodyTr>
          ))}
        </tbody>
      </StyledTable>

      {/* 더보기 / 창 줄이기 버튼 */}
      <div style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}>
        <StyledButton
          onClick={toggleView}
        >
          {isExpanded ? "창 줄이기" : "더보기  +"}
        </StyledButton>
      </div>
    </div>
  );
};

export default NoticePage;
