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

function FavCourse() {
    const page = useRef(0);
    const totalPages = useRef(0);
    const [selectedReg, setSelectedReg] = useState();
    const [selectedType, setSelectedType] = useState();
    const [data, setData] = useState([]);
    const [detailedCourses, setDetailedCourses] = useState([]);
    const [count, setCount] = useState(formatTwoDigits(0));
    
    
    const fetchFavCourse = async () => {
        try {
            // 1. 먼저 fav 코스 목록을 가져옴
            const favRes = await axiosInstance.get(`/api/v1/mypage/course/likes?page=${page.current}`);
            totalPages.current = favRes.data.totalPages;
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
                    {paging(totalPages.current, page.current) && <MoreContentsButton onClick={handleMoreContents} /> }
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