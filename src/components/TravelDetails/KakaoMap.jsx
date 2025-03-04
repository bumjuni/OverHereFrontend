import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Axios } from "axios";

const { kakao } = window;

function KakaoMap() {
    const [kakaoMap, setKakaoMap] = useState(null);

    useEffect(() => {
        const container = document.getElementById('container');
        const options = {
            center: new kakao.maps.LatLng(37.50802, 127.062835),
            level: 3,
        };
        
        const map = new kakao.maps.Map(container, options);
    }, []);

    return (
    <div 
        id="container" 
        style={{width: '500px', height: '500px'}}
    ></div>
    );
};

export default KakaoMap;