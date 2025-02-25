import {react, useEffect} from 'react';
import styled from 'styled-components';
import dummy1 from '../assets/image/dummy/dummy_img1.jpg';
import dummy2 from '../assets/image/dummy/dummy_img2.jpg';
import dummy3 from '../assets/image/dummy/dummy_img3.jpg';
import dummy4 from '../assets/image/dummy/dummy_img4.jpg';
import dummy5 from '../assets/image/dummy/dummy_img5.jpg';
import dummy6 from '../assets/image/dummy/dummy_img6.jpg';
import dummy7 from '../assets/image/dummy/dummy_img7.jpg';
import BestCourseCard from '../components/BestCourse/BestCourseCard';
import MoreContentsButton from '../components/common/MoreContentsButton';

const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style-type: none;
    padding: 0;
    margin: 3em 20px 20px 20px;
    `;

const Divider = styled.div`
    border: 1px solid #D4D8DC;
    margin: 2.5em 0;
`

function BestCourse(){
    const result = [
    {
        rank: '01',
        img: dummy1,
        name: 'first'
    },
    {
        rank: '02',
        img: dummy2,
        name: 'second'
    },{
        rank: '03',
        img: dummy3,
        name: 'third'
    }
    ];

    const BestCourseList = result.map(course =>
        <li>
            <BestCourseCard
                rank={course.rank}
                img={course.img}
                name={course.name}
            />
            <Divider />
        </li>
    )

    return (
        <>
            <h1>여기너머의 인기 코스</h1> 
            <StyledUl>{BestCourseList}</StyledUl>
            <MoreContentsButton />
        </>
    );
}

export default BestCourse;

