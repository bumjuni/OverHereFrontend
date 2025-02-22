import react from 'react';
import styled from 'styled-components';
import {ReactComponent as PlusIcon} from '../../assets/svg/PlusIcon.svg';

const StyledButton = styled.button`
    display: flex;
    justify-self: center;
    margin-bottom: 3.5em;
    padding :10px 20px;
    border-radius: 30rem;
    background-color: unset;
    border: 1px solid #529B40;
    color: #529B40;
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
// props로 어떤 페이지인지 받아와서 적절한 api 호출

function MoreContentsButton(props){
    return (
        <StyledButton>더보기 <PlusIcon /></StyledButton>
    );
}

export default MoreContentsButton;
