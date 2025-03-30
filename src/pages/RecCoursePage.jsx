import {react, useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import axiosInstance from '../api/axios';
import DropDown from '../components/SearchPage/DropDown';
import formatTwoDigits from '../components/common/formatTwoDigits';
import DropDownCard from '../components/DropDownCard';
import RefreshButton from '../components/SearchPage/RefreshButton';
import paging from '../components/common/paging';
import MoreContentsButton from '../components/common/MoreContentsButton';
import getRegion from '../components/common/getRegion';

const region = ['서울', '경기도', '충청도', '강원도', '전라도', '경상도', '제주'];
const type = ['자연 속 휴식', '액티비티', '체험 여행', '역사 탐방', '핫플 모음', '가족 여행', '커플 여행'];

function RecCoursePage(){
    const page = useRef(0);
    const [selectedReg, setSelectedReg] = useState();
    const [selectedType, setSelectedType] = useState();
    const [courseList, setCourseList] = useState([]);
    const [detailedCourse, setDetailedCourse] = useState([]);

    const fetchCourse = async () => {
        try {
            // 1. 먼저 코스 목록을 가져옴
            const response = await axiosInstance.get(`/api/v1/course/recommend/areacode?areacode=${selectedReg}&courseType=${selectedType}`);
            setCourseList(...response.data);

            // 2. 각 코스의 상세 정보를 가져옴
            const detailPromises = response.data.map(course => 
                axiosInstance.get(`/api/v1/course/detail?courseId=${course.courseId}`)
            );
            
            const detailResponses = await Promise.all(detailPromises);
            const detailedData = detailResponses.map(res => res.data);
            setDetailedCourse(...detailedData);
            
        } catch (err) {
            alert("코스 데이터를 가져오는데 실패했습니다.");
        }
    };

    const handleMoreContents = () => {
        page.current += 1;
        fetchCourse();
    }

    useEffect(() => {
        setCourseList([]);
        setDetailedCourse([]);
        fetchCourse();
    }, [selectedReg, selectedType]);

    return (
        <>
            <h1> 원하는 코스 찾기 </h1>
            <SearchGroup>
                <RefreshButton />
                <DropDown 
                        title={selectedReg || '지역'} data={region} onChange={setSelectedReg}
                />
                <DropDown 
                    title={selectedType || '유형'} data={type} onChange={setSelectedType}
                />
            </SearchGroup>
            <CardList>
                {detailedCourse.map((item) => 
                    <DropDownCard 
                        courseId={item.courseId}
                        title={item.title}
                        distance={item.distance}
                        region={getRegion(item.areaCode)}
                        attractions={item.touristSummary.map(tourist => tourist.title)}
                        img={item.thumbnailUrl}
                        touristSummary={item.touristSummary}
                    />)} 
            </CardList>
            <ButtonWrapper>
                {paging(courseList.totalPages, page.current) && <MoreContentsButton onClick={handleMoreContents} /> }
                {/* 페이징 없음 */}
            </ButtonWrapper>
        </>
    );
}

export default RecCoursePage;

const CardList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2em 1em;
    margin: 2em 0;
    `
const SearchGroup = styled.div`
    display: flex;
    justify-content: right;
    gap: 12px;
`
const ButtonWrapper = styled.div`
    margin-top: 7em;
`