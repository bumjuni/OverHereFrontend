import react from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Logo from '../../assets/image/Logo.png';
import './index.css';

function Footer(){
    return (
        <div id='footer'>
            {/* <h1 className='footer-header'>여기너머</h1>     */}
            <div className="footer-header">
                <img src={Logo} alt="여기너머" width="120px"/>
                <div className='links'>
                    <Link className='normal' to='/'>개인정보취급방침</Link>
                    <Link className='normal' to='/'>이용약관</Link>
                    <Link className='normal' to='/'>고객센터</Link>
                </div>
            </div>
            <p>팀 제로베리어 (대표: 이유경) | 기획 : 박창민 | 디자인 : 주윤정, 서장호 | FE : 이유경, 장지윤 | BE : 변성훈, 준혁</p>
            <p>서비스 문의메일 | zerobarrier@gmail.com</p>
            <p>ⓒ 2024 Yeogineomeo. All Rights Reserved</p>      
        </div>
    );
}
export default Footer;