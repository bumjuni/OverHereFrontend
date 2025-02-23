import react from 'react';
import styled from 'styled-components';
import DropDownCard from '../components/DropDownCard';
import dummy1 from '../assets/image/dummy/dummy_img1.jpg';
import dummy2 from '../assets/image/dummy/dummy_img2.jpg';
import dummy3 from '../assets/image/dummy/dummy_img3.jpg';
import dummy4 from '../assets/image/dummy/dummy_img4.jpg';
import dummy5 from '../assets/image/dummy/dummy_img5.jpg';
import dummy6 from '../assets/image/dummy/dummy_img6.jpg';
import dummy7 from '../assets/image/dummy/dummy_img7.jpg';
import SearchGroup from '../components/SearchPage/SearchGroup';

const dummy = [dummy1, dummy2, dummy3, dummy4, dummy5, dummy6, dummy7];

const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2em 1em;
    margin: 2em 0;
    `

function RecCoursePage(){
    return (
        <>
            <h2> 원하는 코스 찾기 </h2>
            <SearchGroup />
            <CardList>
                {dummy.map((item) => <DropDownCard src={item} alt={"asdf"} />)} 
            </CardList>
        </>
    );
}

export default RecCoursePage;