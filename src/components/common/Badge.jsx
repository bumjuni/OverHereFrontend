import react from 'react';
import styled from 'styled-components';

// props에서 뱃지 안에 들어갈 내용(text), 색상(color)만 지정해 주시면 됩니다
// span으로 설정되어 있어서 상위 컴포넌트에서 div로 상하간격 조절 필요해요

const StyledButton = styled.span`
    padding: 5px 20px;
    border-radius: 15px;
    margin-right: 10px; 

    color: ${(props) => props.textColor || "black"};
    background-color: ${(props) => props.backgroundColor || "#505458"};
`
const backgroundColor = {"yellow": "#F0E68C", "gray": "#ECEEF0", "green": "#63A73E"};
const textColor = {"yellow": "#B39A1D", "gray": "#505458", "green": "#FCFCFD"};

function Badge({text, color}){
    return(
        <StyledButton 
            textColor={textColor[color]}
            backgroundColor={backgroundColor[color]}
        >{text}</StyledButton>
    );
}
export default Badge;