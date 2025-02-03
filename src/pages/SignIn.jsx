import {react, useState, useEffect} from 'react';
import './SignUp.css';

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

export default SignIn;