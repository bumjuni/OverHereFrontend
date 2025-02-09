import {react, useState} from 'react';
import styled from 'styled-components';
import {ReactComponent as ZoomIn} from '../../assets/svg/TravelDetails/ZoomIn.svg';

const BackGround = styled.div`
    position: relative;
    width: 280px;
    height: 200px;
    border-radius: 0.5em;
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
    width: 300px;
    aspect-ratio: 3 / 2;
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

function Pictures({src, name, handleClick}){

    return (
        <Wrapper>
            <BackGround>
            <div onClick={()=>handleClick(name)}>
                <Picture src={src} />
                <ZoomIn />
            </div>
            </BackGround>
            <span> {name} </span>
        </Wrapper>
    );
}

export default Pictures;