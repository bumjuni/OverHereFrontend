import React from "react";
import styled from "styled-components";
import {ReactComponent as Marker} from '../../assets/svg/Marker.svg';
import NonObstacleIcon from "../common/NonObstacleIcon";
import dummyImg from '../../assets/svg/dummy.svg';

// dummy
const dummy = [true, true, true, true, true];

const CourseDetailInfo = ({ place, title, img, description, nonObstacle }) => {
  const imgSrc = img? img : dummyImg;

  return (
    <Container>
      <MarkerWrapper>
        <Marker />
      </MarkerWrapper>
      {/* Image Placeholder */}
      <Image src={imgSrc} alt={title} />

      {/* Text Content */}
      <Details>
        <p>{place}</p>
        <h2>{title}</h2>
        <p>{description}{description}</p>
        <NonObstacleIcon data={dummy} />
      </Details>
    </Container>
  );
};

export default CourseDetailInfo;

const Container = styled.div`
  position: relative;
  display: flex;
  margin: 5em 0;
  color: #333;
  gap: 1em;
`
const Image = styled.img`
  height: 12em;
  aspect-ratio: 1 / 0.7;
  border-radius: 4px;
  object-fit: cover;
  margin-left: calc(2.5em + 33px);
`
const Details = styled.div`
  p {
    margin: 0;
    line-height: 1.5;
  }
  h2{
    margin: .3em 0;
  }
`
const MarkerWrapper = styled.div`
  // align-self: center;
  position: absolute;
  margin-right: 2.5em;
  top: calc(6em - 12px);
`