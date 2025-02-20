import {React, useState, useNavigate} from "react";
import styled from "styled-components";
import Badge from "../common/Badge";
import ArrowButton from "./ArrowButton";
import {ReactComponent as Map} from '../../assets/svg/Map.svg';


function EditorPick({data}){
    const [curRecCourse, setCurRecCourse] = useState(0);
    
    return (
        <>
            <div className="buttons right-side">
                <ArrowButton onChange={setCurRecCourse} currentPage={curRecCourse} totalPages={data.length}/>
            </div>
            
            <div className="rec-card">
                {/* <div className="img-cropped"> */}
                <img src={data[curRecCourse].image} alt={data[curRecCourse].title} className="rec-image"></img>
                {/* </div> */}
                <div className="rec-contents">
                    <Badge text="지역" color="gray" />
                    <Badge text="코스 유형" color="yellow" />
                    <h3>{data[curRecCourse].title}</h3>
                    <span className="description">
                        {data[curRecCourse].description} 
                    </span>
                    <div className="badges">
                        {data[curRecCourse].attractions.map(item => 
                            <Badge text={item} color="gray" />
                        )}
                    </div>
                {/* useNavigate로 구현 */}
                        <button className="course-button" type="button"><Map /> 코스 둘러보기</button>
                </div>
            </div>
        </>
        );
    }

export default EditorPick;