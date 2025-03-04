import react from 'react';
import styled from 'styled-components';
import {ReactComponent as SignLang} from '../../assets/svg/Convenience/SignLang.svg';
import {ReactComponent as Elevator} from '../../assets/svg/Convenience/Elevator.svg';
import {ReactComponent as Braille} from '../../assets/svg/Convenience/Braille.svg';
import {ReactComponent as Stroller} from '../../assets/svg/Convenience/Stroller.svg';
import {ReactComponent as NursingRoom} from '../../assets/svg/Convenience/NursingRoom.svg';
import {ReactComponent as Guide} from '../../assets/svg/Convenience/Guide.svg';



const IconList = [{pic: Elevator, span: "장애인용 승강기"}, 
                  {pic: NursingRoom, span: "수유실"},
                  {pic: Braille, span: "점자블록"},
                  {pic: Guide, span: "안내원"},
                  {pic: Stroller, span: "유모차 대여"},
                  {pic: SignLang, span: "수화 안내"}];

function ConvenienceIcons({activate}){ 
    return (
        <>
        {IconList.map((item, index) => (
            <Wrapper>
                <Icon activate={activate[index]}> <item.pic fill="#FCFCFD" /> </Icon>
                <span>{item.span}</span>
            </Wrapper>
        ))}
        </>
    );
};

export default ConvenienceIcons;

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
    text-align: center;
    width: 4em;
    word-break: keep-all;
    gap: .5em;
    span{
        font-size: 14px;
        line-height: 1.5;
        visibility: hidden;
    }
    &:hover{
        span{ visibility: visible; }
    }
`