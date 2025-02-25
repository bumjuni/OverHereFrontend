import react from 'react';
import styled from 'styled-components';

// props에서 뱃지 안에 들어갈 내용(text), 색상(color)만 지정해 주시면 됩니다

const StyledButton = styled.span`
    display: inline-block;
    border-radius: 10em;
    font-size: .8em;
    font-weight: bold;
    word-break: break-all;
    white-space: nowrap; 

    padding: ${(props) => props.backgroundcolor? "5px 10px" : "unset"};
    margin: ${(props) => props.backgroundcolor? "0 7px 5px 0" : "unset"}; 

    color: ${(props) => props.textcolor || "#8E9398"};
    background-color: ${(props) => props.backgroundcolor || "unset"};
`
const backgroundColor = {"yellow": "#F0E68C", "gray": "#ECEEF0", "green": "#63A73E"};
const textColor = {"yellow": "#B39A1D", "gray": "#505458", "green": "#FCFCFD"};

function Badge({text, color}){
    return(
        <StyledButton 
            textcolor={textColor[color]}
            backgroundcolor={backgroundColor[color]}
        >{text}</StyledButton>
    );
}
export default Badge;