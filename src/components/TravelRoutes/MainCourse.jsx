import {React, useState} from "react";
import styled from "styled-components";
import ArrowButton from "./ArrowButton";
import Badge from "../common/Badge";
import InfoIcons from "./InfoIcons";
import dummyImg from '../../assets/svg/dummy.svg';

function MainCourse({data}) {
    const [currentPage, setCurrentPage] = useState(0);
    const imgSrc = data[currentPage].image? data[currentPage].image : dummyImg;
    
    return (
        <div className="content-container">
        {/* Left Column */}
        <div className="route-info">
          <div className="travelroutespageheader">
            <Badge text={data[currentPage].region} color="gray" />
            <Badge text={data[currentPage].courseType} color="yellow" />
          </div>
          <h1>{data[currentPage].title}</h1>
          <DefaultInfo>
            <InfoIcons data={data[currentPage].courseInfo}/>
          </DefaultInfo>
          
          <div className="navigation">
            <span className="page-info">
              {currentPage+1} / {data.length}
            </span>

            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${((currentPage+1) / data.length) * 100}%` }}
              ></div>
            </div>

            <div className="buttons">
             <ArrowButton onChange={setCurrentPage} currentPage={currentPage} totalPages={data.length}/>
            </div>

          </div>
        </div>

        {/* Right Column */}
        <div className="image-section">
          <Image src={imgSrc} alt={data[currentPage].title} />
        </div>
      </div>
    );
}

export default MainCourse;

const DefaultInfo = styled.div`
  display: flex;
  gap: 3em;
  width: 100%;
  padding: 1em 3em;
  align-items: center;
  margin: 2.5em 0;
`
const Image = styled.img`
  height: 22em;
  aspect-ratio: 1 / 0.65;
  background-color: #e0e0e0;
  border-radius: 5px;
  object-fit: cover;
`