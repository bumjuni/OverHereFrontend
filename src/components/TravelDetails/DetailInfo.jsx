import {react, useState, useRef, useEffect} from 'react';
import styled from 'styled-components';
import ConvenienceIcons from './ConvenienceIcons';
import dummy1 from '../../assets/image/dummy/dummy_img3.jpg';
import dummy2 from '../../assets/image/dummy/dummy_img5.jpg';
import dummy3 from '../../assets/image/dummy/dummy_img7.jpg';
import dummy4 from '../../assets/image/dummy/dummy_img1.jpg';
import dummy5 from '../../assets/image/dummy/dummy_img2.jpg';
import dummy6 from '../../assets/image/dummy/dummy_img4.jpg';
import dummy7 from '../../assets/image/dummy/dummy_img6.jpg';
import Pictures from './Pictures';
import Modal from './Modal';
import KakaoMap from './KakaoMap';

const result = [
    {
        src: dummy1,
    }, {
        src: dummy2, 
    }, { 
        src: dummy3,
    }, {
        src: dummy4,
    }, {
        src: dummy5,
    }, {
        src: dummy6,
    }, {
        src: dummy7,
    }];

function DetailInfo(){
    const [clickedImg, setClickedImg] = useState(-1);
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Navigation>
                <a href="#상세정보"> 상세정보 </a>
                <a href="#편의시설"> 편의시설 </a>
                <a href="#갤러리"> 갤러리 </a>
                <a href="#오시는 길"> 오시는 길 </a>
            </ Navigation>

            <h2 id="상세정보"> 상세정보 </h2>
            <Indent>
                <h3> 공간 소개</h3>
                <span> 
                    후회 하고 있어요 우리 다투던 그 날 괜한 자존심 때문에 끝내자고 말을 해버린거야
                    금방 볼줄 알았어 날 찾길 바랬어 허나 며칠이 지나도 아무소식 조차 없어
                    항상내게 너무 잘해줘서 쉽게 생각했나봐 이젠 알아 내 고집때문에 힘들었던 너를
                    이 바보야 진짜아니야 아직도 나를 그렇게 몰라 너를 가진 사랑 나밖에 없는데 제발 나를 떠나가지마~~
                </span>
            </ Indent>
            <Indent>
                <h3> 이용요금 </h3>
                <span>
                    성인 1000원 <br /> 어린이 800원 <br /> 장애인, 국가유공자 무료
                </span>
            </ Indent>

            <h2 id="편의시설"> 편의시설 </h2>
            <Indent>
                <PictogramBox>
                    <ConvenienceIcons 
                        activate={[1, 1, 1, 1, 1, 0]}
                    />
                </PictogramBox>
            </Indent>
            
            <h2 id="갤러리"> 갤러리 </h2>
            <Gallery>
                {result.map((image, index) => 
                <Pictures 
                    src={image.src} 
                    index={index} 
                    onClick={(e)=>setClickedImg(e.target.id)}/> 
                )}
            </Gallery>
            {clickedImg>=0 && 
                <Modal 
                    src={result[clickedImg].src} 
                    cur={clickedImg}
                    totalPages={result.length}
                    handleClick={setClickedImg} />
            }

            <h2 id="오시는 길"> 오시는 길 </h2>
            <KakaoMap />
         </>
    );
}

export default DetailInfo;

const Navigation = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    a {
        color: black;
        font-size: 1.3em;
        font-weight: bold;
        padding: 15px 30px 15px 30px;
        border-bottom: 3px solid #FFFFFF; 
    }
    a:hover{
        color: #1A661B;
        text-decoration: none;
        border-bottom: 3px solid #1A661B;
    }
`
const Indent = styled.div`
    padding: 0 1em;
    margin-bottom: 3em;
`
const PictogramBox = styled.div`
    display: flex;
    gap: 15px;
`
const Gallery = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    flex-wrap: wrap;
    // justify-content: space-between;
`
