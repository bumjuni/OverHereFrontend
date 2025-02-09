import react from 'react';
import styled from 'styled-components';
import {ReactComponent as Convenience1} from '../../assets/svg/Convenience/1.svg';
import {ReactComponent as Convenience2} from '../../assets/svg/Convenience/2.svg';
import {ReactComponent as Convenience3} from '../../assets/svg/Convenience/3.svg';
import {ReactComponent as Convenience4} from '../../assets/svg/Convenience/4.svg';
import {ReactComponent as Convenience5} from '../../assets/svg/Convenience/5.svg';
import {ReactComponent as Convenience6} from '../../assets/svg/Convenience/6.svg';
import {ReactComponent as Convenience7} from '../../assets/svg/Convenience/7.svg';
import {ReactComponent as Convenience8} from '../../assets/svg/Convenience/8.svg';
import {ReactComponent as Convenience9} from '../../assets/svg/Convenience/9.svg';


const Icon = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 10%;
    background-color: ${(props) => (props.activate)? "#649BB7" : "#B5B9BD"};
    width: 3.5em;
    height: 3.5em;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

function ConvenienceIcons({activate}){ 
    // 추후 아이콘 배열로 만들어놓고 map으로 코드 압축
    return (
        <>
        <Wrapper>
            <Icon activate={activate[0]}> <Convenience1 fill="#FCFCFD" /> </Icon>
            <span>asdf</span>
        </Wrapper>
        <Wrapper>
            <Icon activate={activate[1]}> <Convenience2 fill="#FCFCFD" /> </Icon>
            <span>asdf</span>
        </Wrapper>
        <Wrapper>
            <Icon activate={activate[2]}> <Convenience3 fill="#FCFCFD" /> </Icon>
            <span>asdf</span>
        </Wrapper>
        <Wrapper>
            <Icon activate={activate[3]}> <Convenience4 fill="#FCFCFD" /> </Icon>
            <span>asdf</span>
        </Wrapper>
        <Wrapper>
            <Icon activate={activate[4]}> <Convenience5 fill="#FCFCFD" /> </Icon>
            <span>asdf</span>
        </Wrapper>
        <Wrapper>
            <Icon activate={activate[5]}> <Convenience6 fill="#FCFCFD" /> </Icon>
            <span>asdf</span>
        </Wrapper>
        <Wrapper>
            <Icon activate={activate[6]}> <Convenience7 fill="#FCFCFD" /> </Icon>
            <span>asdf</span>
        </Wrapper>
        <Wrapper>
            <Icon activate={activate[7]}> <Convenience8 fill="#FCFCFD" /> </Icon>
            <span>asdf</span>
        </Wrapper>
        <Wrapper>
            <Icon activate={activate[8]}> <Convenience9 fill="#FCFCFD" /> </Icon>
            <span>asdf</span>
        </Wrapper>
        </>
    );
};

export default ConvenienceIcons;