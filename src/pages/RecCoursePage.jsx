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

const dummy = [dummy1, dummy2, dummy3, dummy4, dummy5, dummy6, dummy7];

const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5%;
`

function RecCoursePage(){
    return (
        <>
            <h1> 원하는 코스 찾기 </h1>
            {/* searchOptions -> 추후 SearchPage에서 pr 후 구현 */}
            <CardList>
                {dummy.map((item) => <DropDownCard src={item} alt={"asdf"} />)} 
            </CardList>
        </>
    );
}

export default RecCoursePage;