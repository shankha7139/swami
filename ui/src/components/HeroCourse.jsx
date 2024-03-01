import React from "react";
import styled from "styled-components";
import blob from "../assets/course/blob.png";

export default function HeroCourse() {
  return (
    <Container>
      <div className="hero">
        <div className="left">
          <h1>Courses covering all levels of experience</h1>
          <h2>
            Embrace the journey to self-discovery with our comprehensive yoga
            courses ...
          </h2>
          <div className="nums">
            <div className="one">
              <div className="top">3+</div>
              <div className="down">Courses to choose from</div>
            </div>
            <div className="two">
              <div className="top">1000+</div>
              <div className="down">Students Trained</div>
            </div>
            <div className="three">
              <div className="top">10+</div>
              <div className="down">Professional Trainers</div>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={blob} alt="" />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .hero {
    padding: 8% 10%;
    display: flex;
    gap: 10px;
    flex: 50%;
    .left {
      width: 100%;
      h1 {
        font-size: 72px;
        font-weight: 500;
        padding: 0.2% 1.8%;
        padding-top: 8%;
      }
      h2 {
        font-size: 32px;
        padding: 2% 1.8%;
      }
      .nums {
        padding: 2% 1.8%;
        display: flex;
        gap: 2%;
        .top {
          font-size: 24px;
          font-weight: 400;
        }
        .down {
          font-size: 22px;
          padding-right: 2%;
        }
        .one {
          .top {
            color: #dfce30;
          }
        }
        .two {
          .top {
            color: #02a66e;
          }
        }
        .three {
          .top {
            color: #e3871b;
          }
        }
      }
    }
    .right {
      width: 80%;
      img {
        height: auto;
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 481px) {
    .hero {
      flex-direction: column;
      .left {
        padding-top: 8%;
        width: 100%;
        h1 {
          font-size: 48px;
          color: black;
        }
        h2 {
          font-size: 24px;
        }
      }
    }
  }
`;
