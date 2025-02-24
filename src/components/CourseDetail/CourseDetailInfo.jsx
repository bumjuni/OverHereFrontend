import React from "react";
import styled from "styled-components";
import {ReactComponent as Marker} from '../../assets/svg/Marker.svg';

const CourseDetailInfo = ({ place, title, img, description, icon }) => {
  return (
    <Container>
      <MarkerWrapper>
        <Marker />
      </MarkerWrapper>
      {/* Image Placeholder */}
      <Image src={img} alt={title} />

      {/* Text Content */}
      <Details>
        <p>{place}</p>
        <h4>{title}</h4>
        <p>{description}</p>
        <p>{description}</p>
        <div>{icon}</div>
      </Details>
    </Container>
  );
};

export default CourseDetailInfo;

const Container = styled.div`
  display: flex;
  margin: 2em 0;
  color: #333;
  gap: 1em;
`
const Image = styled.img`
  height: 9em;
  aspect-ratio: 1 / 0.7;
  border-radius: 4px;
`
const Details = styled.div`
  
  p {
    font-size: 12px;
    margin: 0;
    line-height: 1.5;
  }
  h4{
    margin: .3em 0;
    font-weight: bolder;
  }
`
const MarkerWrapper = styled.div`
  align-self: center;
  margin-right: 2.5em;
`