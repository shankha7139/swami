import React, { useState } from "react";
import hero from "../assets/portfolio/hero.png";
import { useNavigate } from "react-router-dom";
import NewNavbar from "../components/NewNavbar";
import styled from "styled-components";
import banner from "../assets/portfolio/banner.png";
import Marquee from "../components/Marquee";
import { Footer } from "../components/Footer";
import Membership from "../components/Membership";
import Awards from "../components/Awards";
import Projects from "../components/Projects";
import NewMem from "../components/NewMem";

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <Container>
      <NewNavbar isScrolled={isScrolled} />
      {/* <img className="Banner-img" src={banner} alt="" /> */}
      <div className="hero">
        <div className="left">
          <h1>Acharya Ashutosh Kumar</h1>
          <img src={hero} alt="" />
        </div>
        <div className="right">
          {/* <h2>About me</h2> */}
          <span>
            A renowned Yoga teacher with expertise in holistic reform and
            rehabilitation through yoga and spirituality. In his 20 years of
            social service, Ashutosh ji has taken several initiatives to revive
            and promote Yoga in the society in India and abroad. With the
            expertise in the Siddha Yogi in Kriya Yoga technique which focuses
            on spiritual development of an individual. Acharya ji achieved the
            rare Honor of Kaya Yogi, in which a yogi can transform his body. His
            work in the field of prison reform through yoga and spirituality
            with the objective of{" "}
            <span className="decor">“ योग युक्त भारत अपराध मुक्त भारत “ </span>
            has been acknowledged and appreciated by several elites of the
            society and specially by Honorable Prime Minister of India Shri.
            Narendra Modi and Honorable Atal Bihari Vajpayee.
          </span>
        </div>
      </div>
      <Marquee />
      <NewMem />
      <Projects />
      <Awards />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  .hero {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 40px;
    padding: 90px 0;

    .left {
      flex: 1;
      min-width: 300px;
      text-align: center;

      h1 {
        color: #02a66e;
        font-size: 42px;
        font-weight: 600;
        margin-bottom: 30px;
      }

      img {
        max-width: 100%;
        height: auto;
        border-radius: 10px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      }
    }

    .right {
      flex: 1;
      min-width: 300px;

      span {
        font-size: 18px;
        line-height: 1.6;
        color: #333;

        .decor {
          color: #02a66e;
          font-weight: 600;
          text-decoration: underline;
          cursor: pointer;
          transition: color 0.3s ease;

          &:hover {
            color: #018756;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1200px) {
    .hero {
      padding: 80px 0;

      .left h1 {
        font-size: 36px;
      }

      .right span {
        font-size: 16px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .hero {
      flex-direction: column;
      text-align: center;
      padding: 70px 0;
      .left {
        h1 {
          font-size: 32px;
        }
      }

      .right {
        padding: 0;
      }
    }
  }

  @media screen and (max-width: 480px) {
    .hero {
      padding: 70px 0;
      .left h1 {
        font-size: 28px;
      }

      .right span {
        font-size: 14px;
      }
    }
  }
`;
