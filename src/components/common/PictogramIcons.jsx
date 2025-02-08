import react from 'react';
import styled from 'styled-components';
import {ReactComponent as HelpDog} from '../../assets/svg/HelpDog.svg';
import {ReactComponent as AudioGuide} from '../../assets/svg/AudioGuide.svg';
import {ReactComponent as ParkingLot} from '../../assets/svg/ParkingLot.svg';
import {ReactComponent as Toilet} from '../../assets/svg/Toilet.svg';
import {ReactComponent as WheelChair} from '../../assets/svg/WheelChair.svg';

const StyledButton = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: ${(props) => (props.shape === 'square')? "10%" : "100%"};
    background-color: #649BB7;
    width: 55px;
    height: 55px;
`

function PictogramIcons({ shape }){
    return (
        <>
        <StyledButton shape={shape}> <HelpDog fill="#FCFCFD" /> </StyledButton>
        <StyledButton shape={shape}> <AudioGuide fill="#FCFCFD" /> </StyledButton>
        <StyledButton shape={shape}> <ParkingLot fill="#FCFCFD" /> </StyledButton>
        <StyledButton shape={shape}> <Toilet fill="#FCFCFD" /> </StyledButton>
        <StyledButton shape={shape}> <WheelChair fill="#FCFCFD" /> </StyledButton>
        </>
    );
};

export default PictogramIcons;