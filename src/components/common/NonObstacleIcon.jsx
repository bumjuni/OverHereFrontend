import React from 'react';
import styled from 'styled-components';
import {ReactComponent as HelpDog} from '../../assets/svg/Accessibility/HelpDog_Pictogram.svg';
import {ReactComponent as AudioGuide} from '../../assets/svg/Accessibility/AudioGuide_Pictogram.svg';
import {ReactComponent as Toilet} from '../../assets/svg/Accessibility/Toilet_Pictogram.svg';
import {ReactComponent as WheelChair} from '../../assets/svg/Accessibility/WheelChair_Pictogram.svg';
import {ReactComponent as ParkingLot} from '../../assets/svg/Accessibility/ParkingLot_Pictogram.svg';

const icon = [
    <HelpDog width="50" height="50"/>, 
    <AudioGuide width="50" height="50"/>,
    <Toilet width="50" height="50"/>,
    <WheelChair width="50" height="50"/>, 
    <ParkingLot width="50" height="50"/>
]

//data로 들어오는 것은 boolean 5개
function NonObstacleIcon({ data }) {
    return (
        <Container>
            {data.map((bool, index) => (
                bool && 
                <IconWrapper>
                    {icon[index]}    
                </IconWrapper>
            ))}
        </Container>
    );
}

export default NonObstacleIcon;

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    flex-direction: row;
    gap: .4em;
    margin: .5em 0;
`
const IconWrapper = styled.div`
    background-color: #85B8D0;
    width: 2.5em;
    height: 2.5em;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    svg path {
     fill: #FCFCFD
    }

`