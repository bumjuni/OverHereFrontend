//푸터 내 공지사항 페이지

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NoticeTable from "../components/Notice/NoticeTable";
import axiosInstance from '../api/axios';  // 커스텀 axios 인스턴스 import

const NoticePage = () => {
  const [notices, setNotices] = useState([]); // 초기값을 빈 배열로 설정
  const [visibleCount, setVisibleCount] = useState(10);
  const [isExpanded, setIsExpanded] = useState(false);

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

  useEffect(() => {
    axiosInstance.get('/api/v1/notices')
      .then(res => {
        // contents 배열 추출
        const noticesData = res.data.contents || [];
        setNotices(...noticesData);
        // id 기준 내림차순 정렬 (최신순)
        const sortedNotices = noticesData.sort((a, b) => b.id - a.id);
        setNotices(sortedNotices);
      })
      .catch(err => alert("공지사항을 불러오는데 실패했습니다."));
  }, []);

  return (
    <div>
      <h2>공지사항</h2>

      {/* 테이블 (스크롤 없이 전체 표시) */}
      <NoticeTable 
        data={notices} 
        visibleCount={visibleCount} 
      />

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