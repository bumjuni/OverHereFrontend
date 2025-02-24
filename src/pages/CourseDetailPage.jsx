import React from "react";
import axios from "axios";
import styled from "styled-components";
import CourseDetailInfo from "../components/CourseDetail/CourseDetailInfo";
import SimilarCourseCard from "../components/CourseDetail/SimilarCourseCard";
import {ReactComponent as Dist} from '../assets/svg/TravelRoutes/Route_Pictogram.svg';
import {ReactComponent as Map} from '../assets/svg/TravelRoutes/MapPos_Pictogram.svg';
import {ReactComponent as Difficulty} from '../assets/svg/TravelRoutes/DifficultyLevel_Pictogram.svg';
import dummy from '../assets/image/dummy/dummy_img3.jpg';

const CourseDetailPage = () => {
  return (
    <Container>
      {/* Header Section */}
      <Title>
          <p>지역</p>
          <h1>텍스트</h1>
      </Title>

      {/* Icon Info Section */}
      <IconInfo>
          <span>👁 12,345회</span> 
          <span>❤️ 9,999</span>
      </IconInfo>

      {/* Details Section */}
      <CourseInfo>
        <div>
          <Dist />
          <span>코스 거리</span> <br />
          <span>총 00KM</span>
        </div>
        <div>
          <Map />
          <span>관광지 개수</span>
          <span>00개</span>
        </div>
        <div>
          <Difficulty />
          <span>난이도</span>
          <span>난이도</span>
        </div>
      </CourseInfo>

      {/* Description */}
      <Description>
        역사와 문화를 동시에 체험할 수 있는 특별한 관광지 코스를 소개합니다. 이 코스는 각
        지역의 고유한 매력을 살린 역사적 명소들로 구성되어 있으며, 장애인 친화적인
        시설과 서비스를 통해 모든 분들이 편리하게 즐길 수 있습니다.
      </Description>

      {/* Placeholder Section */}
      <Image src={dummy} alt={"asdf"}/>

      {/* Course Details */}
      <div>
        <CourseDetailInfo
          place="00시 00구"
          title="텍스트"
          img={dummy}
          description="관광지 설명 관광지 설명 관광지 설명 관광지 설명 관광지 설명 관광지 설명"
          icon="♿" // Replace with an actual icon or image if necessary
        />
        <CourseDetailInfo
          place="00시 00구"
          title="다른 텍스트"
          img={dummy}
          description="다른 관광지 설명 다른 관광지 설명 다른 관광지 설명 다른 관광지 설명"
          icon="♿"
        />
        <CourseDetailInfo
          place="00시 00구"
          title="다른 텍스트"
          img={dummy}
          description="다른 관광지 설명 다른 관광지 설명 다른 관광지 설명 다른 관광지 설명"
          icon="♿"
        />
      </div>

      <h2>비슷한 코스 찾아보기</h2>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <SimilarCourseCard
          image={dummy}
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
    </Container>
  );
};

export default CourseDetailPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
  color: white;
  background-color: #ccc;
  justify-content: center;
  align-items: center;
  p{
    padding: .5em;
    margin: 0;
    border-bottom: 1px solid white;
  }
`
const IconInfo = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 1em 0;
  gap: 1em;
`
const CourseInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
  padding: 20px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
`
const DefaultInfo = styled.div`
 style={{ textAlign: "center" }}
 style={{ textAlign: "center" }}
 style={{ textAlign: "center" }}
 style={{ textAlign: "center" }}
`
const Description = styled.p`
  margin: 2em 0;
  font-size: 12px;
`
const Image = styled.img`
  display: flex;
  align-self: center;
  width: 90%;
  aspect-ratio: 1 / 0.7;
  border-radius: 5px;
`