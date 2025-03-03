import react from 'react';
import styled from 'styled-components';
import {ReactComponent as RefreshIcon} from '../../assets/svg/Search/RefreshIcon.svg';

const StyledButton = styled.button`
    display: inline-flex;
    align-items: center;
    border: none;
    background-color: unset;
    gap: 5px;
    color: #8E9398;
    font-size: 10px;
    cursor: pointer;
`

function RefreshButton(){
    const handleRefresh = () => {
        // setSelectedReg(null);
        // setSelectedType(null);
        // setSearchWord(null);
        window.location.reload();
    }
    
    return (
        <>
            <StyledButton onClick={handleRefresh}> <RefreshIcon /> 초기화 </StyledButton>
        </>
    );
}

export default RefreshButton;