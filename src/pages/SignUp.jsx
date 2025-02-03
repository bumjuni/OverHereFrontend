import {react, useState, useEffect} from 'react';
import './SignUp.css';

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

export default SignUp;