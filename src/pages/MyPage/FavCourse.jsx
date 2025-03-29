import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import axiosInstance from "../../api/axios";
import SideBar from "../../components/MyPage/SideBar";
import DropDown from "../../components/SearchPage/DropDown";
import Card from "../../components/common/Card";
import getRegion from "../../components/common/getRegion";
import getNonObstacleList from "../../components/common/getNonObstacleList";
import paging from "../../components/common/paging";
import MoreContentsButton from "../../components/common/MoreContentsButton";
import BestCourseCard from "../../components/BestCourse/BestCourseCard";
import formatTwoDigits from '../../components/common/formatTwoDigits';

const region = ['서울', '경기도', '충청도', '강원도', '전라도', '경상도', '제주'];
const type = ['자연 속 휴식', '액티비티', '체험 여행', '역사 탐방', '핫플 모음', '가족 여행', '커플 여행'];

const responseExample = {
    "totalPages": 0,
    "contents": [
      {
        "courseId": 0,
        "courseType": "string",
        "title": "string",
        "briefDescription": "string",
        "overView": "string",
        "difficulty": "string",
        "distance": 0
      }
    ]
  };
  const responseExampleDetail = {
    "courseId": 0,
    "courseType": "string",
    "likeNumber": 0,
    "title": "string",
    "overView": "string",
    "difficulty": "string",
    "distance": 0,
    "touristSummary": [
      {
        "touristId": 0,
        "title": "string",
        "detailInfo": "string",
        "imageUrl": "string",
        "nonObstacleInfo": {
          "id": 0,
          "touristAttraction": {
            "id": 0,
            "nonObstacleInfo": "string",
            "galleries": [
              {
                "id": 0,
                "touristAttraction": "string",
                "imageUrl": "string"
              }
            ],
            "nonObstacleInfoList": [
              {
                "id": 0,
                "touristAttraction": "string",
                "course": {
                  "id": 0,
                  "courseType": "string",
                  "title": "string",
                  "briefDescription": "string",
                  "overview": "string",
                  "difficulty": "string",
                  "courseLikes": [
                    {
                      "id": 0,
                      "user": "string",
                      "course": "string",
                      "createdAt": "2025-03-29T11:14:40.987Z"
                    }
                  ],
                  "touristAttractionCourses": [
                    "string"
                  ],
                  "distance": 0
                },
                "orders": 0
              }
            ],
            "detailInfo": {
              "id": 0,
              "useTime": "string",
              "useFee": "string",
              "stroller": true,
              "elevator": true,
              "lactationroom": true,
              "signguide": true,
              "braileblock": true,
              "guidehuman": true
            },
            "likes": [
              {
                "id": 0,
                "user": {
                  "id": 0,
                  "email": "string",
                  "nickname": "string",
                  "password": "string",
                  "likes": [
                    "string"
                  ],
                  "courseLikes": [
                    {
                      "id": 0,
                      "user": "string",
                      "course": "string",
                      "createdAt": "2025-03-29T11:14:40.987Z"
                    }
                  ],
                  "role": "string",
                  "provider": "string",
                  "providerId": "string"
                },
                "touristAttraction": "string",
                "createdAt": "2025-03-29T11:14:40.987Z"
              }
            ],
            "contentId": 0,
            "contentTypeId": 0,
            "areaCode": 0,
            "cat1": "string",
            "cat2": "string",
            "cat3": "string",
            "thumbnail1": "string",
            "thumbnail2": "string",
            "title": "string",
            "tel": "string",
            "address1": "string",
            "address2": "string",
            "view": 0,
            "homepage": "string",
            "mapx": 0,
            "mapy": 0,
            "sigungucode": "string",
            "overview": "string"
          },
          "helpdog": true,
          "parking": true,
          "wheelchair": true,
          "restroom": true,
          "audioguide": true,
          "exits": "string"
        }
      }
    ]
  };

function FavCourse() {
    const page = useRef(0);
    const [selectedReg, setSelectedReg] = useState();
    const [selectedType, setSelectedType] = useState();
    const [data, setData] = useState(responseExample);
    const [detailedCourses, setDetailedCourses] = useState([]);
    const [count, setCount] = useState(formatTwoDigits(0));
    
    
    const fetchFavCourse = async () => {
        try {
            // 1. 먼저 fav 코스 목록을 가져옴
            const favRes = await axiosInstance.get(`/api/v1/mypage/course/likes?page=${page.current}`);
            setData(...favRes.data.contents);

            // 2. 각 코스의 상세 정보를 가져옴
            const detailPromises = favRes.data.map(course => 
                axiosInstance.get(`/api/v1/course/detail?courseId=${course.courseId}`)
            );
            
            const detailResponses = await Promise.all(detailPromises);
            const detailedData = detailResponses.map(res => res.data);
            setDetailedCourses(...detailedData);
            
        } catch (err) {
            alert(`${err.code}: 코스 즐겨찾기 데이터를 불러오는 데 실패했습니다.`);
        }
    };
    const fetchCounts = async () => {
        try{
            const res = await axiosInstance.get(`/api/v1/likes/courses`);
            setData(res.length);
        } catch (err) {
            console.log(err);
            alert(`${err.code}: 코스 즐겨찾기 개수를 불러오는데 실패했습니다.`);
        };    }

    useEffect(() => {
        fetchFavCourse();
        fetchCounts();
    }, []);

    const handleMoreContents = () => {
        page.current += 1;
        fetchFavCourse();
    }

    
    return (
        <Container>
            <SideBar />
            <Contents>
                <h3>여행코스 즐겨찾기</h3>
                <SearchGroup>
                    <DropDownGroup>
                        <DropDown 
                                title={selectedReg || '지역'} data={region} onChange={setSelectedReg}
                        />
                        <DropDown 
                            title={selectedType || '코스테마'} data={type} onChange={setSelectedType}
                        />
                    </DropDownGroup>
                    <p>총 <Stressed>{formatTwoDigits(count)}</Stressed>개</p>
                </SearchGroup>

                <StyledUl>
                {detailedCourses.map((item, index) => 
                    <li key={item.courseId}>
                        <BestCourseCard
                            courseId={item.courseId}
                            courseType={item.courseType}
                            title={item.title}
                            description={item.overView}
                            distance={item.distance}
                            rank={index+1}
                            region={item.region}
                            attractions={item.touristSummary.map(tourist => tourist.title)}
                            img={item.thumbnailUrl}
                            touristSummary={item.touristSummary}
                        />
                    </li>
                )}
            </StyledUl>
                <ButtonWrapper>
                    {paging(data.totalPages, page.current) && <MoreContentsButton onClick={handleMoreContents} /> }
                </ButtonWrapper>

            </Contents>


        </Container>
    )
}
export default FavCourse;

const Container = styled.div`
    display: flex;
    flex-direction: row;
`
const Contents = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100% - 18em);
    margin-bottom: 2em;
`
const SearchGroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center
    gap: 16px;
` 
const DropDownGroup = styled.div`
    display: flex;
    gap: 12px;
`
const Stressed = styled.span`
    font-weight: bold;
    color: #529B40;
`
const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style-type: none;
    word-break: break-word;
    padding: 0;
    margin: 3em 20px 20px 20px;
`;

const ButtonWrapper = styled.div`
    margin-top: 7em;
`