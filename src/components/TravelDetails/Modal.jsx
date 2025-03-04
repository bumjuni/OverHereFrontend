import react from 'react';
import styled from 'styled-components';
import {ReactComponent as Close} from '../../assets/svg/Close.svg';
import {ReactComponent as ArrowBack} from '../../assets/svg/ArrowBack.svg';
import {ReactComponent as ArrowForward} from '../../assets/svg/ArrowForward.svg';

function Modal({src, cur, totalPages, handleClick}){
    const handleCycle = (direction) => {
        direction>0? handleClick((cur + 1) % totalPages) : 
                     handleClick((cur-1 + totalPages) % totalPages);
    }
    return (
        <>
        <CloseButton onClick={()=>handleClick(-1)}> <Close /> </CloseButton>
        <PopupImg src={src}/>

        <BackButton onClick={() => handleCycle(-1)}><ArrowBack /> </BackButton>
        <ForwardButton onClick={() => handleCycle(1)}><ArrowForward /></ForwardButton>

        <BackGround />
        </>
    );
}

export default Modal;

const BackGround = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: #000000;
    opacity: .7;
    z-index: 1;
`
const PopupImg = styled.img`
    position: fixed;
    z-index: 2;
    max-width: 80%;
    max-height: 80%;
    align-self: anchor-center;
    justify-self: anchor-center;
`
const CloseButton = styled.button`
    position: fixed;
    top: 10%;
    left: 90%;
    z-index: 3;
    background-color: unset;
    border: none;
    cursor: pointer;
`
const StyledButton = styled.button`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border: 1px solid #505458;
    border-radius: 50%;
    height: 3em;
    width: 3em;
    z-index: 10;
    cursor: pointer;
`
const ForwardButton = styled(StyledButton)`
    left: 90%;
    top: 50%;
`
const BackButton = styled(StyledButton)`
    left: 10%;
    top: 50%;
`