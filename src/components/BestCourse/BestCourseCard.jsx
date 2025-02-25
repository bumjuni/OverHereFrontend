import React from 'react';
import styled from 'styled-components';
import Badge from '../common/Badge';
import {ReactComponent as TotalDist} from '../../assets/svg/TotalDistance.svg';


function BestCourseCard({rank, img, name}){
    return (
        <>
            <Card>
                <div>
                    {rank && 
                        <Rank>
                            Best <br /> {rank}
                        </Rank>
                    }
                        <img src={img} alt={name} />
                    </div>

                <Content>
                    <Badge text="지역" color="gray" />
                    <Badge text="코스 설명" color="yellow" />
                    <h2>텍스트</h2>
                    <p>코스 설명글 코스 설명글 코스 설명글 코스 설명글 코스 설명글 코스 설명글 코스 설명글 코스 설명글 코스 설명글 코스 설명글 코스 설명글 </p>
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
            <Divider />
        </>

    );
}

export default BestCourseCard;

const Card = styled.div`
    display: flex;
    justify-content: center;
    img {
        height: 14em;
        aspect-ratio: 1 / 0.6;
        object-fit: cover;
        border-radius: 5px;
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
    font-weight: bold;
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
    h2 {
        margin: 0.5em 0;
    }
`
const Divider = styled.div`
    border: 1px solid #D4D8DC;
    margin: 2.5em 0;
`