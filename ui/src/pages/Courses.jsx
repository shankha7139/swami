import React, { useState } from "react";
import styled from "styled-components";
import NewNavbar from "../components/NewNavbar";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import CourssSelect from "../components/CourseSelect";
import blob from "../assets/course/blob.png";

export default function Courses() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <Container>
      <NewNavbar isScrolled={isScrolled} />
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
      <CourssSelect />
      <Footer />
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
    }
  }
`;
