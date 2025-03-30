import {react, useState} from 'react';
import styled from 'styled-components';
import Badge from './common/Badge';
import {ReactComponent as ArrowDown} from '../assets/svg/ArrowDown.svg';
import {ReactComponent as Marker} from '../assets/svg/Marker.svg';
import dummyImg from '../assets/svg/dummy.svg';
import InfoIcons from './TravelRoutes/InfoIcons';
import CourseDetailInfo from './CourseDetail/CourseDetailInfo';
import { useNavigate } from 'react-router-dom';

function DropDownCard(props){
    const [clicked, setClicked] = useState(false);

    // 이미지 URL 확인 및 처리
    const getImageUrl = () => {
        if (props.img && props.img.trim() !== '') {
            return props.img;
        }
        
        // 관광지 이미지 중 첫 번째 이미지 사용 (대체 방법)
        if (props.attractions && props.attractions.length > 0 && 
            props.touristSummary && props.touristSummary.length > 0) {
            const firstTourist = props.touristSummary[0];
            if (firstTourist.imageUrl) {
                return firstTourist.imageUrl;
            }
        }
        return dummyImg;
    };


    const navigate = useNavigate();
    const toDetails = () => {
        navigate(`/course-details/${props.contentId}`);
    }

    return (
        <Container>
            <Card>
                <Image src={getImageUrl()} alt={props.title} onClick={toDetails} />
                <Wrapper>
                    <div>
                        <div>
                            <Badge text={props.region} color="gray" />      {/* 백엔드 부재 */}
                            <Badge text={`총 ${props.distance}KM`} color="gray" />
                        </div>
                        <h3 style={{margin: 0}}> {props.title} </h3>
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
                        {props.attractions && props.attractions.map((attraction) => 
                            <Attractions>
                                <Marker />
                                <Title>{attraction}</Title>
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
    width: 100%;
`
const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin:  2px 0;
    border: 1px solid #D4D8DC;
    border-radius: 3px;
    width: 100%;    
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