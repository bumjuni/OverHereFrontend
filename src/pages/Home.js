import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import bannerImage from '../assets/image/banner.jpg';
import './Home.css';
import Card from '../components/Home/Card';
import RegionSelector from '../components/Home/RegionSelector';
import AccessibilityIcons from '../components/AccessibilityIcons';
import TourCardList from '../components/Home/TourCardList';
import GreenBorderButton from '../components/Home/GreenBorderButton';

// Array of card data
// const cardData = [
//   {
//     title: '관광지 이름 1',
//     description: '관광지 설명 1',
//     image: 'https://via.placeholder.com/200x200',
//   },
//   {
//     title: '관광지 이름 2',
//     description: '관광지 설명 2',
//     image: 'https://via.placeholder.com/200x200',
//   },
//   {
//     title: '관광지 이름 3',
//     description: '관광지 설명 3',
//     image: 'https://via.placeholder.com/200x200',
//   },
//   {
//     title: '관광지 이름 4',
//     description: '관광지 설명 4',
//     image: 'https://via.placeholder.com/200x200',
//   },
// ];

// Banner Section 컴포넌트
const Banner = () => {
  return (
    <section className="banner">
      <div className="main-banner">
        <img src={bannerImage} alt="Main banner" width="100%"/>
      </div>
    </section>
  );
};

const Home = () => {
  const [cardData, setCardData] = useState([]);
  const [tourCardData, setTourCardData] = useState([]);

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/typicode/demo/posts')
        .then((res) => {
          setCardData(res.data);
        })
        .catch((err) => {
          alert("Error: 실시간 인기 급상승 데이터를 불러오는 데 실패했습니다.");
        });
    
    axios.get('https://my-json-server.typicode.com/typicode/demo/posts')
        .then((res) => {
          setTourCardData(res.data);
        })
        .catch((err) => {
          alert("Error: 나를 위한 맞춤 여행지 데이터를 불러오는 데 실패했습니다");
        });
  }, []);

  return (
    <>
      {/* 메인 배너 이미지 */}
      <Banner />
      
      <div className="contents">
        <h2>실시간 인기 급상승 여행지</h2>
        <RegionSelector />

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
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              // description={card.description}
              image={card.image}
              nonObstacle={card.nonObstacle}  //무장애정보 리스트
            />
          ))}
        </div>
      </div>
          
      <div className="contents">
        <h2>나를 위한 맞춤 여행지</h2>
        <AccessibilityIcons />
        <TourCardList 
          data={tourCardData}
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
