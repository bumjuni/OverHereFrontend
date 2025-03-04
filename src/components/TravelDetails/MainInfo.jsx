import react from 'react';
import styled from 'styled-components';
import dummy from '../../assets/image/dummy/dummy_img4.jpg';
import {ReactComponent as Call} from '../../assets/svg/TravelDetails/Call.svg';
import {ReactComponent as Time} from '../../assets/svg/TravelDetails/Time.svg';
import {ReactComponent as Website} from '../../assets/svg/TravelDetails/Website.svg';
import {ReactComponent as Destination} from '../../assets/svg/TravelDetails/Destination.svg';
import {ReactComponent as Likes} from '../../assets/svg/TravelDetails/Likes.svg';
import {ReactComponent as Share} from '../../assets/svg/TravelDetails/Share.svg';
import Badge from '../common/Badge';
import PictogramIcons from '../common/PictogramIcons';


function MainInfo(){
    return (
        <>
            <ParticipationInfo>
                <span> 🚩 12,345회 </span>
                <span> 🚩 9,999 </span>
            </ParticipationInfo>

            <Container>

                <InfoBox>
                    <Badges>
                        <Badge text="관광지 유형" color="green" />
                    </Badges>
                    <h2> 관광지 이름 </h2>
                    <span> <Destination /> 00구 00로 00길 </span>
                    <span> <Call /> 010-0000-0000 </span>
                    <span> <Website /> abc.ac.kr </span>
                    <span style={{alignItems:"start"}}> <Time /> 00:00 ~ 00:00 <br /> 공휴일 휴무 </span>

                    <h3> 무장애 편의정보 </h3>
                    <PictogramBox>
                        <PictogramIcons shape="square"/>
                    </PictogramBox>
                </InfoBox>

                <ImageBox>
                    <Image src={dummy} alt="asdf"/>
                    <ParticipationButtons>
                        <button> <Likes /> </button>
                        <button> <Share /> </button>
                    </ParticipationButtons>
                </ImageBox>
            </Container>
        </>
    );
}

export default MainInfo;

const ParticipationInfo = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: .5em 1em;
`
const Container = styled.div`
    display: flex;
    flex-direction: row;    
    padding: 0 1em;
    justify-content: space-between;
`
const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100% - 35em);
    gap: 7px;
    span {
        display: flex;
        align-items: center;
        gap: 10px;
    }
`
const Badges = styled.div`
    display: inherit;
`
const PictogramBox = styled.div`
    display: flex;
    gap: 15px;
`
const ImageBox = styled.div`
    display: flex;
    flex-direction: column;
`
const Image = styled.img`
    width: 35em;
    aspect-ratio: 3 / 2;    
    border-radius: 7em 0 0 0;
    object-fit: cover;
`
const ParticipationButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: .5em 0;
    button {
        border: none;
        background-color: unset;
    }
    
`