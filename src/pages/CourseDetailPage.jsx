import {React, useState, useEffect} from "react";
import axiosInstance from '../api/axios';
import styled from "styled-components";
import CourseDetailInfo from "../components/CourseDetail/CourseDetailInfo";
import SimilarCourseCard from "../components/CourseDetail/SimilarCourseCard";
import {ReactComponent as View} from '../assets/svg/CourseDetail/View.svg';
import {ReactComponent as Like} from '../assets/svg/CourseDetail/Like.svg';
import {ReactComponent as ShareButton} from '../assets/svg/ShareButton.svg';
import {ReactComponent as LikeButton} from '../assets/svg/LikeButton.svg';
import dummy from '../assets/svg/dummy.svg';
import InfoIcons from "../components/TravelRoutes/InfoIcons";
import UserSatisfaction from "../components/CourseDetail/UserSatisfaction";
import { useParams } from 'react-router-dom';

const initData = {
  courseId: 0,
  courseType: "string",
  likeNumber: 9999,
  title: "텍스트",
  overView: "역사와 문화를 동시에 체험할 수 있는 특별한 관광지 코스를 소개합니다. 이 코스는 각 지역의 고유한 매력을 살린 역사적 명소들로 구성되어 있으며, 장애인 친화적인 시설과 서비스를 통해 모든 분들이 편리하게 즐길 수 있습니다.",
  difficulty: "string",
  distance: 0,
  touristSummary: [
    {
      touristId: 0,
      title: "string",
      detailInfo: "string",
      imageUrl: "string",
      place: "백엔드 부재" ,
      nonObstacleInfo: {helpdog: true, parking: true, wheelchair: true, restroom: true, audioguide: true}
    }, {          
      place: "00시 00구",
      title: "다른 텍스트",
      imgUrl: dummy,
      detailInfo: "다른 관광지 설명 다른 관광지 설명 다른 관광지 설명 다른 관광지 설명",    
      nonObstacleInfo: {helpdog: true, parking: true, wheelchair: true, restroom: true, audioguide: false}
    }, {          
      place: "00시 00구",
      title: "다른 텍스트",
      imgUrl: dummy,
      detailInfo: "다른 관광지 설명 다른 관광지 설명 다른 관광지 설명 다른 관광지 설명",    
      nonObstacleInfo: {helpdog: true, parking: false, wheelchair: false, restroom: false, audioguide: true}
    }
  ]
}
const initSimilarData = [
  {
    region: "지역",
    type: "코스 유형",
    title: "텍스트",
    description: "코스 설명 글 코스 설명 글 코스 설명 글 코스 설명 글 코스 설명 글"
  },  {
    region: "지역",
    type: "코스 유형",
    title: "텍스트",
    description: "코스 설명 글 코스 설명 글 코스 설명 글 코스 설명 글 코스 설명 글"
  }
]

const CourseDetailPage = () => {
  const { courseId } = useParams();
  // API연결 후 더미이미지 작업
  const [data, setData] = useState(initData);
  const [simData, setSimData] = useState(initSimilarData);  // API 없음
  
  useEffect(() => {
    axiosInstance.get(`/api/v1/course/detail?courseId=${courseId}`)
      .then(res => setData(res.data))
      .catch(err => alert(`코스 상세 데이터를 불러오는데 실패했습니다`));
  }, [courseId])

  return (
    <Container>
      {/* Header Section */}
      <Title>
          <p>{data.areaCode}</p>       {/* 백엔드 부재 */}
          <h1>{data.title}</h1>
      </Title>

      {/* Icon Info Section */}
      <Participations>
        <div>
          <span> <View /> {data.view}</span> 
          <span> <Like /> {data.likeNumber.toLocaleString()}</span>
        </div>
        <div>
          <ShareButton />
          <LikeButton />
        </div>
      </Participations>


      {/* Details Section */}
      <CourseInfo>
        <InfoIcons mode="detail" distance={data.distance} count={data.touristSummary.length} difficulty={data.difficulty}/>
      </CourseInfo>

      {/* Description */}
      <Description>
        {data.overView}
      </Description>

      {/* Placeholder Section */}     {/*백엔드 부재*/}
      <Image src={data.thumbnailUrl || dummy} alt={data.title}/>

      {/* Course Details */}
      <CardsContainer>
        <MarkerLine />
        <Cards>
          {data.touristSummary.map((item) => 
            <CourseDetailInfo
              key={item.touristId}
              contentId={item.touristId}
              place={item.place}
              title={item.title}
              img={item.imageUrl || dummy}
              description={item.detailInfo}
              nonObstacle={[
                item.nonObstacleInfo?.helpdog || false,
                item.nonObstacleInfo?.audioguide || false,
                item.nonObstacleInfo?.wheelchair || false,
                item.nonObstacleInfo?.restroom || false,
                item.nonObstacleInfo?.parking || false
              ]}
            />
          )}
        </Cards>
      </CardsContainer>

      {/* 백엔드 구현이 불가하여 폐기한 기능 */}
      {/* <h1>비슷한 코스 찾아보기</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {simData.map((item) => 
          <SimilarCourseCard 
            image={item.image}
            region={item.region}
            type={item.type}
            title={item.title}
            description={item.description}
          />

        )}
      </div>
      <UserSatisfaction /> */}
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
  aspect-ratio: 1 / 0.55;
  border-radius: 5px;
  object-fit: cover;
`
const CardsContainer = styled.div`
  position: relative;
`
const Cards = styled.div`
  z-index: 1;
`
const MarkerLine = styled.div`
  position: absolute;
  height: calc(100% - 21em);
  width: 0;
  border-left: 2px dashed #B5B9BD;
  z-index: -1;
  left: 16px;
  top: 11em;
  `