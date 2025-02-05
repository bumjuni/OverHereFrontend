import react from 'react';
import styled from 'styled-components';
import {ReactComponent as PlusIcon} from '../../assets/svg/PlusIcon.svg';

const StyledButton = styled.button`
    display: flex;
    justify-self: center;
    margin: 10%;
    padding :10px 20px 10px 20px;
    border-radius: 30rem;
    font-weight: bolder;
    text-align: center;
    align-items: center;
    gap: 10px;
`;
// props로 어떤 페이지인지 받아와서 적절한 api 호출

function MoreContentsButton(props){
    return (
        <StyledButton>더보기 <PlusIcon /></StyledButton>
    );
}

export default MoreContentsButton;
