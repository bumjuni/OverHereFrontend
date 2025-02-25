import React from "react";
import styled from "styled-components";
import Badge from '../common/Badge';

const SimilarCourseCard = ({ image, region, type, title, description }) => {
  return (
    <Container>
      {/* Image Placeholder */}
      {image ? (
        <Image
          src={image}
          alt="Course"
        />
        ) : <DummyImage />
      }

      {/* Tags */}
      <div>
        <Badge text="지역" color="gray" />
        <Badge text="코스 유형" color="yellow" />
      </div>

      {/* Title */}
      <Title>{title}</Title>

      {/* Description */}
      <Description>
        {description}
      </Description>
    </Container>
  );
};

export default SimilarCourseCard;

const Container = styled.div`
  width: 15em;
  margin: 2em 0;
  `
const Title = styled.h3`
  margin: .3em 0 .5em 0;
`
const Image = styled.img`
  width: 100%; 
  aspect-ratio: 1 / 0.7;
  object-fit: cover;
  border: none;
  border-radius: 8px;
  margin-bottom: 10px;
  background-color: #ECEEF0;
`
const DummyImage = () => <Image as="div" />

const Description = styled.p`
  margin: 0; 
  color: #505458;
`
