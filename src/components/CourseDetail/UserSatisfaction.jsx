import React from "react";
import styled from "styled-components";
import {ReactComponent as Bad} from '../../assets/svg/CourseDetail/Bad.svg';
import {ReactComponent as Satisfied} from '../../assets/svg/CourseDetail/Satisfied.svg';
import {ReactComponent as Best} from '../../assets/svg/CourseDetail/Best.svg';

function UserSatisfaction() {
    return (
        <Container>
            <div>
                <h2>코스 정보를 편하게 보셨나요?</h2>
                <p>이 코스가 마음에 드셨나요? 더 나은 정보를 위해 의견을 남겨주세요.</p>
            </div>
            <ButtonContainer>   
                <Button> <Bad /> 아쉬워요 </Button>
                <Button> <Satisfied /> 만족해요 </Button>
                <Button> <Best /> 최고예요 </Button>
            </ButtonContainer>
        </Container>
    );
}

export default UserSatisfaction;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 3em 0;
`
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1em;
`
const Button = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #D4D8DC;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    height: 6.5em;
    width: 5.5em;
    gap: .5em;
`