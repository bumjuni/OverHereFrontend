import {react, useState, useEffect} from 'react';
import {ReactComponent as Naver} from '../assets/svg/Sign/Naver.svg';
import {ReactComponent as Kakao} from '../assets/svg/Sign/Kakao.svg';
import {ReactComponent as Google} from '../assets/svg/Sign/Google.svg';
import {ReactComponent as Logo} from '../assets/svg/Logo.svg';
import styled from 'styled-components';

const backColor = {"Naver": "#00C737", "Google": "#FFFFFF", "Kakao": "#FFDE00"};
const textColor = {"Naver": "white", "Google": "#505458", "Kakao": "black"};
const borderColor = {"Naver": "#00C737", "Google": "#D4D8DC", "Kakao": "#FFDE00"};

const SignupButton = styled.button`
    background-color: ${(props) => backColor[props.platform]};
    color: ${(props) => textColor[props.platform]};
    border: 1px solid ${(props) => borderColor[props.platform]};

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
    border-radius: 7px;
    width: 30em;
    min-width: 20em;
    font-weight: bold;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    margin: 10%;
`

const Divider = styled.div`
    display: inline-flex;
    align-items: center;
    color: #B5B9BD;
    gap: 10px;
    padding: 20px 0 10px 0;
    width: 25em;
    hr {
        background-color: #B5B9BD;
        border: none; 
        height: 1px;
        width: 8em;
    }
`

function SocialSign() {
    return (
        <>
            <Wrapper>
                <Logo />
                <Divider>
                    <hr /> <span> 로그인/회원가입 </span> <hr />
                </Divider>
                <SignupButton platform="Naver"> <Naver /> 네이버 계정으로 시작하기 </SignupButton>
                <SignupButton platform="Google"> <Google /> 구글 계정으로 시작하기 </SignupButton>
                <SignupButton platform="Kakao"> <Kakao /> 카카오 계정으로 시작하기 </SignupButton>
            </Wrapper>
        </>
    );
}

export default SocialSign;