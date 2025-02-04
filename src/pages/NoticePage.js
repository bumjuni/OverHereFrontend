import React, { useState } from "react";

const initialNotices = Array(10).fill({
  category: "[공지사항]",
  title: "서울숲에 휠체어 타고 갈 수 있나요?",
  date: "2025.01.01",
});

const NoticePage = () => {
  const [notices, setNotices] = useState(initialNotices);
  const [visibleCount, setVisibleCount] = useState(5);

  // 더보기 버튼 클릭 시 데이터 추가
  const loadMore = () => {
    setVisibleCount((prev) => prev + 5); // 5개씩 추가
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333", width: "60%", margin: "auto" }}>
      <h2 style={{ fontWeight: "bold", fontSize: "24px", marginBottom: "20px" }}>공지사항</h2>

      {/* 테이블 */}
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid #000", textAlign: "left" }}>
            <th style={{ padding: "10px" }}>상담제목</th>
            <th style={{ padding: "10px", textAlign: "right" }}>작성일</th>
          </tr>
        </thead>
        <tbody>
          {notices.slice(0, visibleCount).map((notice, index) => (
            <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "10px" }}>
                <strong style={{ marginRight: "10px" }}>{notice.category}</strong>
                {notice.title}
              </td>
              <td style={{ padding: "10px", textAlign: "right" }}>{notice.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 더보기 버튼 */}
      {visibleCount < notices.length && (
        <button
          onClick={loadMore}
          style={{
            display: "block",
            margin: "auto",
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          더보기 +
        </button>
      )}
    </div>
  );
};

export default NoticePage;
