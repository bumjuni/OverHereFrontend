import {React, useState} from "react";
import styled from "styled-components";
import ArrowButton from "./ArrowButton";
import Badge from "../common/Badge";
import InfoIcons from "./InfoIcons";

function MainCourse({data}) {
    const [currentPage, setCurrentPage] = useState(0);
    
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
          <div className="placeholder-image"></div>
          {/* ??? */}
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
`