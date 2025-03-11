import {react, useState, useEffect} from 'react';
import styled from 'styled-components';

//추후 수정
/* CSS
.main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.signUp{
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 20%;
}
*/

function SignUp(){
    return (
        <div className="main">
            <h1>회원가입</h1>
            <form className="signUp">
                <span>이메일</span>
                <input
                    type="text"
                    placeholder="이메일을 입력해주세요"   
                />
                <span>비밀번호</span>
                <input
                    type="password"
                    placeholder="특수문자 포함 8자를 입력해주세요"
                />
                <span>비밀번호 확인</span>
                <input
                    type="password"
                    placeholder="비밀번호를 다시 한번 입력해주세요"
                />
                <button>회원가입</button>
            </form>
        </div>
    );
}

function SignIn(){
    return (
        <div className="main">
            <h1>로그인</h1>
            <form className="signUp">
                <span>이메일</span>
                <input
                    type="text"
                    placeholder="이메일을 입력해주세요"   
                />
                <span>비밀번호</span>
                <input
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                />
                <button>로그인</button>
            </form>
        </div>
    );
}

function LocalSign(){
    return (
        <>
        </>
    );
}

export default LocalSign;