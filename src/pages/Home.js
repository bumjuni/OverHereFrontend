import React from 'react';
import bannerImage from '../assets/image/banner.jpg';
import Header from '../components/Header/Header';
import './Home.css';
import Card from '../components/Home/Card';
import RegionSelector from '../components/Home/RegionSelector';
import AccessibilityIcons from '../components/AccessibilityIcons';
import TourCardList from '../components/Home/TourCardList';
import GreenBorderButton from '../components/Home/GreenBorderButton';
import RoundedButton from '../components/RoundedButton';

// Array of card data
const cardData = [
  {
    title: '관광지 이름 1',
    description: '관광지 설명 1',
    image: 'https://via.placeholder.com/200x200',
  },
  {
    title: '관광지 이름 2',
    description: '관광지 설명 2',
    image: 'https://via.placeholder.com/200x200',
  },
  {
    title: '관광지 이름 3',
    description: '관광지 설명 3',
    image: 'https://via.placeholder.com/200x200',
  },
  {
    title: '관광지 이름 4',
    description: '관광지 설명 4',
    image: 'https://via.placeholder.com/200x200',
  },
];

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
  return (
    <div>
      <RoundedButton>asdf</RoundedButton>
      {/* 메인 배너 이미지 */}
      <Banner />

      <h1>실시간 인기 급상승 여행지</h1>
      <RegionSelector />

      {/* 카드 컴포넌트 */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '16px',
          padding: '20px',
        }}
      >
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>

      <div>
        <h1>나를 위한 맞춤 여행지</h1>
        <AccessibilityIcons />
        <div className="Home">
          <TourCardList />
        </div>
      </div>

      {/* 관광지 더 보러가기 버튼 */}
      <div className="home-container">
        <GreenBorderButton text="관광지 더 보러가기" />
      </div>
    </div>
  );
};

export default Home;