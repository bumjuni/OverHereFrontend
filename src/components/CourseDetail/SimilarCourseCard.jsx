import React from "react";
import styled from "styled-components";
import Badge from '../common/Badge';
import dummyImg from '../../assets/svg/dummy.svg';

const SimilarCourseCard = ({ image, region, type, title, description }) => {
  const imgSrc = image? image : dummyImg;

  return (
    <Container>
      {/* Image Placeholder */}
      <Image src={imgSrc} alt={title} />

      {/* Tags */}
      <div>
        <Badge text={region} color="gray" />
        <Badge text={type} color="yellow" />
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
  aspect-ratio: 1 / 0.75;
  object-fit: cover;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: #ECEEF0;
`
const DummyImage = () => <Image as="div" />

const Description = styled.p`
  margin: 0; 
  color: #505458;
`
