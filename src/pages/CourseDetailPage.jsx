import React from "react";
import CourseDetailInfo from "../components/CourseDetailInfo";
import SimilarCourseCard from "../components/SimilarCourseCard";

const CourseDetailPage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333", margin: "20px" }}>
      {/* Header Section */}
      <div
        style={{
          width: "100%",
          height: "300px",
          backgroundColor: "#ccc",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div>
          <p style={{ fontSize: "18px", margin: 0 }}>지역</p>
          <h2 style={{ fontSize: "32px", margin: 0 }}>텍스트</h2>
        </div>
      </div>

      {/* Icon Info Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <div style={{ marginRight: "15px" }}>
          <span>👁</span> 12,345회
        </div>
        <div>
          <span>❤️</span> 9,999
        </div>
      </div>

      {/* Details Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "30px",
          padding: "20px",
          borderTop: "1px solid #ddd",
          borderBottom: "1px solid #ddd",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "18px", fontWeight: "bold" }}>총 00KM</div>
          <p>코스 거리</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "18px", fontWeight: "bold" }}>00개</div>
          <p>관광지 개수</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "18px", fontWeight: "bold" }}>이동수단</div>
          <p>권장 이동수단</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "18px", fontWeight: "bold" }}>난이도</div>
          <p>난이도</p>
        </div>
      </div>

      {/* Description */}
      <div style={{ padding: "20px", lineHeight: "1.6" }}>
        역사와 문화를 동시에 체험할 수 있는 특별한 관광지 코스를 소개합니다. 이 코스는 각
        지역의 고유한 매력을 살린 역사적 명소들로 구성되어 있으며, 장애인 친화적인
        시설과 서비스를 통해 모든 분들이 편리하게 즐길 수 있습니다.
      </div>

      {/* Placeholder Section */}
      <div
        style={{
          width: "100%",
          height: "300px",
          backgroundColor: "#ccc",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      ></div>

      {/* Course Details */}
      <div>
        <CourseDetailInfo
          time="00시 00구"
          title="텍스트"
          description="관광지 설명 관광지 설명 관광지 설명 관광지 설명 관광지 설명 관광지 설명"
          icon="♿" // Replace with an actual icon or image if necessary
        />
        <CourseDetailInfo
          time="00시 00구"
          title="다른 텍스트"
          description="다른 관광지 설명 다른 관광지 설명 다른 관광지 설명 다른 관광지 설명"
          icon="♿"
        />
        <CourseDetailInfo
          time="00시 00구"
          title="다른 텍스트"
          description="다른 관광지 설명 다른 관광지 설명 다른 관광지 설명 다른 관광지 설명"
          icon="♿"
        />
        <CourseDetailInfo
          time="00시 00구"
          title="다른 텍스트"
          description="다른 관광지 설명 다른 관광지 설명 다른 관광지 설명 다른 관광지 설명"
          icon="♿"
        />
        <CourseDetailInfo
          time="00시 00구"
          title="다른 텍스트"
          description="다른 관광지 설명 다른 관광지 설명 다른 관광지 설명 다른 관광지 설명"
          icon="♿"
        />
      </div>

      <h1>비슷한 코스 찾아보기</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <SimilarCourseCard
          image={null}
          region="지역"
          type="코스 유형"
          title="텍스트"
          description="코스 설명 글 코스 설명 글 코스 설명 글 코스 설명 글 코스 설명 글"
        />
        <SimilarCourseCard
          image={null}
          region="다른 지역"
          type="다른 코스"
          title="다른 텍스트"
          description="다른 코스 설명 글 다른 코스 설명 글 다른 코스 설명 글 다른 코스 설명 글"
        />
        <SimilarCourseCard
          image={null}
          region="다른 지역"
          type="다른 코스"
          title="다른 텍스트"
          description="다른 코스 설명 글 다른 코스 설명 글 다른 코스 설명 글 다른 코스 설명 글"
        />
      </div>
    </div>
  );
};

export default CourseDetailPage;
