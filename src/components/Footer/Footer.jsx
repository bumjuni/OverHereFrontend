import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/svg/Logo.svg';
import './Footer.css';

function Footer(){
    return (
        <div id='footer'>
            {/* <h1 className='footer-header'>여기너머</h1>     */}
            <div className="footer-header">
                <Logo />
                <div className='links' style={{ display: "flex", gap: "15px" }}>
                    <Link className="normal" to="/notice">공지사항</Link>
                    <Link className='normal' to='/privacy'>개인정보취급방침</Link>
                    <Link className='normal' to='/terms'>이용약관</Link>
                    <Link className='normal' to='/help'>고객센터</Link>
                </div>
            </div>
            <p>팀 여기너머 (대표: 박창민) | 기획 : 박창민 | 디자인 : 주윤정, 서장호 | FE : 이유경, 장지윤 | BE : 준혁, 임세현</p>
            <p>서비스 문의메일 | yeogineomeo@gmail.com</p>
            <p>ⓒ 2024 Yeogineomeo. All Rights Reserved</p>      
        </div>
    );
}
export default Footer;