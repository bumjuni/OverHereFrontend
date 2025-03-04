import {react, useState} from 'react';
import styled from 'styled-components';
import {ReactComponent as ZoomIn} from '../../assets/svg/TravelDetails/ZoomIn.svg';

function Pictures({src, index, onClick}){

    return (
        <Wrapper>
            <BackGround>
                <Picture src={src} id={index} onClick={onClick} />
                <ZoomIn />
            </BackGround>
        </Wrapper>
    );
}

export default Pictures;

const BackGround = styled.div`
    position: relative;
    aspect-ratio: 1 / 0.7;
    border-radius: 4px;
    overflow: hidden;
    background-color: #000000;
    svg{
        position: absolute;
        top: 42%;
        left: 45%;
        visibility: hidden;
        pointer-events: none;
    }
    &:hover svg{
        visibility: visible;
        transition: .3s ease-in-out;
    }
`
const Picture = styled.img`
    width: 100%;
    aspect-ratio: 1 / 0.7;
    object-fit: cover;
    cursor: pointer;
    &:hover{
        opacity: .5;
        transition: .2s ease-in-out;
    }
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-size: larger;
    // gap: 0.7em;
    padding: 0.7em 0.5em 0.7em 0.5em;
    // padding: calc((100vw / 4) - 280px);
`