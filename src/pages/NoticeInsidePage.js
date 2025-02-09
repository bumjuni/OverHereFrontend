import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const NoticeInsidePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleBack = () => {
    navigate("/notice");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333", width: "60%", margin: "auto" }}>
      <h2 style={{ fontWeight: "bold", fontSize: "24px", marginBottom: "20px", textAlign: "center" }}>
        공지사항 상세
      </h2>
      <p style={{ fontSize: "18px", fontWeight: "bold" }}>[공지사항] 서울숲에 휠체어 타고 갈 수 있나요?</p>
      <p style={{ color: "gray" }}>작성일: 2025.01.01</p>
      <p style={{ marginTop: "20px" }}>여기에 공지사항 상세 내용이 들어갑니다. ID: {id}</p>
      
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <button
          onClick={handleBack}
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
          목록
        </button>
      </div>
    </div>
  );
};

export default NoticeInsidePage;
