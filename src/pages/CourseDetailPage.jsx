import {React, useState} from "react";
import axios from "axios";
import styled from "styled-components";
import CourseDetailInfo from "../components/CourseDetail/CourseDetailInfo";
import SimilarCourseCard from "../components/CourseDetail/SimilarCourseCard";
import {ReactComponent as View} from '../assets/svg/CourseDetail/View.svg';
import {ReactComponent as Like} from '../assets/svg/CourseDetail/Like.svg';
import {ReactComponent as ShareButton} from '../assets/svg/ShareButton.svg';
import {ReactComponent as LikeButton} from '../assets/svg/LikeButton.svg';
import dummy from '../assets/image/dummy/dummy_img3.jpg';
import InfoIcons from "../components/TravelRoutes/InfoIcons";
import UserSatisfaction from "../components/CourseDetail/UserSatisfaction";

const initCardData = [
  {
    place: "00시 00구",
    title: "텍스트",
    img: dummy,
    description: "관광지 설명 관광지 설명 관광지 설명 관광지 설명 관광지 설명 관광지 설명",
  }, {          
    place: "00시 00구",
    title: "다른 텍스트",
    img: dummy,
    description: "다른 관광지 설명 다른 관광지 설명 다른 관광지 설명 다른 관광지 설명",    
  }, {          
    place: "00시 00구",
    title: "다른 텍스트",
    img: dummy,
    description: "다른 관광지 설명 다른 관광지 설명 다른 관광지 설명 다른 관광지 설명",    
  }
]

const CourseDetailPage = () => {
  const [cardData, setCardData] = useState(initCardData);
  return (
    <Container>
      {/* Header Section */}
      <Title>
          <p>지역</p>
          <h1>텍스트</h1>
      </Title>

      {/* Icon Info Section */}
      <Participations>
        <div>
          <span> <View /> 12,345회</span> 
          <span> <Like /> 9,999</span>
        </div>
        <div>
          <ShareButton />
          <LikeButton />
        </div>
      </Participations>


      {/* Details Section */}
      <CourseInfo>
        <InfoIcons mode="detail"/>
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
      <CardsContainer>
        <MarkerLine count={cardData.length}/>
        <Cards>
          {cardData.map((item) => 
            <CourseDetailInfo
              place={item.place}
              title={item.title}
              img={item.img}
              description={item.description}
            />
          )}
        </Cards>
      </CardsContainer>

      <h1>비슷한 코스 찾아보기</h1>

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
      <UserSatisfaction />
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
  height: 25em;
  color: white;
  background-color: #232323;
  opacity: .3;
  justify-content: center;
  align-items: center;
  p{
    padding: .5em;
    margin: 0;
    border-bottom: 1px solid white;
  }
`
const IconInfo = styled.div`
  display: inline-flex;
  justify-content: left;
  align-items: center;
  gap: 1em;
  span{
    display: flex;
    gap: 5px;
  }
`
const Participations = styled.div`
  display: inline-flex;
  justify-content: space-between;
  margin: 1em 0;

  div{
    display: flex;
    gap: 1em;
  }
  div span {
    display: flex;
    gap: 5px;
  }
  
`
const CourseInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  padding: 20px;
  border-bottom: 2px solid #ddd;
`
const Description = styled.p`
  margin: 2em 0;
`
const Image = styled.img`
  display: flex;
  align-self: center;
  width: 90%;
  aspect-ratio: 1 / 0.7;
  border-radius: 5px;
`
const CardsContainer = styled.div`
  position: relative;
`
const Cards = styled.div`
  z-index: 1;
`
const MarkerLine = styled.div`
  position: absolute;
  height: calc(100% - 160px - 86px * 2 - 17px);
  width: 0;
  border: 2px dashed #B5B9BD;
  z-index: -1;
  left: 15px;
  top: calc(80px + 86px + 8px);
  `