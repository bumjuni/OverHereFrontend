import {react, useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import axiosInstance from '../api/axios';
import dummy1 from '../assets/image/dummy/dummy_img1.jpg';
import BestCourseCard from '../components/BestCourse/BestCourseCard';
import MoreContentsButton from '../components/common/MoreContentsButton';
import getRegion from '../components/common/getRegion';

const initData = [
    {
      "courseId": 0,
      "courseType": "string",
      "title": "string",
      "briefDescription": "stringstringstringstringstringstringstringstringstrstringingstringstststringstrstringingstringstststringstrstringingstringstststringstrstringingstringstststringstrstringingstringstststringstrstringingstringstststringstrstringingstringstststringstrstringingstringstststringstrstringingstringstststringstrstringingstringstststringstrstringingstringstststringstrstringingstringstststringstrstringingstringstststringstrstringingstringstststringstrstringingstringstststringstrstringingstringstststringstrstringingstringststringstringstringstringstringstringstringringstringstringstringstringstringstring",
      "difficulty": "string",
      "distance": 0,
      "img": dummy1
    }, {
        "courseId": 0,
        "courseType": "string",
        "title": "string",
        "briefDescription": "string",
        "difficulty": "string",
        "distance": 0,
    }
];

function BestCourse(){
    const [bestCourses, setBestCourses] = useState([]);
    const [detailedCourses, setDetailedCourses] = useState([]);
    const [visibleData, setVisibleData] = useState(10);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchBestCourses = async () => {
            try {
                // 1. 먼저 베스트 코스 목록을 가져옴
                const bestRes = await axiosInstance.get('/api/v1/course/best');
                setBestCourses(...bestRes.data);

                // 2. 각 코스의 상세 정보를 가져옴
                const detailPromises = bestRes.data.map(course => 
                    axiosInstance.get(`/api/v1/course/detail?courseId=${course.courseId}`)
                );
                
                const detailResponses = await Promise.all(detailPromises);
                const detailedData = detailResponses.map(res => res.data);
                setDetailedCourses(...detailedData);
                
            } catch (err) {
                alert("베스트 코스 데이터를 가져오는데 실패했습니다.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchBestCourses();
    }, []);

    const handleMoreContents = () => setVisibleData(visibleData + 10);

    if (isLoading) {
        return <div>로딩중...</div>;
    }

    return (
        <>
            <h1>여기너머의 인기 코스</h1> 
            <StyledUl>
                {detailedCourses.slice(0, visibleData).map((item, index) => 
                    <li key={item.courseId}>
                        <BestCourseCard
                            courseId={item.courseId}
                            courseType={item.courseType}
                            title={item.title}
                            description={item.overView}
                            distance={item.distance}
                            rank={index+1}
                            region={getRegion(item.areaCode)}
                            attractions={item.touristSummary.map(tourist => tourist.title)}
                            img={item.thumbnailUrl}
                            touristSummary={item.touristSummary}
                        />
                    </li>
                )}
            </StyledUl>
            
            {visibleData >= 30 ? 
                <></> : 
                <MoreContentsButton onClick={handleMoreContents}/>
            }
        </>
    );
}

export default BestCourse;

const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style-type: none;
    word-break: break-word;
    padding: 0;
    margin: 3em 20px 20px 20px;
    `;

