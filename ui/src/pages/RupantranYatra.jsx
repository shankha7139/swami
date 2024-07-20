import React, { useState } from "react";
import NewNavbar from "../components/NewNavbar";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import RupCard from "../components/RupCard";
import styled from "styled-components";
import end from "../assets/rupantarn/end.png";
import start from "../assets/rupantarn/start banner.png";
import Marquee from "react-fast-marquee";
import one from "../assets/rupantarn/marq`.png";
import two from "../assets/rupantarn/marq2.png";
import three from "../assets/rupantarn/marq3.png";
import four from "../assets/rupantarn/marq4.png";
import yt1 from "../assets/rupantarn/yt1.png";
import yt2 from "../assets/rupantarn/yt2.png";
import pic1 from "../assets/rupantarn/pic1.png";
import pic2 from "../assets/rupantarn/pic2.png";
import pic3 from "../assets/rupantarn/pic3.png";

export default function AllPrograms() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [see, setSee] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <Container>
      <NewNavbar isScrolled={isScrolled} />
      <div className="hero">
        <h1>RUPANTRAN YATRA</h1>
        <p>
          Welcome to the extraordinary journey of Rupantran Yatra – a
          groundbreaking initiative in the realm of prison reforms that unfolded
          from September 20th to October 4th, 2016. This transformative tour
          marked a paradigm shift in the approach towards inmate rehabilitation
          by organizing a 14-day journey to Haridwar for 18 prisoners from Tihar
          prison, a first-of-its-kind endeavor in the history of prison reforms.
          Immersed in the serenity of Haridwar, the participants engaged in a
          holistic program designed to catalyze personal transformation.
          <br />
          <br /> This unique experience encompassed elements such as yoga,
          meditation, spiritual discourse, Hindu rituals, and the embrace of a
          Gurukul lifestyle. The profound impact of this initiative went beyond
          the conventional boundaries of prison reforms, paving the way for a
          new chapter in the rehabilitation and rejuvenation of incarcerated
          individuals.
        </p>
        {see ? (
          <div>
            <p>
              <br />
              Rupantaran Yatra: A Holistic Prison Reform Initiative "Rupantaran
              Yatra," an initiative in the field of prison reform, was pioneered
              by Acharya ji, who crafted a 14-day comprehensive reformation
              program for jail inmates, centered around Vedic spiritual
              practices. This program aimed to bring about a profound
              transformation in the lives of inmates by addressing their core
              consciousness and spiritual well-being. Concept and Objectives
              Acharya Ji's vision was to utilize the ancient wisdom of Vedic
              spirituality to reform, reintegrate and rehabilitate the jail
              inmates, helping them break free from the psychological and
              emotional chains of their past. The core objective was to
              facilitate a deep, internal transformation that would pave the way
              for a more positive and reformed future. Program Design The
              program was meticulously designed to span 14 days, from September
              21 to October 4, 2016. A group of 18 inmates, all convicted for
              heinous crimes and serving their sentences in Tihar prison, were
              carefully selected for this unique journey. The selection was
              based on their willingness to participate and their perceived
              readiness for change. The Journey to Haridwar The inmates were
              taken on a spiritual journey to Haridwar, a city renowned for its
              religious significance and spiritual ambiance. What made this
              journey remarkable was the decision to allow these inmates to
              travel without any police or jail staff accompanying them,
              signifying a bold leap of faith in the transformative power of
              spirituality and trust in the process. Activities and Practices
              Upon arrival in Haridwar, the inmates adopted a Gurukul lifestyle,
              living in an environment reminiscent of ancient Indian education
              systems that emphasized holistic development. The daily schedule
              included: Yoga Classes: Regular yoga sessions aimed at improving
              physical health, mental clarity, and emotional balance. These
              sessions were tailored to the needs of the inmates, focusing on
              stress relief, enhancing concentration, and promoting overall
              well-being. Religious Rituals: The inmates participated in various
              religious rituals, including the Upanayan Sanskar, a traditional
              Vedic ceremony symbolizing the initiation into spiritual
              knowledge. These rituals were designed to instill a sense of
              discipline, devotion, and respect for spiritual values. Satsang:
              Regular gatherings for spiritual discourse and singing of
              devotional songs. Satsang sessions created a sense of community,
              offering emotional support and fostering a collective spirit of
              transformation. Discourses on Vedic Wisdom: Acharya ji delivered
              discourses on Vedic wisdom, providing insights into ancient
              spiritual teachings and their relevance to modern life. These
              discourses aimed to help inmates confront and overcome the traumas
              of their past, facilitating emotional healing and personal growth.
              Impact and Significance The "Rupantaran Yatra" was groundbreaking,
              marking the first time in history that such a spiritual journey
              was undertaken for convicted inmates. The program's holistic
              approach aimed to create a lasting impact on the consciousness of
              the participants, encouraging them to embrace positive change and
              rehabilitation. The absence of police or jail staff during the
              journey underscored the program's unique nature, highlighting a
              deep trust in the inmates' commitment to their transformation.
              This aspect also aimed to reinforce the inmates' sense of
              responsibility and self-worth, essential elements for their
              successful reintegration into society. In summary, "Rupantaran
              Yatra" stands as a pioneering model in prison reform,
              demonstrating the profound potential of Vedic spiritual practices
              in fostering deep, meaningful change in the lives of inmates.
              Through a blend of yoga, religious rituals, satsang, and Vedic
              wisdom, the program sought to heal and uplift, offering a path to
              redemption and a renewed sense of purpose.
            </p>
            <button className="lessbtn" onClick={() => setSee(!see)}>
              Show Less..
            </button>
          </div>
        ) : (
          <div>
            <button onClick={() => setSee(!see)}>Show More..</button>
          </div>
        )}
      </div>
      <h1 className="galHead">View Photos Here...</h1>
      <div className="gallery">
        <img src={pic1} alt="" />
        <img src={pic2} alt="" />
        <img src={pic3} alt="" />
        <img src={pic1} alt="" />
        <img src={pic2} alt="" />
        <img src={pic3} alt="" />
        <img src={pic1} alt="" />
        <img src={pic2} alt="" />
        <img src={pic3} alt="" />
      </div>
      <h1 className="marqHead">Media Coverage</h1>
      <div className="marq">
        <Marquee className="marquee">
          <img
            onClick={(e) =>
              (window.location.href =
                "https://timesofindia.indiatimes.com/city/dehradun/18-tihar-prisoners-on-transformation-tour-of-haridwar/articleshow/54487628.cms")
            }
            src={one}
            alt=""
          />
          <img
            onClick={(e) =>
              (window.location.href =
                "https://www.deccanherald.com/archives/fortnight-ganges-brings-change-heart-2089550")
            }
            src={two}
            alt=""
          />
          <img
            onClick={(e) =>
              (window.location.href =
                "https://www.vice.com/en/article/ne9dzq/from-prison-inmates-to-yoga-warriors")
            }
            src={three}
            alt=""
          />
          <img
            onClick={(e) =>
              (window.location.href =
                "https://www.asianage.com/delhi/18-tihar-convicts-attend-yoga-session-hardwar-035")
            }
            src={four}
            alt=""
          />
        </Marquee>
      </div>
      <RupCard />
      <div className="youtube">
        <h2>Watch Here</h2>
        <div className="tabs">
          <div className="left">
            <img
              onClick={(e) =>
                (window.location.href =
                  "https://www.youtube.com/watch?v=nKBllhj3soY")
              }
              className="hoverImg"
              src={yt1}
              alt=""
            />
            <p className="hoverPara">Virtual Journey</p>
          </div>
          <div className="right">
            <img
              onClick={(e) =>
                (window.location.href =
                  "https://www.youtube.com/c/PanchawatiYogashram/videos?app=desktop")
              }
              className="hoverImg"
              src={yt2}
              alt=""
            />
            <p className="hoverPara">Get Enlightened by our Program</p>
          </div>
        </div>
      </div>
      <div className="end-banner">
        <img src={end} alt="" />
      </div>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  overflow-x: hidden;

  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8% 5% 5%;
    background: linear-gradient(135deg, #f0f8ff, #e6f3ff);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

    h1 {
      font-size: 4.5rem;
      color: #02a66e;
      font-weight: 700;
      margin-bottom: 2rem;
      text-align: center;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    }

    p {
      font-size: 1.5rem;
      line-height: 1.8;
      color: #333;
      width: 80%;
      max-width: 1200px;
      text-align: center;
      margin-bottom: 2rem;
    }

    button {
      padding: 15px 40px;
      font-size: 1.5rem;
      border-radius: 50px;
      border: none;
      background: linear-gradient(45deg, #02a66e, #00c78e);
      color: #fff;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 5px 15px rgba(2, 166, 110, 0.3);

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 20px rgba(2, 166, 110, 0.4);
      }
    }

    .lessbtn {
      margin-top: 1rem;
    }
  }

  .galHead,
  .marqHead {
    font-size: 3.5rem;
    font-weight: 600;
    color: #02a66e;
    text-align: center;
    margin: 4rem 0 3rem;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  }

  .gallery {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 0 2%;
    overflow-x: auto;

    img {
      height: 60vh;
      min-width: 300px;
      object-fit: cover;
      border-radius: 20px;
      transition: all 0.5s ease;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

      &:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      }
    }
  }

  .marq {
    background: #ebf4f1;
    padding: 4rem 0;
    margin: 4rem 0;

    .marquee {
      img {
        height: 150px;
        margin: 0 50px;
        transition: all 0.3s ease;
        cursor: pointer;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }

  .youtube {
    text-align: center;
    padding: 4rem 0;
    background: linear-gradient(135deg, #f9f9f9, #f0f0f0);

    h2 {
      font-size: 3.5rem;
      font-weight: 600;
      color: #02a66e;
      margin-bottom: 3rem;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
    }

    .tabs {
      display: flex;
      justify-content: center;
      gap: 50px;
      padding: 0 5%;

      .left,
      .right {
        position: relative;
        width: 45%;
        max-width: 800px;

        img {
          width: 100%;
          border-radius: 20px;
          transition: all 0.5s ease;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

          &:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          }
        }

        p {
          position: absolute;
          bottom: 10%;
          left: 50%;
          transform: translateX(-50%);
          font-size: 1.5rem;
          color: #fff;
          background: rgba(2, 166, 110, 0.8);
          padding: 15px 30px;
          border-radius: 50px;
          opacity: 0;
          transition: all 0.3s ease;
        }

        &:hover p {
          opacity: 1;
          bottom: 15%;
        }
      }
    }
  }

  .end-banner {
    margin-top: 4rem;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  @media screen and (max-width: 1400px) {
    .hero {
      h1 {
        font-size: 4rem;
      }
      p {
        font-size: 1.4rem;
      }
    }

    .galHead,
    .marqHead,
    .youtube h2 {
      font-size: 3rem;
    }
  }

  @media screen and (max-width: 1024px) {
    .hero {
      h1 {
        font-size: 3.5rem;
      }
      p {
        font-size: 1.3rem;
      }
      button {
        font-size: 1.3rem;
      }
    }

    .galHead,
    .marqHead,
    .youtube h2 {
      font-size: 2.8rem;
    }

    .gallery img {
      min-width: 250px;
    }

    .youtube .tabs {
      flex-direction: column;
      align-items: center;
    }
    .youtube .tabs .left,
    .youtube .tabs .right {
      width: 80%;
    }
  }

  @media screen and (max-width: 768px) {
    .hero {
      h1 {
        font-size: 3rem;
      }
      p {
        font-size: 1.2rem;
        width: 90%;
      }
      button {
        font-size: 1.2rem;
        padding: 12px 30px;
      }
    }

    .galHead,
    .marqHead,
    .youtube h2 {
      font-size: 2.5rem;
    }

    .gallery img {
      min-width: 200px;
      height: 50vh;
    }

    .marq .marquee img {
      height: 120px;
      margin: 0 30px;
    }
  }

  @media screen and (max-width: 480px) {
    .hero {
      h1 {
        font-size: 2.5rem;
      }
      p {
        font-size: 1.1rem;
      }
      button {
        font-size: 1.1rem;
        padding: 10px 25px;
      }
    }

    .galHead,
    .marqHead,
    .youtube h2 {
      font-size: 2.2rem;
    }

    .gallery img {
      min-width: 150px;
      height: 40vh;
    }

    .marq .marquee img {
      height: 100px;
      margin: 0 20px;
    }

    .youtube .tabs .left,
    .youtube .tabs .right {
      width: 90%;
      p {
        font-size: 1.2rem;
        padding: 10px 20px;
      }
    }
  }
`;
