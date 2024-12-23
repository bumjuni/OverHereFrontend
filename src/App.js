import React from 'react';
import bannerImage from './assets/image/banner.jpg';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';
import Card from './components/Card';
import TouristSpotCard from "./components/TouristSpotCard"; // TouristSpotCard 컴포넌트 불러오기
import RegionSelector from "./components/RegionSelector";
import AccessibilityIcons from "./components/AccessibilityIcons";
import TourCardList from './components/TourCardList';

// Array of card data
const cardData = [
  {
    title: "관광지 이름 1",
    description: "관광지 설명 1",
    image: "https://via.placeholder.com/200x200", // Replace with actual image URLs
  },
  {
    title: "관광지 이름 2",
    description: "관광지 설명 2",
    image: "https://via.placeholder.com/200x200",
  },
  {
    title: "관광지 이름 3",
    description: "관광지 설명 3",
    image: "https://via.placeholder.com/200x200",
  },
  {
    title: "관광지 이름 4",
    description: "관광지 설명 4",
    image: "https://via.placeholder.com/200x200",
  },
];

// Banner Section 컴포넌트
const Banner= () => {
  return (
    <section className="banner">
      <div className="main-banner">
        <img src={bannerImage} alt="Main banner" />
      </div>
    </section>
  );
};

// App 컴포넌트
const App = () => {
  const sampleTags = ['텍스트', '텍스트'];
  const sampleTitle = '코스 이름';

  const sampleData = {
    image: '', // 이미지 URL (비어있으면 플레이스홀더 사용)
    location: '00시 00구',
    title: '관광지 이름',
    description: '관광지 설명 관광지 설명 관광지 설명 관광지 설명 관광지 설명',
    accessibilityIcon: 'https://via.placeholder.com/24' // 접근성 아이콘 URL
  };

  return (
    
    
    <Router>
      <div>
        {/* 헤더 */}
        <Header />

        {/* 메인 배너 이미지 */}
        <Banner />

        <h1>실시간 인기 급상승 여행지</h1>
      <RegionSelector />

      <div>
      <h1>나를 위한 맞춤 여행지</h1>
      <AccessibilityIcons /> 

      <div className="App">
      <TourCardList />
    </div>
    </div>

      <div

      
         /*카드 컴포넌트 시작*/
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "16px",
          padding: "20px",
      }}
    >
      
      {cardData.map((card, index) => (
        <Card
          key={index} // 각 카드의 키
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
    
    </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      {/* <CourseCard tags={sampleTags} title={sampleTitle} /> */}
    </div>
        
        {/* 관광지 선택, 여행코스용 라우터
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/tourist-destinations" element={<TouristDestinations />} />
          <Route path="/travel-routes" element={<TravelRoutes />} />
        </Routes> */}
      </div>


  
    </Router>

    
  );
};

export default App;
