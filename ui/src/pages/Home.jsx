import React, { useState } from "react";
import styled from "styled-components";
import heroImg from "../assets/hero right.png";
import x from "../assets/blob hero left.png";
import { Footer } from "../components/Footer";
import Selector from "../components/Selector";
import rupantran from "../assets/rupantran.png";
import vwc from "../assets/vwc.png";
import { FaAngleRight } from "react-icons/fa";
import Corosal from "../components/Corosal";
import Map from "../components/Map";
import NewNavbar from "../components/NewNavbar";
import { useNavigate } from "react-router-dom";
import Plan from "../components/Plan";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <Container>
      <NewNavbar isScrolled={isScrolled} />
      {/* <Navbar isScrolled={isScrolled} />
       */}
      <div className="hero">
        <div className="disp-left">
          <div className="image-blob">
            <img src={x} alt="" />
          </div>
          <div className="content">
            <h2>Our</h2>
            <h1>Leader</h1>
            <p>
              Yogi Shri Ashutosh ji Maharaj, a renowned Siddha Yogi in Kriya
              yoga, transforms inmates through yoga in Tihar prison. His
              enlightened vision aims to make India crime-free through yoga,
              inspiring youth, women, and children. Honored by the Prime
              Minister, he leads transformative journeys.
            </p>
            <button
              className="port-butt"
              onClick={() => {
                navigate("/portfolio");
              }}
            >
              Click Here
            </button>
          </div>
        </div>
        <div className="disp-right">
          <img src={heroImg} alt="" />
        </div>
      </div>
      {/* <Corosal /> */}
      <div className="vedic-wellness-center">
        <div className="disp">
          <div className="left">
            <h1>Vedic Wellness Center</h1>
            <p>
              Our objective at the Vedic Wellness Centre is that we want to give
              back to society and help you awaken your spirits. We support
              holistic therapies like yoga, Ayurveda, and naturopathy. We have
              been collaborating with people, corporations, and the
              disadvantaged section of society since our goal is to revive these
              antiquated practices for the benefit of society.
            </p>
          </div>
          <div className="right">
            <img src={vwc} alt="img" />
          </div>
        </div>
      </div>
      <div className="rupantran-yatra">
        <div className="disp">
          <div className="left">
            <img src={rupantran} alt="img" />
          </div>
          <div className="right">
            <h1>Rupantran Yatra</h1>
            <h2>A New chapter in Prison reforms.</h2>
            <h3>(20th September to 4th October, 2016)</h3>
            <p>
              Organized a transformational tour “Rupantran Yatra – A new chapter
              in prison reforms” for Inmates of Tihar prison. 18prisoners
              participate in 14 days “Rupantran Yatra” (Transformational) tour
              to Haridwar. Yoga, Meditation, spiritual discourse, Hindu rituals
              Gurukul lifestyle etc. to help transform their personalities.
              First time in the history of Prison Reforms such an initiative has
              been taken.
            </p>
            <a href="" onClick={() => navigate("/rupantranyatra")}>
              <div className="left">
                See full Program
                <FaAngleRight />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="display-section">
        <Selector />
      </div>
      <Plan />
      <Map />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  .display-section {
    padding-top: 3%;
  }
  .vedic-wellness-center {
    padding: 120px 120px 30px 120px;
    .disp {
      display: flex;
      gap: 100px;
      .left {
        font-family: Helvetica;
        h1 {
          font-size: 80px;
          font-weight: 400;
          color: #6ad2aa;
          padding: 0;
          margin: 0;
          font-family: Helvetica;
          padding-bottom: 5%;
        }
        p {
          font-size: 24px;
          color: #646464;
          font-weight: lighter;
          line-height: 35px;
          font-family: Helvetica;
        }
      }
    }
    img {
      width: 485px;
      height: 455px;
      object-fit: cover;
      border-radius: 10px;
    }
  }
  .rupantran-yatra {
    padding: 120px 120px 30px 120px;
    .disp {
      display: flex;
      gap: 100px;
      .right {
        font-family: Helvetica;
        h1 {
          font-family: Helvetica;
          font-size: 80px;
          font-weight: 400;
          color: #6ad2aa;
          padding: 0;
          margin: 0;
        }
        h2 {
          font-family: Helvetica;
          font-size: 32px;
          font-weight: 400;
          color: #16cf90;
          padding: 1% 0%;
          margin: 0;
        }
        h3 {
          font-family: Helvetica;
          font-size: 20px;
          font-weight: 400;
          padding: 1.5% 0%;
          margin: 0;
        }
        p {
          color: #646464;
          font-weight: lighter;
          line-height: 35px;
          font-family: Helvetica;
          font-size: 24px;
          padding: 1% 0% 3% 0%;
        }
        a {
          text-decoration: none;
          color: #007d52;
          font-size: 32px;
          font-weight: 400;

          margin: 3% 0%;
          .left {
            font-family: Helvetica;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    img {
      width: 485px;
      height: 455px;
      object-fit: cover;
      border-radius: 10px;
    }
  }
  .butt-click,
  .port-butt {
    padding: 12px 45px 12px 45px;
  }
  .port-butt {
    transition: all ease-in-out 0.25s;
  }
  .port-butt:hover,
  .port-butt:focus {
    box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
    transform: translateY(-0.25em);
    background: rgb(2, 166, 110, 0.6);
  }
  .hero {
    width: 100%;
    padding-top: 4rem;
    display: flex;
    /* background-image: linear-gradient(to top, rgb(255, 234, 210), #fff); */
    z-index: -1;
  }
  img {
    object-fit: cover;
    border-radius: 10px;
  }
  .disp-left {
    position: relative;
    padding-right: 60px;
    .image-blob {
      padding-top: 225px;
    }
    .content {
      position: absolute;
      top: 20%;
      left: 20%;
      h2 {
        font-size: 96px;
        margin: 0;
        font-weight: 500;
      }
      h1 {
        font-size: 128px;
        margin: 0;
        font-weight: 600;
        letter-spacing: 4px;
        background: linear-gradient(to right, #3bc797, #8bdab8);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
      }
      p {
        padding-right: 80px;
        padding-bottom: 30px;
        padding-top: 10px;
        font-family: Helvetica;
        font-size: 24px;
      }
    }
  }

  .disp-left,
  .disp-right {
    width: 100%;
  }
  button {
    margin: 3px;
    color: #460954;
    padding: 10px 12px 10px 12px;
    text-decoration: none;
    font-size: 18px;
    font-family: Helvetica;
    font-weight: 500;
    background-color: #02a66e;
    color: #fff;
    border: none;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
  }
  @media screen and (max-width: 481px) {
    width: 100%;
    margin: 0;
    padding: 0;
    .hero {
      margin: 0;
      padding: 0;
      flex-direction: column;
      .disp-left {
        padding: 0 !important;
        margin: 0 !important;
        .image-blob {
          img {
            width: 70%;
            padding-top: 45%;
          }
        }
        .content {
          left: 14%;
          h2 {
            font-size: 34px;
          }
          h1 {
            font-size: 58px;
          }
          p {
            font-size: 18px;
          }
        }
      }
      .disp-right {
        img {
          width: 70%;
          margin: auto;
        }
      }
    }
    .vedic-wellness-center,
    .rupantran-yatra {
      .disp {
        flex-direction: column;
      }
    }

    .vedic-wellness-center {
      margin-top: 45% !important ;
      .disp {
        .left {
          padding: 0;
          margin: 0;
          padding-top: 10%;
          h1 {
            font-size: 36px !important;
          }
          p {
            font-weight: lighter;
          }
        }
        .right {
          img {
            width: 90% !important;
            height: 90%;
            padding: 0 !important ;
            margin: 0 !important ;
          }
        }
      }
    }
    .rupantran-yatra {
      margin: 0px 40px 0px 40px;
      padding: 0;
      .disp {
        margin: 0;
        padding: 0;
        .right {
          padding: 0;
          margin: 0;
          h1 {
            font-size: 46px !important;
          }
          h2 {
            font-size: 26px;
          }
          h3 {
            font-size: 22px;
            padding: 10px 0px;
          }
          a {
            font-size: 26px;
            padding: 10px 0px;
          }
          p {
            font-weight: lighter;
          }
        }
        .left {
          img {
            display: none;
          }
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 0;
    padding: 0;
    .hero {
      margin: 0;
      padding: 0;
      flex-direction: column;
      .disp-left {
        .image-blob {
          img {
            width: 70%;
            padding-top: 45%;
          }
        }
        .content {
          h2 {
            font-size: 44px;
          }
          h1 {
            font-size: 68px;
          }
          p {
            font-size: 20px;
          }
        }
      }
      .disp-right {
        img {
          width: 70%;
          margin: 0;
        }
      }
    }
    .vedic-wellness-center,
    .rupantran-yatra {
      .disp {
        margin: 0;
        padding: 0;
        flex-direction: column;
      }
    }

    .vedic-wellness-center {
      margin: 0px 40px 0px 40px;
      padding: 0;
      .disp {
        margin: 0;
        padding: 0;
        .left {
          padding: 0;
          margin: 0;
          h1 {
            font-size: 56px;
          }
          p {
            font-weight: lighter;
          }
        }
        .right {
          img {
            width: 90%;
            height: 90%;
            padding: 0;
            margin: 0;
          }
        }
      }
    }
    .rupantran-yatra {
      margin: 0px 40px 0px 40px;
      padding: 0;
      .disp {
        margin: 0;
        padding: 0;
        .right {
          padding: 0;
          margin: 0;
          h1 {
            font-size: 56px;
          }
          h2 {
            font-size: 26px;
          }
          h3 {
            font-size: 22px;
            padding: 10px 0px;
          }
          a {
            font-size: 26px;
            padding: 10px 0px;
          }
          p {
            font-weight: lighter;
          }
        }
        .left {
          img {
            display: none;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1023px) {
    width: 100%;
    margin: 0;
    padding: 0;
    .hero {
      margin: 0;
      padding: 0;
      flex-direction: column;
      .disp-left {
        h2 {
          font-size: 64px;
        }
        h1 {
          font-size: 98px;
        }
        .image-blob {
          img {
            width: 70%;
            padding-top: 5%;
          }
        }
      }
      .disp-right {
        img {
          display: none;
        }
      }
    }
    .vedic-wellness-center,
    .rupantran-yatra {
      .disp {
        margin: 0;
        padding: 0;
        flex-direction: column;
      }
    }

    .vedic-wellness-center {
      margin: 0px 40px 0px 40px;
      padding: 0;
      .disp {
        margin: 0;
        padding: 0;
        .left {
          padding: 0;
          margin: 0;
          h1 {
            font-size: 56px;
          }
          p {
            font-weight: lighter;
          }
        }
        .right {
          padding: 0;
          margin: 0;
          img {
            width: 60%;
            height: 50%;
          }
        }
      }
    }
    .rupantran-yatra {
      margin: 0px 40px 0px 40px;
      padding: 0;
      .disp {
        margin: 0;
        padding: 0;
        .right {
          padding: 0;
          margin: 0;
          h1 {
            font-size: 56px;
          }
          h2 {
            font-size: 26px;
          }
          h3 {
            font-size: 22px;
            padding: 10px 0px;
          }
          a {
            font-size: 26px;
            padding: 10px 0px;
          }
          p {
            font-weight: lighter;
          }
        }
        .left {
          img {
            display: none;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1401px) {
    .hero {
      margin: 0;
      padding: 0;
      .disp-left {
        h2 {
          font-size: 64px;
        }
        h1 {
          font-size: 98px;
        }
        img {
          width: 70%;
          padding-top: 50%;
          padding-bottom: 0px;
        }
      }
      .disp-right {
        img {
          width: 70%;
          margin-top: 50%;
        }
      }
    }
  }
`;