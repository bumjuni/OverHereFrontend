import {React, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Badge from "../common/Badge";
import ArrowButton from "./ArrowButton";
import {ReactComponent as Map} from '../../assets/svg/Map.svg';
import dummyImg from '../../assets/svg/dummy.svg';


function EditorPick({data}){
    const [curRecCourse, setCurRecCourse] = useState(0);
    const navigate = useNavigate();
    const toDetails = () => {
        navigate(`/course-details/${data.courseId}`);
    }

    return (
        <>
            <ButtonContainer>
                <ArrowButton onChange={setCurRecCourse} currentPage={curRecCourse} totalPages={data.length}/>
            </ButtonContainer>
            
            <CardContainer>
                {/* <div className="img-cropped"> */}
                <Image src={data[curRecCourse].image || dummyImg} alt={data[curRecCourse].title} />
                {/* </div> */}
                <Contents>
                    <Badge text="지역" color="gray" />
                    <Badge text="코스 유형" color="yellow" />
                    <h2>{data[curRecCourse].title}</h2>
                    <Description>
                        {data[curRecCourse].description} 
                    </Description>
                    <div className="badges">
                        {data[curRecCourse].attractions.map(item => 
                            <Badge text={item} color="gray" />
                        )}
                    </div>

                    <CourseButton type="button" onClick={toDetails}>
                        <Map /> 코스 둘러보기
                    </CourseButton>
                </Contents>
            </CardContainer>
        </>
        );
    }

export default EditorPick;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1em;
    justify-content: right;
    margin-bottom: 1em;
`
const CardContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: center;
    //   flex-wrap: wrap;
    padding: 2em;
    border: 1px solid #D4D8DC;
    border-radius: 5px;
    gap: 1.5em;
`
const CourseButton = styled.button`
    position: absolute;
    right: 2em;
    bottom: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: large;
    font-weight: bold;
    border: 1px solid #529B40;
    border-radius: 5px;
    background-color: #fff;
    color: #529B40;
    padding: 0.8em 1.5em;
    gap: 1em;
    cursor: pointer;    
`
const Contents = styled.div`
    max-width: 50%;
`
const Description = styled.span`
    word-break: break-word;
`
const Image = styled.img`
    height: 17em;
    aspect-ratio: 5 / 3;
    border-radius: 8px;
    object-fit: cover;
`