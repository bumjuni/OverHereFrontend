import react from 'react';
import styled from 'styled-components';
import dummy from '../../assets/image/dummy/dummy_img4.jpg';
import {ReactComponent as Call} from '../../assets/svg/Call.svg';
import {ReactComponent as Time} from '../../assets/svg/Time.svg';
import {ReactComponent as Website} from '../../assets/svg/Website.svg';
import {ReactComponent as Destination} from '../../assets/svg/Destination.svg';
import Badge from '../common/Badge';
import PictogramIcons from '../common/PictogramIcons';
import './MainInfo.css';


function MainInfo(){
    return (
        <>
            <div className="dest-contents">
                <div className="dest-infoBox">
                    <div id="type-badge">
                        <Badge text="관광지 유형" color="green" />
                    </div>
                    <h2> 관광지 이름 </h2>
                    <span> <Destination /> 00구 00로 00길 </span>
                    <span> <Call /> 010-0000-0000 </span>
                    <span> <Website /> abc.ac.kr </span>
                    <span style={{alignItems:"start"}}> <Time /> 00:00 ~ 00:00 <br /> 공휴일 휴무 </span>

                    <h3> 무장애 편의정보 </h3>
                    <div className="pictograms">
                        <PictogramIcons shape="square"/>
                    </div>
                </div>

                <div className="dest-imgBox">
                    <span> 🚩 12,345회 </span>
                    <span> 🚩 9,999 </span>
                    <div className="img-cropped">
                        <img src={dummy} alt="asdf" className="dest-img"/>
                    </div>
                    <button> 🚩 </button>
                    <button> 🚩 </button>
                </div>
            </div>
        </>
    );
}

export default MainInfo;