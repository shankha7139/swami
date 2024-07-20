import React from "react";
import styled, { keyframes } from "styled-components";
import news1 from "../assets/portfolio/new1.png";
import news2 from "../assets/portfolio/news2.png";
import news3 from "../assets/portfolio/news3.png";
import news4 from "../assets/portfolio/news4.png";
import news5 from "../assets/portfolio/news5.png";

const Marquee = () => {
  const newsImages = [news1, news2, news3, news4, news5];

  return (
    <Container>
      <Badge>Acharya Ashutosh Kumar in media</Badge>
      <SliderWrapper>
        <SliderContainer>
          <SliderContent>
            {[...Array(6)].map((_, index) => (
              <ImageWrapper key={index}>
                {newsImages.map((image, imgIndex) => (
                  <ImageItem key={imgIndex}>
                    <img src={image} alt={`News ${imgIndex + 1}`} />
                  </ImageItem>
                ))}
              </ImageWrapper>
            ))}
          </SliderContent>
        </SliderContainer>
      </SliderWrapper>
    </Container>
  );
};

export default Marquee;

const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Badge = styled.div`
  background-color: #02a66e;
  color: #fff;
  font-weight: bold;
  text-align: center;
  padding: 12px 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  /* Responsive font size */
  font-size: 36px;

  @media (max-width: 1200px) {
    font-size: 32px;
  }

  @media (max-width: 992px) {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 576px) {
    font-size: 20px;
  }

  @media (max-width: 400px) {
    font-size: 18px;
  }
`;

const SliderWrapper = styled.div`
  background-color: #ebf4f1;
  padding: 20px 0;
`;

const SliderContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
`;

const marqueeAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-33.33%);
  }
`;

const SliderContent = styled.div`
  display: inline-block;
  white-space: nowrap;
  animation: ${marqueeAnimation} 30s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const ImageWrapper = styled.div`
  display: inline-block;
`;

const ImageItem = styled.div`
  display: inline-block;
  margin: 0 15px;
  height: 60px;
  width: 100px;
  transition: transform 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    height: 45px;
    width: 75px;
    margin: 0 10px;
  }

  @media (max-width: 480px) {
    height: 30px;
    width: 50px;
    margin: 0 5px;
  }
`;