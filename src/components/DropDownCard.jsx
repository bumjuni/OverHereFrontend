import {react, useState} from 'react';
import styled from 'styled-components';
import Badge from './common/Badge';
import {ReactComponent as ArrowDown} from '../assets/svg/ArrowDown.svg';
import {ReactComponent as Marker} from '../assets/svg/Marker.svg';
import dummyImg from '../assets/svg/dummy.svg';
import DropDown from './SearchPage/DropDown';
import InfoIcons from './TravelRoutes/InfoIcons';
import CourseDetailInfo from './CourseDetail/CourseDetailInfo';

function DropDownCard({ data }){
    const [clicked, setClicked] = useState(false);
    const imgSrc = data.image? data.image : dummyImg;

    return (
        <Container>
            <Card>
                <Image src={imgSrc} alt={data.title} />
                <Wrapper>
                    <div>
                        <div>
                            <Badge text="지역 00시" color="gray" />      {/* 백엔드 부재 */}
                            <Badge text={`총 ${data.distance}KM`} color="gray" />
                        </div>
                        <h3 style={{margin: 0}}> {data.title} </h3>
                    </div>
                    <DropDownButton onClick={() => (setClicked(!clicked))}> <ArrowDown /> </DropDownButton>
                </Wrapper>
            </Card> 
            {clicked && 
                <DropDownPosition>
                    <Details>
                        <IconWrapper>
                            <InfoIcons />
                        </IconWrapper>
                        {data.attractions.map((item) => 
                            <Attractions>
                                <Marker />
                                <Title>{item.title}</Title>
                            </Attractions>
                        )}
                        <MarkerLine />
                    </Details>
                </DropDownPosition>
            }
        </Container>
    );
}

export default DropDownCard;

const Container = styled.div`
    // display: flex;
    // flex-direction: column;
    align-items: center;
    // flex-wrap: wrap;
    // width: calc((100% - 1em) / 2);
    gap: 1em;
    transition: height 0.3s ease-in-out;
    overflow: hidden;

`
const Image = styled.img`
    object-fit: cover;
    width: 100%;
    aspect-ratio: 5 / 3;
    border-radius: 3px;
`
const Card = styled.div`
    // position: relative;
    border: 1px solid #D4D8DC;
    border-radius: 3px;
    padding: 1.5em;
    width: calc(100% - 3em);
`
const Wrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-top: 1em;
`
const DropDownButton = styled.button`
    border: none;
    background-color: unset;
    cursor: pointer;
`
const DropDownPosition = styled.div`
    position: relative;
    overflow: hidden;
    grid-row: span 2;
    // width: 100%;
`
const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin:  2px 0;
    border: 1px solid #D4D8DC;
    border-radius: 3px;
    // width: 100%;    
    // animation: smoothEmerge 2s ease-in-out;
    max-height: 0;
    transition: max-height 0.3s ease-in-out;
    overflow: hidden;
    
    @keyframes smoothEmerge {
        from {transform: translateY(-100%);}
        to {transform: translateY(0);}
    }
`
const IconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 1em 2em .5em 2em;
    color: #0F4E15;
    font-size: small;
`
const Attractions = styled.div`
    display: flex;
    align-items: center;
    margin: .7em 2em;
`
const MarkerLine = styled.div`
    position: absolute;
    height: calc(100% - (4.5em + 65px) - 15px - 1em);
    width: 0;
    border-left: 2px dashed #B5B9BD;
    z-index: -1;
    left: calc(2em + 16px);
    top: calc(1.5em + 65px + 1em + 1.5em + 15px);
`
const Title = styled.span`
    padding-left: 1em;
    color: #505458;
`