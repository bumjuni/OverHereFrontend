import react from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';

function Footer(){
    return (
        <div id='footer'>
            <div className='footer-content'>
                <h1 className='footer-header'>여기너머</h1>    
                <div className='links footer-header'>
                    <Link className='normal' to='/'>개인정보취급방침</Link>
                    <Link className='normal' to='/'>이용약관</Link>
                    <Link className='normal' to='/'>고객센터</Link>
                </div>
                <p>팀 제로베리어 (대표: 이유경) | 기획 : 박창민 | 디자인 : 주윤정, 서장호 | FE : 이유경, 장지윤 | BE : 변성훈, 준혁</p>
                <p>전화번호 : 01012345678 | 이메일 : zerobarrier@gmail.com</p>             
            </div>
        </div>
    );
}
export default Footer;