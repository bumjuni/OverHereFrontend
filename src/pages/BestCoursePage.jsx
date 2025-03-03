import {react, useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import dummy1 from '../assets/image/dummy/dummy_img1.jpg';
import BestCourseCard from '../components/BestCourse/BestCourseCard';
import MoreContentsButton from '../components/common/MoreContentsButton';

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
    const data = useRef(initData);
    const [visibleData, setVisibleData] = useState(10);
    // 처음에 백엔드에서 30개 다 넘겨주고 더보기 버튼 누르면 API호출 없이 랜더링만
    useEffect(() => {
        axios.get(`/api/v1/course/best`)
            .then(res => data.current = res.data)
            .catch(err => alert("베스트 코스 데이터를 가져오는데 실패했습니다."));
    }, [])

    const handleMoreContents = () => setVisibleData(visibleData + 10);

    useEffect(() => {
        console.log(visibleData);
    }, [visibleData])
    return (
        <>
            <h1>여기너머의 인기 코스</h1> 
            <StyledUl>
                {data.current.slice(0, visibleData).map((item, index) => 
                    <li>
                    <BestCourseCard
                        courseId={item.courseId}
                        courseType={item.courseType}
                        title={item.title}
                        description={item.briefDescription}
                        distance={item.distance}
                        rank={index+1}    // 데이터 순서 => rank
                        img={item.img}
                    />
                    </li>
                )}
            </StyledUl>
            
            {visibleData>=30 ? 
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

