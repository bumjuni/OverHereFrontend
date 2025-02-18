import {react, useState} from 'react';
import styled from 'styled-components';
import Badge from './common/Badge';
import {ReactComponent as ArrowDown} from '../assets/svg/ArrowDown.svg';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 45%;
    border: 1px solid gray;
    border-radius: 10px;
    img {
        width: 300px;
        aspect-ratio: 5 / 3;
        padding: 5%;
    }
`
const DropDownButton = styled.button`
    border: none;
    background-color: unset;
`

function DropDownCard({src, alt}){
    const [clicked, setClicked] = useState(false);
    

    return (
        <>
            <Card>
                <img src={src} alt={alt} />
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div>
                        <div>
                            <Badge text="지역 00시" color="gray" />
                            <Badge text="총 00KM" color="gray" />
                        </div>
                        <span> 텍스트 </span>
                    </div>
                    <DropDownButton onClick={() => (setClicked(!clicked))}> <ArrowDown /> </DropDownButton>
                </div>
            </Card> 

            {clicked && 
                <div>
                    <h3> 코스 정보(디자인팀 보류) </h3>
                </div>
            }
        </>
    );
}

export default DropDownCard;