import {React, useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import bannerImage from '../assets/image/banner.jpg';
import './Home.css';
import Card from '../components/common/Card';
import RegionSelector from '../components/Home/RegionSelector';
import AccessibilityIcons from '../components/Home/AccessibilityIcons';
import TourCardList from '../components/Home/TourCardList';
import GreenBorderButton from '../components/Home/GreenBorderButton';
import getNonObstacleList from '../components/common/getNonObstacleList';
import getRegion from '../components/common/getRegion';

import dummy1 from '../assets/image/dummy/dummy_img3.jpg';

const nonObstacleOptions = ["HELPDOG", "PARKING", "WHEELCHAIR", "RESTROOM", "AUDIOGUIDE"];
const temp = [true, true, true, true, true];

const initCardData = [{
  "touristAttractionId": 0,
  "areaCode": 0,
  "title": "string",
  "thumbnailUrl": dummy1,
  "weeklyLikeCount": 0,
  "helpdog": true,
  "parking": true,
  "wheelchair": true,
  "restroom": true,
  "audioguide": true
},{
  "touristAttractionId": 0,
  "areaCode": 0,
  "title": "string",
  // "thumbnailUrl": dummy1,
  "weeklyLikeCount": 0,
  "helpdog": true,
  "parking": true,
  "wheelchair": true,
  "restroom": true,
  "audioguide": true
}]
const initTourData = [{
  "title": "string",
  "areaCode": 0,
  "overView": "string",
  "contentId": 0,
  "contentTypeId": 0,
  // "thumbnailUrl": "string",
  "helpdog": true,
  "parking": true,
  "wheelchair": true,
  "restroom": true,
  "audioguide": true,
  "exits": "string"
}]

// Banner Section 컴포넌트
const Banner = () => {
  return (
    <section className="banner">
      <div className="main-banner">
        <img src={bannerImage} alt="Main banner"/>
      </div>
    </section>
  );
};

const Home = () => {
  // const [cardData, setCardData] = useState(initCardData);
  // const [tourCardData, setTourCardData] = useState(initTourData);

  const cardData = useRef(initCardData);
  const tourData = useRef(initTourData);
  const [filteredCardData, setFilteredCardData] = useState(cardData.current);
  const [selectedRegion, setSelectedRegion] = useState(0); // Default selected region
  const [filteredTourData, setFilteredTourData] = useState(tourData.current);
  const [selectedIcon, setSelectedIcon] = useState(0);

  // useEffect(() => {
  //   axios.get('/api/v1/attraction/popular')
  //       .then((res) => {
  //         setCardData(res.data);
  //       })
  //       .catch((err) => {
  //         alert("Error: 실시간 인기 급상승 데이터를 불러오는 데 실패했습니다.");
  //       });

  //   for (let i = 0; i<5; i++){
  //     axios.get(`api/v1/search/non-obstacle/type=${nonObstacleOptions[i]}`)
  //         .then((res) => {
  //           setTourCardData(...res.data.contents);
  //         })
  //         .catch((err) => {
  //           alert("Error: 나를 위한 맞춤 여행지 데이터를 불러오는 데 실패했습니다");
  //         });
  //       }
  // }, []);

  useEffect(() => {
    const newCardData = cardData.current.filter((item) => item.areaCode === selectedRegion);
    setFilteredCardData(newCardData);
  }, [selectedRegion])

  useEffect(() => {
    const newTourData = tourData.current.slice(selectedIcon*6, (selectedIcon+1)*6);
    setFilteredTourData(newTourData);
  }, [selectedIcon])

  return (
    <>
      {/* 메인 배너 이미지 */}
      <Banner />
      
      <div className="contents">
        <h1>실시간 인기 급상승 여행지</h1>
        <RegionSelector selectedRegion={selectedRegion} handleClick={setSelectedRegion}/>

        {/* 카드 컴포넌트 */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '16px',
            // padding: '20px',
          }}
        >
          {filteredCardData.map((card, index) => (
            <Card
              key={index}
              contentId={card.touristAttractionId}
              title={card.title}
              region={getRegion(card.areaCode)}
              // description={card.description}
              image={card.thumbnailUrl}
              nonObstacle={getNonObstacleList(card)}  //무장애정보 리스트
            />
          ))}
        </div>
      </div>
          
      <div className="contents">
        <h1>나를 위한 맞춤 여행지</h1>
        <AccessibilityIcons selectedIcon={selectedIcon} handleClick={setSelectedIcon}/>
        <TourCardList 
          data={filteredTourData}
        />
      </div>

      {/* 관광지 더 보러가기 버튼 */}
      <Link to='/search'>
        <div className="home-container">
          <GreenBorderButton text="관광지 더 보러가기" />
        </div>
      </Link>
    </>
  );
};

export default Home;
