import react from 'react';
import styled from 'styled-components';

const BackGround = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: #000000;
    opacity: .7;
    z-index: 1;
    display: block;
    // display: ${(props) => (props.open)? "block" : "none"};
`
const Popup = styled.img`
    position: fixed;
    top: 20%;
    left: 40%;
    z-index: 2;
    width: 30vw;
    height: 60vh;
`
const CloseButton = styled.button`
    position: fixed;
    top: 20%;
    left: 75%;
    z-index: 2;
`

function Modal({src, open, handleClick}){
    console.log(open);
    return (
        <>
            {open && 
                <>
                <CloseButton onClick={()=>handleClick(false)}>X</CloseButton>
                <Popup src={src}/>
                <BackGround />
                </>
            }
        </>
    );
}

export default Modal;