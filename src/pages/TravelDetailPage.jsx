import react from 'react';
import styled from 'styled-components';
import axios from 'axios';
import MainInfo from '../components/TravelDetails/MainInfo';
import DetailInfo from '../components/TravelDetails/DetailInfo';

function TravelDetails(){
    return (
        <>
            <Header>
                <h1> 관광지 </h1>
                <p> | </p>
                <p> 카테고리 혹은 관광지에 대한 한줄설명 </p>
            </Header>
            <MainInfo />
            <DetailInfo />
        </>
    );
}

export default TravelDetails;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1em 0;
    border-bottom: 1px solid #505458;
    h1 {
        margin: .3em;
    }
    p {
        margin: .3em;
    }
`