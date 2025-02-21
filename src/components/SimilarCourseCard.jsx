import React from "react";

const SimilarCourseCard = ({ image, region, type, title, description }) => {
  return (
    <div
      style={{
        width: "250px",
        border: "1px solid #EDEFF1",
        borderRadius: "10px",
        padding: "15px",
        fontFamily: "Arial, sans-serif",
        color: "#333",
      }}
    >
      {/* Image Placeholder */}
      <div
        style={{
          width: "100%",
          height: "150px",
          backgroundColor: "#EDEFF1",
          borderRadius: "10px",
          marginBottom: "10px",
        }}
      >
        {image && (
          <img
            src={image}
            alt="Course"
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }}
          />
        )}
      </div>

      {/* Tags */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "10px" }}>
        <span
          style={{
            padding: "5px 10px",
            backgroundColor: "#F1F3F5",
            borderRadius: "20px",
            fontSize: "12px",
            color: "#666",
          }}
        >
          {region}
        </span>
        <span
          style={{
            padding: "5px 10px",
            backgroundColor: "#FCEEC8",
            borderRadius: "20px",
            fontSize: "12px",
            color: "#666",
          }}
        >
          {type}
        </span>
      </div>

      {/* Title */}
      <h3 style={{ fontSize: "16px", margin: "0 0 8px 0", fontWeight: "bold" }}>{title}</h3>

      {/* Description */}
      <p style={{ fontSize: "14px", margin: "0", lineHeight: "1.6", color: "#666" }}>
        {description}
      </p>
    </div>
  );
};

export default SimilarCourseCard;
