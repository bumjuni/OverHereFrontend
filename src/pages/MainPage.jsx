import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Header/Header.css';
import RegionButtons from '../components/RegionButton'; // 이름 수정


const MainPage = () => {
    return (
      <div>
        <section className="popular-destinations">
          <h1>지금 가장 사랑받는 여행지</h1> 
          
        <div>
          <RegionButtons />
        </div>
          <div className="destination-list">
            <div className="destination-card">
              <h4>관광지 이름</h4>
              <p>관광지 설명</p>
              <div className="accessibility-icons">
                <span>🦽</span>
                <span>🦮</span>
                <span>♿</span>
                <span>🚻</span>
              </div>
            </div>
            
          </div>
        </section>
        <section className="custom-features">
          <h3>나를 위한 맞춤 여행지를 찾아봐요!</h3>
          <div className="features-list">
            <div className="feature">
              <img src="path/to/icon1.png" alt="안내견 동반" />
              <p>안내견 동반</p>
            </div>
            <div className="feature">
              <img src="path/to/icon2.png" alt="음성 가이드" />
              <p>음성 가이드</p>
            </div>
            <div className="feature">
              <img src="path/to/icon3.png" alt="휠체어 이동" />
              <p>휠체어 이동</p>
            </div>
            <div className="feature">
              <img src="path/to/icon4.png" alt="장애인 화장실" />
              <p>장애인 화장실</p>
            </div>
            <div className="feature">
              <img src="path/to/icon5.png" alt="장애인 주차장" />
              <p>장애인 주차장</p>
            </div>
          </div>
        </section>
      </div>
    );
  };

  export default MainPage;