import react from 'react';
import styled from 'styled-components';

// props에서 뱃지 안에 들어갈 내용(text), 색상(color)만 지정해 주시면 됩니다

const StyledButton = styled.span`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 10em;
    margin: 5px; 
    font-size: small;
    font-weight: bold;
    word-break: break-all;

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