import React from 'react';
import styled from 'styled-components';
import Badge from '../common/Badge';
import {ReactComponent as TotalDist} from '../../assets/svg/TotalDistance.svg';

const Card = styled.div`
    display: flex;
    justify-content: center;
    img {
        height: 12em;
        aspect-ratio: 1 / 0.65;
    }
`
const Rank = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    padding: 10px;
    background-color: white;
    height: 2.3em;
    aspect-ratio: 1 / 1;
`
const TotalKM = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 4px;
    gap: 7px;
`
const Content = styled.div`
    position: relative;
    padding: 0 1.5em;
    font-size: 12px;
`

function BestCourseCard({rank, img, name}){
    return (
        <Card>
            <div>
                <Rank>
                    Best <br /> {rank}
                </Rank>
                <img src={img} alt={name} />
            </div>
            <Content>
                <Badge text="지역" color="gray" />
                <Badge text="코스 설명" color="yellow" />
                <h2 style={{margin: "0.5em 0"}}>텍스트</h2>
                <p style={{fontSize: "12px"}}>코스 설명글 코스 설명글 코스 설명글 코스 설명글 코스 설명글 코스 설명글 코스 설명글 코스 설명글 코스 설명글 코스 설명글 코스 설명글 </p>
                <div className="best-badges">
                    <Badge text="관광지 이름" color="gray" />
                    <Badge text="관광지 이름" color="gray" />
                    <Badge text="관광지 이름" color="gray" />
                    <Badge text="관광지 이름" color="gray" />
                    <Badge text="관광지 이름" color="gray" />
                </div>
                <TotalKM><TotalDist /> 총 00KM  </TotalKM>
            </Content>
        </Card>
    );
}

export default BestCourseCard;