import react from 'react';
import styled from 'styled-components';
import {ReactComponent as PlusIcon} from '../../assets/svg/PlusIcon.svg';

function MoreContentsButton(props){
    return (
        props.shape=="square" ?
        <SquareButton onClick={() => props.onClick(props.params)}>더보기 <PlusIcon /> </SquareButton>
        : <RoundButton onClick={() => props.onClick(props.params)}>더보기 <PlusIcon /> </RoundButton>
    );
}

export default MoreContentsButton;

const SquareButton = styled.button`
    display: flex;
    justify-self: center;
    margin-bottom: 3.5em;
    padding: .8em 1.5em;
    border-radius: 4px;
    background-color: unset;
    border: 1px solid #505458;
    color: #505458;
    font-size: large;
    font-weight: bolder;
    text-align: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    svg>path {
        fill: #505458;
    }
    &:hover{
        background-color: #f0f0f0;
        transition: 0.3s ease;
    }
`
const RoundButton = styled.button`
    display: flex;
    justify-self: center;
    margin-bottom: 3.5em;
    padding: .8em 1.5em;
    border-radius: 30rem;
    background-color: unset;
    border: 1px solid #529B40;
    color: #529B40;
    font-size: large;
    font-weight: bolder;
    text-align: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    &:hover{
        background-color: #f0f0f0;
        transition: 0.3s ease;
    }
`;
