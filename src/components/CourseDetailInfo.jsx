import React from "react";

const CourseDetailInfo = ({ time, title, description, icon }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "20px 0",
        fontFamily: "Arial, sans-serif",
        color: "#333",
      }}
    >
      {/* Image Placeholder */}
      <div
        style={{
          width: "120px",
          height: "120px",
          backgroundColor: "#EDEFF1",
          borderRadius: "10px",
          marginRight: "20px",
        }}
      ></div>

      {/* Text Content */}
      <div>
        <div style={{ fontSize: "14px", color: "#666", marginBottom: "5px" }}>{time}</div>
        <h3 style={{ fontSize: "18px", margin: "0 0 10px 0", fontWeight: "bold" }}>{title}</h3>
        <p style={{ fontSize: "14px", margin: "0 0 10px 0", lineHeight: "1.6" }}>{description}</p>
        <div style={{ fontSize: "24px", color: "#6AA84F" }}>{icon}</div>
      </div>
    </div>
  );
};

export default CourseDetailInfo;
