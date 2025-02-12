//푸터 내 공지사항 페이지

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// 초기 공지사항 데이터 (20개 중 처음엔 10개만 표시)
const initialNotices = Array(20).fill({
  category: "[공지사항]",
  title: "서울숲에 휠체어 타고 갈 수 있나요?",
  date: "2025.01.01",
});

const NoticePage = () => {
  const navigate = useNavigate();
  const [notices] = useState(initialNotices);
  const [visibleCount, setVisibleCount] = useState(10); // 처음 10개만 표시
  const [isExpanded, setIsExpanded] = useState(false); // 버튼 상태 (더보기/창 줄이기)

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
    navigate(`/notice/${index}`);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333", width: "60%", margin: "auto" }}>
      <h2 style={{ fontWeight: "bold", fontSize: "24px", marginBottom: "20px", textAlign: "center" }}>공지사항</h2>

      {/* 테이블 (스크롤 없이 전체 표시) */}
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid #000", textAlign: "left" }}>
            <th style={{ padding: "10px" }}>상담제목</th>
            <th style={{ padding: "10px", textAlign: "right" }}>작성일</th>
          </tr>
        </thead>
        <tbody>
          {notices.slice(0, visibleCount).map((notice, index) => (
            <tr 
              key={index} 
              style={{ borderBottom: "1px solid #ddd", cursor: "pointer" }}
              onClick={() => handleRowClick(index)}
            >
              <td style={{ padding: "10px" }}>
                <strong style={{ marginRight: "10px" }}>{notice.category}</strong>
                {notice.title}
              </td>
              <td style={{ padding: "10px", textAlign: "right" }}>{notice.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 더보기 / 창 줄이기 버튼 */}
      <div style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}>
        <button
          onClick={toggleView}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: "5px",
            cursor: "pointer",
            whiteSpace: "nowrap",
            width: "auto",
            display: "inline-block",
            textAlign: "center",
          }}
        >
          {isExpanded ? "창 줄이기" : "더보기 +"}
        </button>
      </div>
    </div>
  );
};

export default NoticePage;
