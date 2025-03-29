//svg생성
//보이랑 버튼 정렬 맞추기
//프로그래스바랑 버튼 세로로

import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axios';  // axiosInstance import
import { Link } from 'react-router-dom';
import './TravelRoutesPage.css';
import imgBoy from "../assets/image/img_boy.jpg";
import imgGirl from "../assets/image/img_girl.jpg";
import EditorPick from '../components/TravelRoutes/EditorPick';
import MainCourse from '../components/TravelRoutes/MainCourse';

const course_data = [
  {
    "region": "region1",
    "courseType": "courseType1",
    "title": "title1",
    "courseInfo": {
      "distance": "37",
      "number": "3",
      "difficulty": "상",
    },
  },
  {
    "region": "region2",
    "courseType": "courseType2",
    "title": "title2",
    "courseInfo": {
      "distance": "33247",
      "number": "332",
      "difficulty": "중",
    },
  },
  {
    "region": "region3",
    "courseType": "courseType3",
    "title": "title3",
    "courseInfo": {
      "distance": "327",
      "number": "30",
      "difficulty": "하",
    },
  },
]

const pick_data = [
  {
    "region": "region1",
    "courseType": "courseType1",
    "title": "title1",
    "description": "description1description1description1description1descr1description1description1description1descr1",
    "attractions": ["attracion1", "attracion2", "attracion3", "attracion4", "attracion5"],
  },
  {
    "region": "region2",
    "courseType": "courseType2",
    "title": "title2",
    "description": "description2description2description2description2description2description2description2",
    "attractions": ["attracion2", "attracion3", "attracion4", "attracion5"],
  },
  {
    "region": "region3",
    "courseType": "courseType3",
    "title": "title3",
    "description": "description3description3description3description3description3description3description3",
    "attractions": ["attracion3", "attracion4", "attracion5"],
  },
];

const TravelRoutesPage = () => {
  const [courseData, setCourseData] = useState([]);
  const [recCourseData] = useState(pick_data); // 더미데이터로 초기화하고 변경하지 않음
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const popularRes = await axiosInstance.get('/api/v1/course/popular');
        setCourseData(popularRes.data);
      } catch (err) {
        alert("코스 정보를 불러오는 데 실패했습니다");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  return (
    <div className="travel-routes">
      <MainCourse data={courseData}/>

      <div className="recommend-section">
        <div className="recommend-card green-card">
          <h2>베스트 코스 찾기</h2>
          <p className="description">
            여기너머에서 인기가 많은 코스를 함께 찾아봐요. 자연 경관과 즐길거리 모두 포함한 좋은 코스들이 있습니다!
          </p>
          <img src={imgBoy} alt="icon_boy" height="150" className="recommend-image" />
          <Link to='/best-course'>
            <button className="recommend-button green">
              바로 가기 <span className="arrow">→</span>
            </button>
          </Link>
        </div>

        <div className="recommend-card blue-card">
          <h2>지역별 추천 코스</h2>
          <p className="description">
            지역별로 코스를 추천받아요! 또한 원하는 코스를 찾아볼 수 있습니다.
          </p>
          <img src={imgGirl} alt="icon_girl" height="150" className="recommend-image" />
          <Link to='/recommend-course'>
            <button className="recommend-button blue">
              바로 가기 <span className="arrow">→</span>
            </button>
          </Link>
        </div>
      </div>

      <h1 className="editor-pick">에디터 추천 픽 코스</h1>
      <EditorPick data={recCourseData}/>
    </div>
  );
};
   

export default TravelRoutesPage;
