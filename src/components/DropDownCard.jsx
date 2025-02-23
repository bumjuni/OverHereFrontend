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
    max-width: 44.5%;
    border: 1px solid #D4D8DC;
    border-radius: 10px;
    padding: 1.5em;
    gap: 1em;
    img {
        width: 100%;
        aspect-ratio: 5 / 3;
        border-radius: 3px;
    }
`
const Wrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
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
                <Wrapper>
                    <div>
                        <div>
                            <Badge text="지역 00시" color="gray" />
                            <Badge text="총 00KM" color="gray" />
                        </div>
                        <h3 style={{margin: 0}}> 텍스트 </h3>
                    </div>
                    <DropDownButton onClick={() => (setClicked(!clicked))}> <ArrowDown /> </DropDownButton>
                </Wrapper>

                {clicked && 
                <div>
                    <h3> 코스 정보(디자인팀 보류) </h3>
                </div>
                }

            </Card> 

        </>
    );
}

export default DropDownCard;